# -*- coding: utf-8 -*-
"""
minerador_concursos_tae.py
---------------------------
Robo de Web Scraping para mineracao de concursos publicos reais da carreira
Tecnico-Administrativo em Educacao (PCCTAE) em Universidades Federais (IFES)
e Institutos Federais (IFs) de todo o Brasil.

Recurso: Baseado na biblioteca Scrapling (G:\\Meu Drive\\APP\\_Recursos_e_Skills_Zips\\AGy\\Scrapling-main)
com fallback resiliente para requests + BeautifulSoup.

Autor: YLuna85 LABs & IF Baiano APPs
"""

import os
import sys
import json
import re
import argparse
from datetime import datetime
import urllib.parse

# Configuracao de saida UTF-8 para console Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Tentativa de importacao do Scrapling com fallback
try:
    from scrapling import Fetcher
    SCRAPLING_DISPONIVEL = True
except ImportError:
    import requests
    from bs4 import BeautifulSoup
    SCRAPLING_DISPONIVEL = False

# Fontes oficiais e agregadores de concursos federais
FONTES_PCI = [
    {"url": "https://www.pciconcursos.com.br/concursos/nacional/", "regiao": "Nacional", "uf_padrao": "DF"},
    {"url": "https://www.pciconcursos.com.br/concursos/sudeste/", "regiao": "Sudeste", "uf_padrao": "SP"},
    {"url": "https://www.pciconcursos.com.br/concursos/nordeste/", "regiao": "Nordeste", "uf_padrao": "BA"},
    {"url": "https://www.pciconcursos.com.br/concursos/sul/", "regiao": "Sul", "uf_padrao": "RS"},
    {"url": "https://www.pciconcursos.com.br/concursos/centro-oeste/", "regiao": "Centro-Oeste", "uf_padrao": "DF"},
    {"url": "https://www.pciconcursos.com.br/concursos/norte/", "regiao": "Norte", "uf_padrao": "PA"},
]

TERMOS_INCLUSAO = [
    "instituto federal", "ifbaiano", "ifba", "ifsp", "ifmg", "ifrn", "ifce", "ifpe",
    "ifpb", "ifma", "ifal", "ifse", "ifpi", "iftm", "ifsudestemg", "ifnmg", "ifsuldeminas",
    "ifrj", "iff", "ifes", "ifrs", "iffarroupilha", "ifsul", "ifpr", "ifsc",
    "ifgoiano", "ifg", "ifms", "ifmt", "ifb", "ifto", "ifpa", "ifap", "ifrr", "ifro", "ifac",
    "universidade federal", "ufba", "ufrj", "ufmg", "ufrgs", "ufsc", "ufpr", "ufpe",
    "ufpb", "ufrn", "ufc", "ufma", "ufal", "ufs", "ufpi", "unb", "ufg", "ufms", "ufmt",
    "ufpa", "ufam", "ufrr", "unifap", "unir", "ufac", "uft", "ufscar", "unifesp",
    "ufabc", "unirio", "uff", "ufrrj", "ufv", "ufla", "ufop", "unifei", "uftm", "ufu",
    "ufvjm", "ufjf", "cefet", "colegio pedro ii", "pedro ii", "pcctae", "tecnico-administrativo",
    "assistente em administracao", "tecnico em assuntos educacionais"
]

UFS_BRASIL = {
    "AC": "Norte", "AL": "Nordeste", "AP": "Norte", "AM": "Norte", "BA": "Nordeste",
    "CE": "Nordeste", "DF": "Centro-Oeste", "ES": "Sudeste", "GO": "Centro-Oeste",
    "MA": "Nordeste", "MT": "Centro-Oeste", "MS": "Centro-Oeste", "MG": "Sudeste",
    "PA": "Norte", "PB": "Nordeste", "PR": "Sul", "PE": "Nordeste", "PI": "Nordeste",
    "RJ": "Sudeste", "RN": "Nordeste", "RS": "Sul", "RO": "Norte", "RR": "Norte",
    "SC": "Sul", "SP": "Sudeste", "SE": "Nordeste", "TO": "Norte"
}


def obter_html(url):
    """Obtem o conteudo HTML de uma pagina utilizando Scrapling ou Requests."""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
    }

    if SCRAPLING_DISPONIVEL:
        try:
            fetcher = Fetcher()
            res = fetcher.get(url, headers=headers)
            return res.text
        except Exception as e:
            print(f"[Aviso] Scrapling falhou para {url}: {e}. Tentando requests...")

    import requests
    try:
        response = requests.get(url, headers=headers, timeout=20)
        if response.status_code == 200:
            return response.text
    except Exception as e:
        print(f"[Erro] Falha ao acessar {url}: {e}")
    return None


def identificar_uf_e_regiao(texto, regiao_padrao, uf_padrao):
    """Identifica UF e regiao a partir do texto do orgao/cidade."""
    texto_upper = texto.upper()
    
    match = re.search(r'[\s\-/]([A-Z]{2})[\s\.\)]', texto_upper)
    if match:
        uf_candidata = match.group(1)
        if uf_candidata in UFS_BRASIL:
            return uf_candidata, UFS_BRASIL[uf_candidata]

    for uf, regiao in UFS_BRASIL.items():
        if f" {uf} " in f" {texto_upper} " or f"-{uf}" in texto_upper:
            return uf, regiao

    return uf_padrao, regiao_padrao


def inferir_niveis_e_cargos(texto_cargos):
    """Infere os niveis do PCCTAE (C, D, E) com base nos nomes dos cargos."""
    texto_lower = texto_cargos.lower()
    niveis = []
    
    if any(k in texto_lower for k in ["superior", "administrador", "pedagogo", "contador", "analista", "medico", "engenheiro", "psicologo", "tae", "bibliotecario", "assistente social", "professor"]):
        niveis.append("E")
    if any(k in texto_lower for k in ["medio", "tecnico", "assistente em administracao", "tecnico de laboratorio", "tecnico em ti", "tecnico em contabilidade", "tecnico em enfermagem", "tecnico em agropecuaria"]):
        niveis.append("D")
    if any(k in texto_lower for k in ["fundamental", "auxiliar", "motorista", "assistente de alunos"]):
        niveis.append("C")

    if not niveis:
        niveis = ["D", "E"]
        
    return sorted(list(set(niveis)))


def raspar_pci_concursos(fonte):
    """Raspa os editais de uma secao do PCI Concursos filtrando por IFES e PCCTAE."""
    url = fonte["url"]
    regiao_padrao = fonte["regiao"]
    uf_padrao = fonte["uf_padrao"]
    
    html = obter_html(url)
    if not html:
        return []

    from bs4 import BeautifulSoup
    soup = BeautifulSoup(html, "html.parser")
    concursos_encontrados = []

    blocos = soup.select(".ca, .cb, .cd, .entry, .concurso")
    if not blocos:
        blocos = soup.select("article, .item, .link-concurso")

    for bloco in blocos:
        texto_bloco = bloco.get_text(" ", strip=True)
        texto_lower = texto_bloco.lower()

        # Filtro: Deve conter termo de IFES / IF / UF / PCCTAE
        if not any(termo in texto_lower for termo in TERMOS_INCLUSAO):
            continue

        # Extracao de link real
        link_elem = bloco.find("a", href=True)
        if not link_elem:
            continue

        link_parcial = link_elem["href"]
        link_real = urllib.parse.urljoin("https://www.pciconcursos.com.br", link_parcial)

        # Titulo e Instituicao
        titulo_raw = link_elem.get_text(strip=True)
        if not titulo_raw:
            titulo_raw = texto_bloco.split("\n")[0]

        uf, regiao = identificar_uf_e_regiao(texto_bloco, regiao_padrao, uf_padrao)

        # Extracao de Vagas
        vagas_match = re.search(r'(\d+)\s+vagas?', texto_bloco, re.IGNORECASE)
        vagas_num = int(vagas_match.group(1)) if vagas_match else 1
        if "cadastro de reserva" in texto_lower or " cr" in texto_lower:
            vagas_str = f"{vagas_num} + CR" if vagas_num > 0 else "CR (Cadastro de Reserva)"
        else:
            vagas_str = f"{vagas_num} vaga{'s' if vagas_num > 1 else ''}"

        # Extracao de Salarios
        salario_match = re.search(r'R\$\s*[\d\.,]+(?:\s*a\s*R\$\s*[\d\.,]+)?', texto_bloco)
        remuneracao = salario_match.group(0) if salario_match else "Conforme edital oficial do cargo"

        # Extracao de Prazo de Inscricao
        prazo_match = re.search(r'(?:ate|inscri[cç][oõ]es\s+at[eé]|t[eé]rmino\s+em)\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)', texto_bloco, re.IGNORECASE)
        prazo_inscricao = f"Até {prazo_match.group(1)}" if prazo_match else "Consulte o cronograma no edital"

        # Status
        status = "Inscrições Abertas"
        if "previsto" in texto_lower or "autorizado" in texto_lower:
            status = "Previsto"
        elif "publicado" in texto_lower or "edital divulgado" in texto_lower:
            status = "Edital Publicado"

        # Identificacao de Niveis
        niveis = inferir_niveis_e_cargos(texto_bloco)

        slug_id = re.sub(r'[^a-z0-9]+', '-', f"{titulo_raw}-{uf}".lower()).strip('-')

        concurso = {
            "id": slug_id,
            "instituicao": titulo_raw,
            "sigla": titulo_raw.split(" - ")[0] if " - " in titulo_raw else titulo_raw.split(" (")[0],
            "regiao": regiao,
            "uf": uf,
            "titulo": f"Processo Seletivo / Concurso {titulo_raw}",
            "cargos": texto_bloco[:220] + "..." if len(texto_bloco) > 220 else texto_bloco,
            "niveis": niveis,
            "vagas": vagas_num,
            "vagas_descricao": vagas_str,
            "remuneracao_inicial": remuneracao,
            "status": status,
            "banca": "Comissão Organizadora / Banca Oficial",
            "prazo_inscricao": prazo_inscricao,
            "taxa_inscricao": "Conforme o edital oficial",
            "link_edital": link_real,
            "link_banca": link_real,
            "fonte_coleta": "PCI Concursos Nacional / IFES",
            "data_coleta": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }

        concursos_encontrados.append(concurso)

    return concursos_encontrados


def executar_mineracao(dry_run=False):
    """Executa a rotina completa de mineracao em todas as fontes configuradas."""
    print("==================================================")
    print("Iniciando Minerador de Concursos TAE / IFES Real")
    print(f"Data: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print(f"Engine Principal: {'Scrapling' if SCRAPLING_DISPONIVEL else 'Requests + BeautifulSoup'}")
    print("==================================================")

    todos_concursos = []
    urls_processadas = set()

    for fonte in FONTES_PCI:
        print(f"\n[+] Minerando secao: {fonte['regiao']} ({fonte['url']})...")
        concursos = raspar_pci_concursos(fonte)
        print(f"    -> {len(concursos)} certames identificados.")
        
        for c in concursos:
            if c["link_edital"] not in urls_processadas:
                urls_processadas.add(c["link_edital"])
                todos_concursos.append(c)

    print("\n--------------------------------------------------")
    print(f"Total de Editais TAEs e IFES Unicos Minerados: {len(todos_concursos)}")
    print("--------------------------------------------------")

    if dry_run:
        print("\n[MODO DRY-RUN] Exibindo registros coletados:")
        for i, c in enumerate(todos_concursos[:10], 1):
            print(f"\n{i}. [{c['uf']}] {c['instituicao']}")
            print(f"   Status: {c['status']} | Niveis: {c['niveis']} | Prazo: {c['prazo_inscricao']}")
            print(f"   Link Real: {c['link_edital']}")
        return todos_concursos

    caminho_base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    caminho_json = os.path.join(caminho_base, "data", "concursos_tae.json")

    os.makedirs(os.path.dirname(caminho_json), exist_ok=True)

    if todos_concursos:
        with open(caminho_json, "w", encoding="utf-8") as f:
            json.dump(todos_concursos, f, ensure_ascii=False, indent=2)
        print(f"\n[SUCESSO] Base de dados gravada com {len(todos_concursos)} editais reais em:")
        print(f"          {caminho_json}")
    else:
        print("\n[AVISO] Nenhum edital novo identificado. Base preservada.")

    return todos_concursos


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Minerador Real de Concursos TAE e IFES com Scrapling")
    parser.add_argument("--dry-run", action="store_true", help="Executa a mineracao apenas em memoria sem salvar em disco")
    args = parser.parse_args()

    executar_mineracao(dry_run=args.dry_run)
