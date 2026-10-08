# Calculadora TAE Federal

Portal do YLuna85 LABs para servidores técnico-administrativos em educação (TAEs) do Poder Executivo Federal. Reúne uma calculadora salarial do PCCTAE e guias escritos sobre a carreira.

**Domínio publicado**: `taes-federal.com.br`
**Contexto de marca**: YLuna85 LABs
**Autoria dos guias**: Yuri Luna e Ana Gabriela

---

## O que o portal oferece

- **Calculadora salarial** (`index.html`): vencimento, Incentivo à Qualificação (IQ), RSC-PCCTAE, auxílios, descontos, diárias e aposentadoria.
- **Artigos e guias** (`artigos/`): conteúdo de referência com base na legislação, com link para o texto oficial.
- **Tutoriais e FAQ de legislação**: como usar a calculadora e perguntas frequentes sobre as leis da carreira.
- **Concursos para TAE** (`concursos.html`): guia sobre o ingresso na carreira.
- **Páginas institucionais**: `sobre.html`, `contato.html`, `privacidade.html`, `termos.html` e `atualizacoes.html`.

---

## Estrutura de arquivos

```
calculadora-tae-federal/
├── index.html                Calculadora salarial (página inicial)
├── style.css                 Sistema de design do portal
├── site.js                   Acessibilidade e aviso de cookies das páginas estáticas
├── app.js                    Lógica da calculadora (tabela do Anexo I-D, IQ, RSC, descontos)
├── app_aposentadoria.js      Simulador de aposentadoria
├── app_concursos.js          Reservado para o radar de editais (hoje fora do ar)
├── noticias.json             Quadro normativo da página inicial (atos oficiais com link)
├── artigos/                  Guias de referência
├── data/concursos_tae.json   Base de editais coletada pelo workflow (não exibida)
├── scripts/
│   ├── minerador_concursos_tae.py   Coleta de editais (Scrapling)
│   ├── gerar_sitemap.py             Gera o sitemap.xml com a data real de cada arquivo
│   └── requisitos_scraper.txt
└── .github/workflows/atualizacao_dados_tae.yml
```

---

## Como manter

- **Sitemap**: depois de criar ou alterar páginas, rodar `python scripts/gerar_sitemap.py`.
- **Tabela salarial**: os valores estão no objeto `pcctaeData.tabela_salarial` de `app.js`. Conferir sempre com o Anexo I-D da Lei nº 11.091/2005, na redação da Lei nº 15.141/2025.
- **Guias novos**: seguir a skill `escrita-web-servidor` do laboratório (fonte oficial conferida, exemplo numérico calculado com os dados do site, sem relato inventado) e registrar a mudança em `atualizacoes.html`.

---

## Log de atualizações

- **08/10/2026**: corrigidos dois valores da tabela de vencimento em `app.js` (nível C padrão 7: R$ 3.318,65; nível E padrão 7: R$ 6.637,30); reescritos os guias da tabela salarial, do Incentivo à Qualificação, do RSC-PCCTAE e da progressão por capacitação com base nos textos oficiais; encerrada a coleta automática de notícias e retirados os links para a central de notícias; criada a página de atualizações; reescritas as páginas Sobre, Privacidade, Termos e Contato (o formulário abre o programa de e-mail do visitante); a página de concursos virou guia de ingresso; criado `site.js` (acessibilidade e aviso de cookies em todas as páginas); sitemap gerado por script; removido o estilo de faixa lateral e corrigidas cores ilegíveis nos artigos.
- **27/09/2026**: pipeline de notícias locais e categoria Servidorismo Federal (encerrados em 08/10/2026 e arquivados fora do projeto).
- **17/08/2026**: tutoriais e simulador de aposentadoria.
- **14/08/2026**: radar de concursos (retirado do ar em 08/10/2026).

Desenvolvido por Jarbas para YLuna85 LABs.
