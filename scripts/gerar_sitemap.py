"""Gera o sitemap.xml do portal a partir dos arquivos HTML publicáveis, com a data real de modificação.

Uso (a partir da raiz do projeto):
    python scripts/gerar_sitemap.py
"""
from __future__ import annotations

import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

DOMINIO = "https://taes-federal.com.br"
RAIZ = Path(__file__).resolve().parent.parent
PASTAS_IGNORADAS = {"scripts", "data", "assets", ".github", "__pycache__"}


def paginas_publicaveis(raiz: Path) -> list[Path]:
    """Lista os HTML da raiz e de artigos/, sem pastas técnicas."""
    if not raiz.is_dir():
        raise FileNotFoundError(f"Pasta do projeto não encontrada: {raiz}")
    achadas: list[Path] = []
    for caminho in sorted(raiz.rglob("*.html")):
        partes = set(caminho.relative_to(raiz).parts[:-1])
        if partes & PASTAS_IGNORADAS:
            continue
        achadas.append(caminho)
    return achadas


def url_da(raiz: Path, caminho: Path) -> str:
    rel = caminho.relative_to(raiz).as_posix()
    if rel == "index.html":
        return f"{DOMINIO}/"
    return f"{DOMINIO}/{rel}"


def prioridade(rel: str) -> str:
    if rel == "index.html":
        return "1.0"
    if rel.startswith("artigos/") and rel != "artigos/index.html":
        return "0.8"
    return "0.6"


def gerar(raiz: Path) -> str:
    linhas = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for caminho in paginas_publicaveis(raiz):
        rel = caminho.relative_to(raiz).as_posix()
        data = datetime.fromtimestamp(caminho.stat().st_mtime, tz=timezone.utc).strftime("%Y-%m-%d")
        linhas += [
            "  <url>",
            f"    <loc>{escape(url_da(raiz, caminho))}</loc>",
            f"    <lastmod>{data}</lastmod>",
            f"    <priority>{prioridade(rel)}</priority>",
            "  </url>",
        ]
    linhas.append("</urlset>")
    return "\n".join(linhas) + "\n"


def main() -> int:
    conteudo = gerar(RAIZ)
    (RAIZ / "sitemap.xml").write_text(conteudo, encoding="utf-8", newline="\n")
    total = conteudo.count("<url>")
    print(f"sitemap.xml gerado com {total} páginas")
    return 0


if __name__ == "__main__":
    sys.exit(main())
