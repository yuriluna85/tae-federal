import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import json
import os
from email.utils import parsedate_to_datetime
import datetime

def main():
    print("Iniciando varredura de notícias...")
    
    # 1. Definição de notícias fixas/normativas importantes
    permanent_news = [
        {
            "title": "Promulgação da Lei nº 15.141/2025",
            "source": "Diário Oficial",
            "pubDate": "2025-06-02 08:00",
            "link": "https://www.in.gov.br",
            "description": "Esta lei consubstancia a reestruturação da carreira do PCCTAE nos moldes do Termo de Acordo nº 11/2024, extinguindo as antigas distorções de área direta e indireta.",
            "category": "Vigente",
            "badge_class": "badge-info"
        },
        {
            "title": "Instituição do RSC-PCCTAE via Lei nº 15.367/2026",
            "source": "Diário Oficial",
            "pubDate": "2026-03-30 08:00",
            "link": "https://www.in.gov.br",
            "description": "Sancionada em 30 de março de 2026, a lei instituiu o Reconhecimento de Saberes e Competências (RSC) para Técnico-Administrativos em Educação a contar de 1º de abril de 2026.",
            "category": "Vigente",
            "badge_class": "badge-info"
        }
    ]

    # 2. Busca dinâmica usando Google News RSS
    queries = [
        '"PCCTAE"', 
        '"RSC" "TAE"',
        '"Reconhecimento de Saberes e Competências" "TAE"',
        '"RSC" "PCCTAE"',
        '"carreira" "PCCTAE"',
        '"reestruturação" "PCCTAE"'
    ]
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0'}
    
    fetched_news = []
    seen_titles = set()
    
    for q in queries:
        try:
            q_encoded = urllib.parse.quote_plus(q)
            url = f'https://news.google.com/rss/search?q={q_encoded}&hl=pt-BR&gl=BR&ceid=BR:pt-419'
            
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                xml_data = response.read()
                
            root = ET.fromstring(xml_data)
            items = root.findall('./channel/item')
            
            for item in items[:10]:
                title = item.find('title').text
                if title in seen_titles:
                    continue
                
                link = item.find('link').text
                pub_date_raw = item.find('pubDate').text
                
                try:
                    dt = parsedate_to_datetime(pub_date_raw)
                    pub_date = dt.strftime('%Y-%m-%d %H:%M')
                except Exception:
                    pub_date = pub_date_raw
                
                clean_title = title
                source = "Google News"
                if " - " in title:
                    parts = title.rsplit(" - ", 1)
                    clean_title = parts[0]
                    source = parts[1]
                
                # Filtrar apenas notícias relacionadas à carreira PCCTAE / RSC
                title_lower = clean_title.lower()
                keywords = ["rsc", "saberes", "pcctae", "tae", "carreira", "reestruturação", "reestruturacao", "servidor", "vencimento", "sindicato"]
                if not any(k in title_lower for k in keywords):
                    continue

                seen_titles.add(title)
                
                category = "Notícia"
                badge_class = "badge-success"
                
                if "rsc" in title_lower or "saberes" in title_lower:
                    category = "RSC"
                    badge_class = "badge-alert"
                elif "greve" in title_lower or "acordo" in title_lower or "lei" in title_lower:
                    category = "Carreira"
                    badge_class = "badge-info"
                
                fetched_news.append({
                    "title": clean_title,
                    "source": source,
                    "pubDate": pub_date,
                    "link": link,
                    "description": clean_title,
                    "category": category,
                    "badge_class": badge_class
                })
        except Exception as e:
            print(f"Erro ao buscar feed para a consulta '{q}': {e}")
            
    fetched_news.sort(key=lambda x: x['pubDate'], reverse=True)
    
    final_news = permanent_news + fetched_news[:8]
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(script_dir, "..", "noticias.json")
    json_path = os.path.normpath(json_path)
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(final_news, f, ensure_ascii=False, indent=2)
        
    print(f"Notícias atualizadas com sucesso! Salvas em {json_path}")

if __name__ == '__main__':
    main()
