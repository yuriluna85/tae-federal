# Simulador da Carreira TAE Federal (PCCTAE 2026)
### YLuna85 LABs — Laboratório de Softwares
*Mascotes Oficiais: Coragem e Bolinho de Chuva*

**Acesse online em:** [taes-federal.com.br](https://taes-federal.com.br)  
**Repositório Oficial:** [github.com/yuriluna85/tae-federal](https://github.com/yuriluna85/tae-federal)

---

## Sobre o Projeto

O **Simulador da Carreira TAE Federal** e uma aplicacao web progressiva (PWA) e plataforma de inteligencia financeira voltada para os servidores Tecnico-Administrativos em Educacao (TAEs) das Universidades Federais e Institutos Federais de Educacao, Ciencia e Tecnologia (IFs) vinculados ao Ministerio da Educacao (MEC).

O sistema unifica as tabelas salariais e regras do Plano de Carreira dos Cargos Tecnico-Administrativos em Educacao (PCCTAE Lei nº 11.091/2005), os reajustes estruturantes pactuados no Termo de Acordo nº 11/2024 e consolidados nas Leis Federais nº 15.141/2025 e nº 15.367/2026, alem das normativas federais de diarias de viagem a servico (Decretos nº 5.992/2006 e nº 11.872/2023) e as regras previdenciarias da Emenda Constitucional nº 103/2019 (Reforma da Previdencia).

---

## Stack Tecnológica e Arquitetura

A arquitetura do software apoia-se em tecnologias nativas da plataforma web, operando com zero dependencias pesadas e maxima velocidade de carregamento (Client-Side Rendering puro):

*   **Estrutura Semântica**: HTML5 semantico otimizado para acessibilidade (WCAG 2.1 AAA) e indexacao em motores de busca (SEO e Google AdSense).
*   **Design System e Estilização**: CSS3 modular (Vanilla CSS) com variaveis customizadas, suporte a temas Claro, Escuro e Alto Contraste, e layout responsivo fluido via Flexbox e CSS Grid.
*   **Lógica de Negócio e Motores de Cálculo**: JavaScript moderno (ES6+ modular), manipulacao eficiente da arvore DOM e funcoes matematicas de precisao financeira para dedutivos (PSS e IRRF em cascata), diarias e regras previdenciarias.

---

## Módulos e Funcionalidades do Portal

### 1. Calculadora Salarial e de Vencimentos PCCTAE
*   Indexacao automatica de vencimentos basicos nos Niveis de Classificacao A, B, C, D e E (padroes de vencimento 1 a 19, com step progressivo de 4,1%).
*   Simulacao combinada e independente de Incentivo a Qualificacao (IQ de 0% a 75%) e Reconhecimento de Saberes e Competencias (RSC-PCCTAE).
*   Calculo de beneficios assistenciais atualizados: Auxilio Alimentacao (R$ 1.192,00) e Auxilio Pre-Escolar / Creche (R$ 526,34 por dependente).
*   Calculo dinamico do Auxilio Saude Suplementar baseado na faixa de remuneracao e idade do titular e dependentes (Portaria MGI nº 2.778/2026).
*   Calculo progressivo da contribuicao previdenciaria oficial (CPSS / PSS) e do Imposto de Renda Retido na Fonte (IRRF) com grafico de composicao financeira.

### 2. Simulador de Diárias Federais a Serviço
*   Calculo de diarias nacionais em estrita conformidade com o Decreto nº 5.992/2006 e Decreto nº 11.872/2023.
*   Suporte a destinos no Distrito Federal, capitais e demais municipios com valor unitario de referencia.
*   Calculo automatico do Adicional de Deslocamento (R$ 95,00 por trecho), deducao de auxilio alimentacao e transporte em dias uteis, e redutor de 25% em permanencias continuas superiores a 120 dias.

### 3. Simulador de Aposentadoria e Abono de Permanência
*   Simulacao comparativa das regras de transicao da EC nº 103/2019: Regra do Pedagio de 100% (Art. 20) e Sistema de Pontos (Art. 4º).
*   Distincao automatica por marcos temporais:
    *   Ingresso ate 31/12/2003: Integralidade e Paridade garantidas.
    *   Ingresso entre 01/01/2004 e 03/02/2013: 100% da media aritmetica sem teto do INSS.
    *   Ingresso a partir de 04/02/2013: Limitacao ao Teto do RGPS e projecao da previdencia complementar FUNPRESP-Exe.
*   Calculo do direito e valor do Abono de Permanencia (Art. 40, § 19 da CF/88), Aposentadoria por Incapacidade Permanente e Aposentadoria Compulsoria aos 75 anos.

### 4. Calculadora de Pontuação do Memorial RSC
*   Mapeamento de criterios e pontuacoes distribuidos nos 6 eixos de comprovacao do memorial descritivo.
*   Simulacao em tempo real da meta minima de 50 pontos para homologacao de equivalencia financeira.
*   Exportacao de relatorios em planilhas CSV e salvamento de sessao em JSON.

### 5. Tabela Geral de Carreira e Central de Tutoriais
*   Painel interativo para consulta de padroes e niveis salariais de 2024 a 2026.
*   Central de tutoriais passo a passo com guias dedicados para remuneracao, diarias, RSC e aposentadoria.
*   Base de artigos editoriais e FAQ legislativo com respostas fundamentadas na Lei nº 8.112/1990 e normas do MEC/MGI.

---

## Como Executar o Projeto

Como a aplicacao opera inteiramente com arquitetura estatica client-side, nao ha necessidade de instalacao de dependencias ou servidores complexos:

### Execução Local:
1. Clone ou faca o download do repositorio.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.

### Hospedagem e Produção:
* O portal esta publicado via GitHub Pages sob o dominio oficial [taes-federal.com.br](https://taes-federal.com.br) com protocolo HTTPS e certificado TLS ativo.

---

## Log de Atualizações (Changelog)

### [17/08/2026] - Simulador de Aposentadorias, Tutoriais e Higienização Anti-IA
*   **Módulo de Aposentadoria e Abono de Permanência**: Implementação do motor previdenciário e simulador de transição da EC nº 103/2019 (Pedágio de 100% e Pontos), Integralidade/Paridade pré-2003, média pós-2003 e Teto do RGPS pós-2013 com FUNPRESP.
*   **Tutorial e Base de Conhecimento**: Criação do tutorial dedicado de aposentadoria e atualização do FAQ legislativo e artigos editoriais.
*   **Higienização Global Anti-IA**: Varredura em 100% dos arquivos do projeto, remoção de todos os emojis em botões e títulos, substituição de e comercial em textos e reestruturação do README.md pelo modelo mestre do laboratório.

### [27/07/2026] - Atualização de Autoria Lattes e Estilo de Legibilidade dos Artigos
*   **Autoria Baseada no Currículo Lattes**: Atualização da biografia e assinatura de autoria do criador Yuri Luna em todo o portal e nos artigos da seção editorial, fundamentada nos dados oficiais do Lattes (Técnico de TI no IF Baiano, Licenciado em Ciência da Computação e Pedagogia).
*   **Estilo de Alta Legibilidade**: Ajuste de contraste tipográfico nos artigos para conformidade WCAG AAA.

### [21/07/2026] - Geração de Sitemap e Configuração de SEO
*   **Sitemap e Indexação**: Geração do arquivo sitemap.xml e configuração de diretivas no robots.txt para indexação orgânica.

### [08/07/2026] - Conformidade do Simulador de Diárias
*   **Conformidade de Diárias (Decretos nº 5.992/2006 e nº 11.872/2023)**: Isolamento do simulador em aba dedicada, ajuste de adicional de deslocamento, redutor de 25% para estadas longas e isenção tributária legal.
