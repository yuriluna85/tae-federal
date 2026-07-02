# Simulador da Carreira TAE Federal (PCCTAE 2026)
### YLuna85 LABs — Laboratório de Softwares
*Mascotes Oficiais: Coragem e Bolinho de chuva*

---

Este projeto consiste em um simulador financeiro e visualizador de carreira voltado para os servidores Técnico-Administrativos em Educação (TAEs) vinculados às Universidades e Institutos Federais de Ensino. O software unifica as regras e as reestruturações salariais vigentes a partir de **1º de abril de 2026** (decorrentes da Lei nº 15.141/2025 e Lei nº 15.367/2026).

A aplicação foi desenvolvida sob o selo de laboratório de código **YLuna85 LABs**, reunindo funcionalidades inspiradas em portais como `taes.com.br` e `calculadorarsc.com` em um painel integrado, dinâmico e focado em alto desempenho.

---

## 🛠️ Tecnologias Utilizadas

A arquitetura do software apoia-se em tecnologias nativas da plataforma web (Zero dependências externas/Node.js) seguindo a filosofia do *Ponytail Mode* (desenvolvimento sênior enxuto):
1.  **Estrutura**: HTML5 semântico e estruturado para máxima indexação e compatibilidade.
2.  **Estilização**: CSS3 customizado (Vanilla CSS) com variáveis globais organizadas, *layout* responsivo baseado em Flexbox/Grid e efeitos visuais modernos (*Glassmorphism* e *Dark Mode* nativo).
3.  **Lógica**: JavaScript moderno (ES6+), manipulação limpa da árvore do DOM e cálculos matemáticos precisos de tributos e auxílios.

---

## 🌟 Funcionalidades Principais

*   **Calculadora de Proventos Brutos**:
    *   Indexador automático de vencimento básico (Níveis A a E e padrões de progressão 1 a 19, com *step* de 4,1%).
    *   Acréscimo percentual integrado e independente de Incentivo à Qualificação (IQ) e Reconhecimento de Saberes e Competências (RSC-PCCTAE), com regras automáticas de restrição (RSC limitado a um nível imediatamente superior ao IQ real) e cálculo de equivalência financeira (percentual máximo).
    *   Cálculo de benefícios assistenciais ajustados para 2026: Auxílio-Alimentação (R$ 1.192,00) e Auxílio-Creche (R$ 526,34 por dependente).
    *   Custeio parcial de Saúde Suplementar baseado de forma dinâmica no rendimento de referência e na idade do titular e de cada dependente, em estrita consonância com a tabela progressiva da **Portaria MGI nº 2.778/2026**.
*   **Simulador de Dedutivos e Líquido**:
    *   Cálculo em cascata da contribuição previdenciária (PSS) sob as alíquotas progressivas federais vigentes.
    *   Projeção do Imposto de Renda Retido na Fonte (IRRF) baseado na tabela progressiva oficial de 2026 e deduções por dependentes legais.
    *   Gráfico de barras dinâmico exibindo a composição proporcional do contracheque (vencimento básico, qualificação e benefícios).
*   **Calculadora de Pontuação RSC**:
    *   Mapeamento das atividades e comissões elegíveis subdivididas nos 6 eixos funcionais (com base na minuta nacional).
    *   Simulação da pontuação do memorial do servidor em tempo real, com pesos específicos por atividade.
    *   Barra de progresso interativa e indicador de status de homologação baseados na meta mínima de 50 pontos.
    *   Detalhamento da pontuação obtida individualmente em cada eixo de comprovação.
*   **Visualizador da Matriz Salarial**:
    *   Painel interativo para consulta rápida dos vencimentos básicos e simulações com IQ em todos os níveis.
*   **Quadro Legal e Informativos**:
    *   Base explicativa sucinta das normativas vigentes da carreira.
*   **Acessibilidade (A11y & WCAG)**:
    *   Barra de acessibilidade superior para ajuste dinâmico do tamanho das fontes (A+/A-) de forma proporcional.
    *   Alternância para modo de **Alto Contraste** (`.high-contrast`) para facilitação de leitura por usuários de baixa visão.

---

## 🚀 Como Executar o Projeto

Como a aplicação foi construída inteiramente com código estático nativo (SPA), não há necessidade de etapas de compilação ou instalação de dependências:

### Execução Local:
1.  Baixe a pasta do projeto.
2.  Dê duplo clique no arquivo `index.html` para abrir a aplicação instantaneamente em qualquer navegador moderno.

### Hospedagem no GitHub (GitHub Pages):
Este repositório está estruturado especificamente para publicação direta e imediata no GitHub Pages:
1.  Suba a pasta do projeto para um repositório público no GitHub.
2.  Vá em **Settings** (Configurações) do repositório no GitHub.
3.  Acesse a aba **Pages** na lateral esquerda.
4.  Em **Build and deployment**, selecione a branch `main` (ou `master`) e a pasta raiz (`/root`) e clique em **Save**.
5.  A aplicação estará disponível online em poucos instantes no endereço público gerado pelo GitHub (ex: `https://seu-usuario.github.io/nome-do-repositorio`).

---

## 📝 Log de Atualizações (Changelog)

### [02/07/2026] - Lançamento e Configuração Inicial
*   🚀 **Estruturação do Projeto**: Criação da base de códigos em [index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/index.html), [style.css](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/style.css) e [app.js](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js).
*   🎨 **Branding de Laboratório**: Configuração da identidade visual com o selo **YLuna85 LABs** e incorporação dos ativos de imagem dos mascotes oficiais Coragem e Bolinho de chuva na pasta `/assets`.
*   📊 **Inteligência Salarial**: Implementação dos algoritmos de cálculo de progressão por step (4,1%), faixas tributárias de PSS/IRRF (2026) e regras de per capita de saúde suplementar (Portaria MGI nº 2.778/2026).
*   ⚙️ **Segregação de IQ & RSC**: Ajuste para separar os campos de IQ e RSC na interface do usuário, adicionando regras de restrição regulatória dinâmica (limitação do RSC a apenas um nível superior à escolaridade de entrada do IQ) e consolidação da equivalência financeira de proventos pelo percentual superior.
*   💵 **Google AdSense**: Inclusão de blocos de anúncios responsivos (Leaderboards) discretos com estilização Glassmorphism e ocultação automática do placeholder local ao preenchimento de conteúdo do anúncio.
*   📰 **Mural de Novidades**: Desenvolvimento e acoplamento de seção de novidades e informes rápidos da carreira na parte inferior da aba da calculadora, promovendo visibilidade imediata para eixos e diretrizes regulamentares.
*   🎯 **Calculadora de Pontuação RSC**: Lançamento da nova aba de cálculo de pontuação baseada em eixos de curadoria documental, com pesos parametrizados e verificação de status de homologação de 50 pontos mínimos.
*   🎨 **Favicon do Laboratório**: Incorporação da marca oficial **YLuna85 LABs** como ícone de página (favicon) no head do documento HTML.
*   💵 **Parametrização do AdSense**: Substituição das chaves de identificação genéricas do Google AdSense pelo ID de cliente real (`ca-pub-7370246789612593`) no cabeçalho e contêineres do simulador.
