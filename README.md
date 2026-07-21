# Simulador da Carreira TAE Federal (PCCTAE 2026)
### YLuna85 LABs — Laboratório de Softwares
*Mascotes Oficiais: Coragem e Bolinho de chuva*

**Acesse online em:** [taes-federal.com.br](https://taes-federal.com.br)
**Repositório Oficial:** [github.com/yuriluna85/tae-federal](https://github.com/yuriluna85/tae-federal)

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
Este repositório está publicado no endereço [github.com/yuriluna85/tae-federal](https://github.com/yuriluna85/tae-federal) e configurado com domínio personalizado no GitHub Pages:
1. O repositório está integrado sob a branch `main` e publicado via GitHub Pages.
2. Está associado ao domínio customizado [taes-federal.com.br](https://taes-federal.com.br) para navegação de produção com HTTPS seguro.

## 📝 Log de Atualizações (Changelog)
 
### [21/07/2026] - Geração de Sitemap e Configuração de SEO (robots.txt)
* 🗺️ **Sitemap e Indexação**: Gerado o arquivo `sitemap.xml` contendo todas as URLs públicas da aplicação (`taes-federal.com.br`, `sobre.html`, `contato.html`, `privacidade.html`, `termos.html`) para indexação em mecanismos de busca.
* 🤖 **Configuração do Robô**: Criado o arquivo `robots.txt` com as diretivas de liberação de varredura global e vinculação do endereço absoluto do sitemap.

### [08/07/2026] - Ajustes e Conformidade na Lógica de Diárias (Decreto nº 5.992/2006 & Decreto nº 11.872/2023)
* ✈️ **Conformidade de Diárias**: Atualizado o simulador de diárias em [app.js](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js) e [index.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/index.html) para alinhar com os critérios estritos da legislação federal:
  - **Aba de Diárias Separada**: Isolado o simulador de diárias em uma aba principal dedicada no menu de navegação, inserida entre a Calculadora Salarial e a Tabela de Carreira.
  - **Capitalização da Mascote**: Corrigido o nome próprio da mascote oficial no rodapé do simulador para a grafia correta: "Bolinho de Chuva".
  - **Isenção Previdenciária**: Removido o desconto indevido de previdência (R$ 45,45), uma vez que diárias de viagens federais possuem caráter estritamente indenizatório e são por lei isentas de PSS e IRRF, alinhando a simulação ao valor real recebido no SCDP (R$ 1.365,78 para viagem a SP).
  - **Classificação de Cargos**: Refatoradas as faixas de cargos/funções para 5 opções exatas em conformidade com o decreto (incluindo atualização do valor mínimo da diária TAE para R$ 340,00 na categoria demais).
  - **Exibição do Valor Unitário**: Incluído o valor unitário da diária no detalhamento do cálculo no card de resultados.
  - **Tabela de Diárias Federais**: Adicionado card visual completo com a tabela de diárias nacionais vigentes (Decreto nº 11.872/2023) na aba de "Tabelas".
  - **Viagem com Veículo Oficial**: Implementado o checkbox para indicar uso de transporte institucional, eliminando o Adicional de Deslocamento de R$ 95,00 do cálculo final.
  - **Adicional de Deslocamento**: Adicionado o acréscimo fixo de R$ 95,00 para despesas de embarque/desembarque em todas as viagens com concessão de diária (se não usado veículo oficial).
  - **Permanência Prolongada**: Implementado redutor automático de 25% no valor diário excedente a partir do 121º dia na mesma localidade (acima de 120 dias).
  - **Dupla Projeção Líquida**: Reestruturada a exibição de resultados para apresentar dois cenários paralelos de recebimento (com e sem o desconto de transporte).
  - **Alerta de Estimativa e Canal SCDP**: Atualizado o painel com aviso detalhado reforçando o caráter estimativo dos valores e orientando o contato direto com o operador do SCDP da respectiva unidade do servidor em caso de dúvidas.

### [08/07/2026] - Aba dedicada para Diárias de Viagem e Conformidade com Google AdSense
*   ✈️ **Aba de Diárias Separada**: Isolou o painel de Diárias de Viagem em uma aba principal do aplicativo, posicionada no menu superior de navegação entre "Calculadora Salarial" e "Tabela de Carreira".
*   🐕 **Mascote**: Corrigida a escrita de "Bolinho de chuva" para "**Bolinho de Chuva**" (nome próprio).
*   💰 **Qualificação AdSense**: Implementada a conformidade completa com as políticas do Google AdSense:
    *   Links institucionais no rodapé ligando a páginas obrigatórias.
    *   Criação das páginas institucionais [sobre.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/sobre.html), [privacidade.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/privacidade.html), [termos.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/termos.html) e [contato.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/contato.html) contendo Política de Privacidade de anúncios de terceiros/DART cookies, Termos de Uso com isenção de responsabilidade e formulário de contato integrado.

### [05/07/2026] - Atualização de Critérios RSC (Decreto nº 13.048/2026), Ajuste do Simulador de Diárias e AdSense
* ⚖️ **Atualização dos Critérios RSC**: Ajustados os critérios individuais e pontuações do RSC-PCCTAE de acordo com o anexo oficial do **Decreto nº 13.048/2026**:
  - Alterada a pontuação do Eixo I, Item 4 (Sindicância/PAD/etc.) de **15,0** para **3,0** pontos.
  - Alterada a pontuação do Eixo II, Item 9 (Programas de formação continuada...) de **3,0** para **1,0** ponto.
  - Atualizado o Eixo II, Item 11 para refletir a nova descrição e carga horária mínima de 10 horas.
  - Removido o antigo item de Certificação Profissional do Eixo VI (Item 6 da versão anterior), com o consequente reordenamento dos itens e IDs subsequentes.
  - Ajustada a pontuação de Coordenação de Congresso no Eixo VI de **4,5** para **3,5** pontos.
  - Ajustada a pontuação de Coorientação de TCC no Eixo VI de **7,5** para **4,5** pontos.
  - Atualizadas as descrições dos níveis de RSC no painel e nos seletores para refletir a escolaridade exigida para pleitear cada nível de RSC (RSC-I a RSC-VI).
* ✈️ **Ajuste de Layout do Simulador de Diárias**: Corrigida a estrutura do HTML em [index.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/index.html) movendo o bloco `diarias-results` para fora do contêiner `diarias-inputs` (como elemento irmão). Isso reestabeleceu o layout de grid responsivo em duas colunas, posicionando os resultados de detalhamento lado a lado com os campos de entrada de forma harmônica (similar à visualização de remuneração principal).
* 💵 **Simplificação do Google AdSense**: Removida a rotina de inicialização complexa `initAdSense` em [app.js](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js) e substituída pelas chamadas `push` nativas do AdSense posicionadas diretamente no HTML [index.html](file:///G:/Meu%20Drive/app/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/index.html) logo abaixo de cada tag `ins`. Isso simplifica o ciclo de vida dos blocos e mitiga problemas de carregamento assíncrono da biblioteca de monetização.

### [04/07/2026] - Simplificação e Ajuste no Cálculo de Diárias & Correção do AdSense
*   ✈️ **Revisão do Cálculo de Diárias**:
    *   Removido o Vencimento Básico (VB), o fator de Teletrabalho/PGD (considerando que o servidor em viagem está obrigatoriamente em regime presencial) e a contagem total de dias de benefício do cálculo do desconto de Auxílio-Transporte em trânsito.
    *   Simplificada a dedução do Auxílio-Transporte para ser meramente o produto do valor diário informado (`diaria-transporte-valor-input`) pela quantidade de dias com desconto efetivo.
    *   O cálculo com cota-parte de 6% do VB continua valendo estritamente para a folha de proventos regular (salário).
    *   Atualizada a interface em [index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos e Aplicações/2.2 Aplicações e Códigos (GitHub)/YLuna85 LABs APPs/calculadora-tae-federal/index.html) removendo os campos de PGD, VB e total de dias do painel de diárias, mantendo apenas o campo de "Valor Diário do Auxílio-Transporte".
*   💵 **Correção na Inicialização do AdSense**: Corrigido bug na função `initAdSense` no arquivo [app.js](file:///G:/Meu%20Drive/APP/2.%20Projetos e Aplicações/2.2 Aplicações e Códigos (GitHub)/YLuna85 LABs APPs/calculadora-tae-federal/app.js) onde a validação de largura/altura impedia a chamada `.push({})` em abas de segundo plano ou durante o reflow. A verificação foi atualizada para `ad.offsetParent !== null && ad.offsetWidth > 0` para prevenir o erro `TagError: No slot size for availableWidth=0`.
*   ⚡ **Event Listener de Visibilidade**: Adicionado ouvinte para o evento `visibilitychange` de forma que anúncios sejam carregados assim que a aba inativa passe a ficar visível em primeiro plano.
*   🏷️ **Atualização dos Slots de Anúncio**: Substituídos os slots fictícios nos blocos de topo e rodapé de [index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos e Aplicações/2.2 Aplicações e Códigos (GitHub)/YLuna85 LABs APPs/calculadora-tae-federal/index.html) pelos códigos numéricos reais dos novos blocos horizontais criados pelo usuário: `3035454922` (topo) e `9215931459` (rodapé).
*   🔒 **Ofuscação de Dados Sensíveis**: Substituído o ID de cliente real do AdSense por marcador genérico (`ca-pub-xxxxxxxxxxxxxxxx`) no changelog histórico e na documentação para preservação de privacidade em repositório público.

### [03/07/2026] - Regulamentação do RSC (Decreto nº 13.048/2026) e Tabelas de Funções Comissionadas
*   ⚖️ **Regulamentação Oficial do RSC**: Atualizado o simulador de pontuação e o painel de informativos com base nas diretrizes oficiais do recém-publicado **Decreto nº 13.048, de 3 de julho de 2026**, que estabelece a pontuação e os critérios específicos (Anexos I a VI) para os níveis RSC-I a RSC-VI.
*   ⚙️ **Parâmetros Administrativos**: Implementados inputs no simulador para Saldo de Pontos Anterior (Art. 5º, § 2º - cumulatividade), Em Estágio Probatório (Art. 12) e Cumpre Interstício de 3 anos (Art. 11), incluindo regras visuais e de lógica que bloqueiam a homologação e mostram alertas na cor vermelha caso o servidor esteja inapto administrativamente.
*   📄 **Processamento do Decreto**: Criado script de compilação dos PDFs de todas as 3 páginas do decreto em um único arquivo unificado e extração automática de texto para reanálise e conferência dos critérios normativos.
*   📰 **Mural de Novidades**: Inserida notícia em tempo real no feed assíncrono (`noticias.json`) comunicando a assinatura e os impactos jurídicos do novo decreto.
*   💼 **Tabelas de Cargos e Funções**: Incluída a Tabela Geral de Funções Gratificadas e de Coordenação (FG-1 a FG-4 e FCC) com suas descrições e remunerações oficiais vigentes diretamente na aba "Tabela de Carreira" (`index.html`).
*   ⚖️ **Equivalência CD vs CCE (Siorg)**: Incluída a tabela comparativa oficial entre os Cargos de Direção (CD) das Instituições Federais de Ensino e os Cargos Comissionados Executivos (CCE) da Administração Pública Federal, fundamentada nos critérios gerenciais da Lei nº 14.204/2021 e nos níveis regulatórios do Siorg (CD-1 a CD-4 vs CCE-11 a CCE-18). Corrigidos os rótulos de nível dos CCEs na tabela (de CCE-13/10/07 para CCE-15/13/11).
*   ✈️ **Diárias de Viagem**: Ajustados os rótulos do seletor da calculadora de diárias para explicitar as equivalências dos Cargos de Direção (CD-1 a CD-4) e das funções (FGs/FCC). Corrigido o agrupamento do **CD-3** (CCE-13) movendo-o da faixa padrão de diárias da carreira para a faixa intermediária (CCE-13 a CCE-17), mantendo apenas o CD-4 e as FGs/FCC no grupo padrão.

### [02/07/2026] - Integração de Cargos de Confiança, Auxílio-Transporte, Simulador de Diárias e Notícias Dinâmicas
*   👔 **Cargos de Confiança (CD/FG/FCC)**: Adicionado dropdown de seleção para cargos comissionados CD-1 a CD-4 (opções integral e 60%), FG-1 a FG-4 e FCC, somando ao Vencimento Bruto e aplicando incidências tributárias de PSS e IRRF de forma integrada. **Melhoria**: Implementação da regra em que a opção por CD Integral (100%) exclui o Vencimento Básico e o IQ/RSC da composição de proventos ativos (exibindo-os riscados em vermelho na tabela), enquanto mantém a incidência da cota-parte do transporte e previdência sobre a carreira (VB). Disponibilizada a opção "Sem Vínculo Efetivo" (Contrato) que zera o VB de entrada para simular contratação exclusivamente comissionada.
*   🚌 **Auxílio-Transporte, PGD & Contrapartida**: Implementado simulador de auxílio-transporte com desconto proporcional ao regime de teletrabalho (PGD) selecionado (0%, 20%, 60%, 100%) e cálculo da contrapartida legal (cota-parte de 6% do Vencimento Básico), integrada à folha de descontos.
*   🤝 **Contribuição Sindical**: Inclusão de filiação sindical opcional com dedução automática de 1% do Vencimento Básico, devidamente integrado como despesa dedutível da base de cálculo do IRRF.
*   ✈️ **Simulador de Diárias**: Novo painel completo para cálculo de diárias nacionais (Decreto nº 11.872/2023) parametrizado por destino (Demais Cidades, Capitais, Brasília/Manaus/RJ/SP) e cargo/função, deduzindo proporcionalmente as parcelas diárias de auxílio-alimentação e auxílio-transporte do servidor em trânsito. Ajuste na regra de descontos para desconsiderar fins de semana (sábados e domingos) e feriados nacionais nos descontos de alimentação e transporte, e integração do calendário nativo auto-exibível sob o clique do usuário. **Melhoria**: Desacoplamento total dos parâmetros de benefícios com a inserção de campos locais no painel de diárias (caixas de seleção de descontos, valor diário do transporte, dias úteis no mês, regime PGD e Vencimento Básico do cargo), tornando a simulação autônoma e inteligente (sincronizada por preenchimento automático a partir do simulador principal caso o usuário não altere manualmente). Correção do layout grid para posicionar o painel de resultados detalhados (Detalhamento do Recebimento) lado a lado com os inputs de controle.
*   🎯 **Pontuação RSC & Nível Pleiteado**: Implementação de renderizador dinâmico para os 6 Eixos do RSC contendo a totalidade dos **60 critérios oficiais** (Anexos I a VI) mapeados do simulador do IF Sertão PE. Adicionado buscador de atividades em tempo real, exportação inteligente para CSV e atualização do JSON de sessão. As travas de meta agora são dinâmicas para cada nível (**RSC-PCCTAE-I a RSC-PCCTAE-VI**):
      - **RSC-I**: 10 pts, mínimo 1 critério ativo.
      - **RSC-II**: 15 pts, mínimo 2 critérios ativos.
      - **RSC-III**: 25 pts, mínimo 2 critérios ativos.
      - **RSC-IV**: 30 pts, mínimo 3 critérios ativos, exigindo pontuação nos Eixos II, IV, V ou VI.
      - **RSC-V**: 52 pts, mínimo 5 critérios ativos, exigindo pontuação nos Eixos IV, V ou VI.
      - **RSC-VI**: 75 pts, mínimo 7 critérios ativos, exigindo pontuação no Eixo VI.
    Desenvolvimento de **Painel Informativo Dinâmico da Lei do RSC-PCCTAE** (Lei nº 15.367/2026) que exibe de forma detalhada os requisitos formais acadêmicos, os percentuais de IQ pretendidos e o detalhamento das regras fundamentadas nos **Arts. 12-B, 12-C e 12-D** da legislação.
*   📰 **Notícias Dinâmicas via RSS Scraper**: Acoplamento do leitor de notícias assíncrono buscando do arquivo notícias local `noticias.json`, alimentado por um scraper automático Python que roda a cada 24h via GitHub Actions. Ajustadas as consultas de busca e adicionados filtros rígidos de relevância por palavras-chave para assegurar que apenas notícias estritamente ligadas à carreira PCCTAE e ao RSC sejam catalogadas, expurgando ruídos institucionais alheios à finalidade da ferramenta.
*   🌐 **Generalização Institucional**: Remoção de menções específicas ao "IF Baiano" nos textos explicativos de simulação do RSC e nas fontes padrões do painel de notícias, tornando a ferramenta 100% genérica para uso de Técnicos-Administrativos em Educação (TAEs) de qualquer Instituto Federal ou Universidade Federal do país.
*   💵 **Ajuste de Container do AdSense**: Renomeação das classes CSS de `.adsense-container` para `.patrocinio-container` a fim de evitar bloqueios de ad-blockers. **Melhoria**: Correção do erro de AdSense `No slot size for availableWidth=0` através do desenvolvimento de uma rotina segura de inicialização dinâmica dos anúncios ([initAdSense](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js#L216)), executada apenas após o reflow do layout (300ms de atraso) e em eventos de troca de abas, prevenindo tentativas prematuras de renderização em contêineres ocultos ou com largura zero.
*   🔧 **Correção de Permissão no Workflow & Erros de JS**: Adicionada a permissão explícita `contents: write` ao `GITHUB_TOKEN` no workflow `update_news.yml`. Corrigido o erro de sintaxe Javascript de chave de fechamento ausente na função [calculateRscPoints](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js#L959) que bloqueava a navegação por abas.


### [02/07/2026] - Lançamento e Configuração Inicial
*   🚀 **Estruturação do Projeto**: Criação da base de códigos em [index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/index.html), [style.css](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/style.css) e [app.js](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/YLuna85%20LABs%20APPs/calculadora-tae-federal/app.js).
*   🎨 **Branding de Laboratório**: Configuração da identidade visual com o selo **YLuna85 LABs** e incorporação dos ativos de imagem dos mascotes oficiais Coragem e Bolinho de chuva na pasta `/assets`.
*   📊 **Inteligência Salarial**: Implementação dos algoritmos de cálculo de progressão por step (4,1%), faixas tributárias de PSS/IRRF (2026) e regras de per capita de saúde suplementar (Portaria MGI nº 2.778/2026).
*   ⚙️ **Segregação de IQ & RSC**: Ajuste para separar os campos de IQ e RSC na interface do usuário, adicionando regras de restrição regulatória dinâmica (limitação do RSC a apenas um nível superior à escolaridade de entrada do IQ) e consolidação da equivalência financeira de proventos pelo percentual superior.
*   💵 **Google AdSense**: Inclusão de blocos de anúncios responsivos (Leaderboards) discretos com estilização Glassmorphism e ocultação automática do placeholder local ao preenchimento de conteúdo do anúncio.
*   📰 **Mural de Novidades**: Desenvolvimento e acoplamento de seção de novidades e informes rápidos da carreira na parte inferior da aba da calculadora, promovendo visibilidade imediata para eixos e diretrizes regulamentares.
*   🎯 **Calculadora de Pontuação RSC**: Lançamento da nova aba de cálculo de pontuação baseada em eixos de curadoria documental, com pesos parametrizados e verificação de status de homologação de 50 pontos mínimos.
*   🎨 **Favicon do Laboratório**: Incorporação da marca oficial **YLuna85 LABs** como ícone de página (favicon) no head do documento HTML.
*   💵 **Parametrização do AdSense**: Substituição das chaves de identificação genéricas do Google AdSense pelo ID de cliente real (`ca-pub-xxxxxxxxxxxxxxxx`) no cabeçalho e contêineres do simulador.
