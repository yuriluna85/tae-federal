// Dados de Carreira e Auxílios do PCCTAE - Vigência: Abril 2026
const pcctaeData = {
    tabela_salarial: {
        A: [1877.54, 1954.52, 2034.66, 2118.08, 2204.92, 2295.32, 2389.43, 2487.40, 2589.38, 2695.54, 2806.06, 2921.11, 3040.87, 3165.55, 3295.34, 3430.45, 3571.09, 3717.51, 3869.93],
        B: [2086.16, 2171.69, 2260.73, 2353.42, 2449.91, 2550.36, 2654.92, 2763.77, 2877.09, 2995.05, 3117.84, 3245.68, 3378.75, 3517.28, 3661.49, 3811.61, 3967.88, 4130.57, 4299.92],
        C: [2607.70, 2714.61, 2825.91, 2941.77, 3062.39, 3187.95, 3318.63, 3454.72, 3596.36, 3743.81, 3897.31, 4057.10, 4223.44, 4396.60, 4576.86, 4764.51, 4959.85, 5163.21, 5374.90],
        D: [3181.39, 3311.83, 3447.61, 3588.97, 3736.11, 3889.29, 4048.75, 4214.75, 4387.56, 4567.45, 4754.71, 4949.66, 5152.59, 5363.85, 5583.77, 5812.70, 6051.02, 6299.11, 6557.38],
        E: [5215.39, 5429.23, 5651.82, 5883.55, 6124.77, 6375.89, 6637.13, 6909.43, 7192.72, 7487.62, 7794.61, 8114.19, 8446.87, 8793.19, 9153.72, 9529.02, 9919.71, 10326.42, 10749.80]
    },
    funcoes: {
        none: 0,
        cd1_int: 22219.64,
        cd1_opt: 13331.78,
        cd2_int: 16806.33,
        cd2_opt: 10083.80,
        cd3_int: 12291.61,
        cd3_opt: 7374.97,
        cd4_int: 8315.71,
        cd4_opt: 4989.43,
        fg1: 1263.32,
        fg2: 849.91,
        fg3: 689.06,
        fg4: 321.77,
        fcc: 1273.25
    },
    diarias: {
        tae: { demais: 335.00, capitais: 380.00, especiais: 425.00 },
        cce13_17: { demais: 455.00, capitais: 515.00, especiais: 600.00 },
        cce18: { demais: 650.00, capitais: 700.00, especiais: 800.00 },
        ministro: { demais: 750.00, capitais: 800.00, especiais: 900.00 }
    },
    incentivo_qualificacao: {
        none: 0,
        fundamental: 0.10,
        medio: 0.15,
        tecnico: 0.20,
        graduacao: 0.25,
        especializacao: 0.30,
        mestrado: 0.52,
        doutorado: 0.75
    },
    rsc_pcctae: {
        none: 0,
        rsc_fundamental: 0.10, // fundamental
        rsc_medio: 0.15,       // medio
        rsc_tecnico: 0.20,     // tecnico
        rsc_graduacao: 0.25,   // graduacao
        rsc_especializacao: 0.30, // especializacao
        rsc_mestrado: 0.52,    // mestrado
        rsc_doutorado: 0.75    // doutorado
    },
    auxilios: {
        alimentacao: 1192.00,
        pre_escolar: 526.34,
        saude_suplementar: [
            {
                limite: 3000.99,
                valores: { "0-18": 287.32, "19-23": 300.88, "24-28": 304.95, "29-33": 335.81, "34-38": 345.84, "39-43": 357.32, "44-48": 408.14, "49-53": 414.63, "54-58": 421.08, "59+": 464.89 }
            },
            {
                limite: 6000.99,
                valores: { "0-18": 221.94, "19-23": 234.73, "24-28": 238.54, "29-33": 260.23, "34-38": 269.71, "39-43": 280.56, "44-48": 317.49, "49-53": 322.55, "54-58": 327.59, "59+": 362.90 }
            },
            {
                limite: 9000.99,
                valores: { "0-18": 181.77, "19-23": 184.16, "24-28": 187.76, "29-33": 201.54, "34-38": 210.49, "39-43": 220.69, "44-48": 237.52, "49-53": 241.28, "54-58": 245.05, "59+": 265.96 }
            },
            {
                limite: 12000.99,
                valores: { "0-18": 160.72, "19-23": 162.96, "24-28": 166.29, "29-33": 179.38, "34-38": 187.76, "39-43": 197.33, "44-48": 212.37, "49-53": 215.74, "54-58": 219.09, "59+": 238.92 }
            },
            {
                limite: 15000.99,
                valores: { "0-18": 149.25, "19-23": 151.31, "24-28": 154.41, "29-33": 167.42, "34-38": 175.23, "39-43": 184.17, "44-48": 199.10, "49-53": 202.25, "54-58": 205.40, "59+": 224.87 }
            },
            {
                limite: 18000.99,
                valores: { "0-18": 137.76, "19-23": 139.67, "24-28": 142.54, "29-33": 155.46, "34-38": 162.72, "39-43": 171.02, "44-48": 185.83, "49-53": 188.76, "54-58": 191.71, "59+": 210.82 }
            },
            {
                limite: 21000.99,
                valores: { "0-18": 126.29, "19-23": 128.04, "24-28": 130.66, "29-33": 143.50, "34-38": 150.21, "39-43": 157.87, "44-48": 172.55, "49-53": 175.28, "54-58": 178.01, "59+": 196.76 }
            },
            {
                limite: Infinity,
                valores: { "0-18": 120.55, "19-23": 122.22, "24-28": 124.72, "29-33": 131.54, "34-38": 137.68, "39-43": 144.71, "44-48": 159.27, "49-53": 161.80, "54-58": 164.33, "59+": 182.71 }
            }
        ]
    }
};

// Dados completos do Barema de Pontuação RSC-PCCTAE (Conforme Minuta do Decreto de Regulamentação Nacional)
const RSC_ANEXOS_DATA = [
    {
        id: 1,
        sigla: "Anexo I",
        titulo: "Eixo I: Grupos de Trabalho, Comissões, Comitês, Núcleos ou Representações",
        itens: [
            { id: "pts-1-1", n: 1, d: "Exercício do mandato como membro de conselhos superiores e conselhos de unidades e órgãos colegiados das instituições federais de ensino.", u: "Por ano ou fração acima de 6 meses", pts: 3.0 },
            { id: "pts-1-2", n: 2, d: "Coordenação ou presidência de núcleos, representações, grupos de trabalho ou similares, comissões ou comitês previstos no âmbito da administração pública, regularmente instituídos, ou reconhecidos pelo órgão ou pela entidade.", u: "Por designação", pts: 4.5 },
            { id: "pts-1-3", n: 3, d: "Participação como membro de núcleos, representações, grupos de trabalho ou similares, comissões ou comitês previstos no âmbito da administração pública, regularmente instituídos.", u: "Por designação", pts: 3.0 },
            { id: "pts-1-4", n: 4, d: "Participação como defensor dativo ou como membro de equipe designada em processos de apuração de materialidade e responsabilidade, como sindicância, processo administrativo disciplinar e tomada de contas especial.", u: "Por designação", pts: 15.0 },
            { id: "pts-1-5", n: 5, d: "Atuação em atividades de organização, fiscalização, execução de exame de seleção, vestibular ou concursos.", u: "Por designação", pts: 4.5 },
            { id: "pts-1-6", n: 6, d: "Atuação em atividades de elaboração, revisão ou correção de provas de exame de seleção, vestibular ou concursos.", u: "Por designação", pts: 3.0 },
            { id: "pts-1-7", n: 7, d: "Exercício de mandato em entidade sindical representativa da categoria.", u: "Por ano ou fração acima de 6 meses", pts: 1.5 },
            { id: "pts-1-8", n: 8, d: "Participação como membro em programas ou projetos de políticas públicas externas à instituição.", u: "Por designação", pts: 3.0 },
            { id: "pts-1-9", n: 9, d: "Representação legal da instituição ou responsabilidade técnica em órgãos de fiscalização, controle e regulação, ou em qualquer outra entidade pública.", u: "Por designação", pts: 7.5 },
            { id: "pts-1-10", n: 10, d: "Trabalho desenvolvido em órgãos estatais ou paraestatais, escolas de governo, agências reguladoras e organismos internacionais.", u: "Por produto", pts: 4.5 }
        ]
    },
    {
        id: 2,
        sigla: "Anexo II",
        titulo: "Eixo II: Projetos Institucionais, Gestão, Apoio ao Ensino, Pesquisa, Extensão, Inovação e Assistência",
        itens: [
            { id: "pts-2-1", n: 1, d: "Coordenação de projetos institucionais (ensino, pesquisa, extensão, gestão e inovação).", u: "Por projeto", pts: 7.5 },
            { id: "pts-2-2", n: 2, d: "Participação em atividades técnicas ou especializadas em projetos, incluindo a elaboração de projetos pedagógicos, programas ou ações institucionais (ensino, pesquisa, extensão, gestão e inovação).", u: "Por projeto", pts: 4.5 },
            { id: "pts-2-3", n: 3, d: "Participação em comissão/conselho editorial de livros, revistas, publicações científicas ou outras publicações acadêmicas.", u: "Por mandato", pts: 7.5 },
            { id: "pts-2-4", n: 4, d: "Participação em atividade de cooperação técnica interinstitucional em projetos institucionais.", u: "Por projeto", pts: 3.0 },
            { id: "pts-2-5", n: 5, d: "Participação em atividades de orientação, tutoria, preceptoria ou supervisão.", u: "Por designação", pts: 3.0 },
            { id: "pts-2-6", n: 6, d: "Participação em atividades de produção/reformulação de material acessível, técnico de referência (manuais, roteiros técnicos).", u: "Por produto", pts: 3.0 },
            { id: "pts-2-7", n: 7, d: "Participação em atividade de avaliação de trabalho ou atuação como jurado em eventos acadêmicos, científicos, culturais, esportivos e técnicos.", u: "Por evento", pts: 3.0 },
            { id: "pts-2-8", n: 8, d: "Participação em atividade institucional de produção audiovisual, artística, exposição, podcast ou outras formas de apresentação.", u: "Por projeto", pts: 3.0 },
            { id: "pts-2-9", n: 9, d: "Participação em programas de formação continuada ou ações de desenvolvimento de competências, desde que não utilizada para fins de aceleração da promoção na carreira, com carga horária mínima de 10 horas.", u: "Por capacitação", pts: 3.0 },
            { id: "pts-2-10", n: 10, d: "Desempenho de atividade técnica de natureza especializada, com contribuição institucional relevante na área de atuação.", u: "Por ano ou fração acima de 6 meses", pts: 1.0 },
            { id: "pts-2-11", n: 11, d: "Participação em congresso, simpósio, fórum, conferência, colóquio, mesa-redonda, workshop, seminário, mostra/feira, treinamento, atividades de apoio técnico, ações de campo, saídas pedagógicas, eventos científicos/esportivos/artísticos/culturais/sindicais (carga horária mínima de 4h).", u: "Por evento", pts: 1.0 }
        ]
    },
    {
        id: 3,
        sigla: "Anexo III",
        titulo: "Eixo III: Prêmio de Mérito, Comendas, Homenagens e Menções Honrosas",
        itens: [
            { id: "pts-3-1", n: 1, d: "Recebimento de reconhecimento, menção honrosa ou premiação de âmbito internacional.", u: "Por prêmio", pts: 20.0 },
            { id: "pts-3-2", n: 2, d: "Recebimento de reconhecimento, menção honrosa ou premiação de âmbito nacional.", u: "Por prêmio", pts: 15.0 },
            { id: "pts-3-3", n: 3, d: "Recebimento de reconhecimento, menção honrosa ou premiação de âmbito local ou institucional, formalmente instituídos.", u: "Por prêmio", pts: 7.5 }
        ]
    },
    {
        id: 4,
        sigla: "Anexo IV",
        titulo: "Eixo IV: Assunção de Responsabilidades Técnico-Administrativas ou Especializadas",
        itens: [
            { id: "pts-4-1", n: 1, d: "Atuação diferenciada em atividades de execução/operação, desenvolvimento, colaboração nos sistemas estruturantes da administração pública.", u: "Por Sistema", pts: 4.5 },
            { id: "pts-4-2", n: 2, d: "Elaboração de projeto básico ou de termo de referência, ou participação como membro da equipe de planejamento da contratação.", u: "Por designação", pts: 3.0 },
            { id: "pts-4-3", n: 3, d: "Exercício de atividades de gestão ou fiscalização de contratos de aquisição, serviços, convênios e acordos ou instrumentos correlatos.", u: "Por designação", pts: 4.5 },
            { id: "pts-4-4", n: 4, d: "Exercício de atividades relacionadas a licitação e a respectivas excepcionalidades.", u: "Por ano ou fração acima de seis meses", pts: 3.0 },
            { id: "pts-4-5", n: 5, d: "Participação em atividades de apoio técnico especializado em políticas, programas e ações de promoção na área de saúde humana, animal e ambiente, de acessibilidade ou diversidade.", u: "Por ano ou fração acima de seis meses", pts: 3.0 },
            { id: "pts-4-6", n: 6, d: "Atuação em ambientes ou processos que demandem condições especiais de segurança, cuidado ou conformidade.", u: "Por ano ou fração acima de seis meses", pts: 3.0 },
            { id: "pts-4-7", n: 7, d: "Atuação diferenciada em sistemas ou processos de trabalho institucionais no âmbito do ensino, pesquisa, extensão, gestão e inovação.", u: "Por designação", pts: 3.0 },
            { id: "pts-4-8", n: 8, d: "Atuação como responsável formal por setor ou unidade, formalmente designado.", u: "Por ano ou fração acima de seis meses", pts: 4.5 }
        ]
    },
    {
        id: 5,
        sigla: "Anexo V",
        titulo: "Eixo V: Exercício de Funções, Cargos de Direção e de Assessoramento",
        itens: [
            { id: "pts-5-1", n: 1, d: "Exercício de Cargo de Direção (CD-02) ou equivalente - Titular.", u: "Por ano ou fração acima de seis meses", pts: 9.0 },
            { id: "pts-5-2", n: 2, d: "Exercício de Cargo de Direção (CD-02) ou equivalente - Substituto.", u: "Por ano ou fração acima de seis meses", pts: 4.5 },
            { id: "pts-5-3", n: 3, d: "Exercício de Cargo de Direção (CD-03 e 04) ou equivalente - Titular.", u: "Por ano ou fração acima de seis meses", pts: 7.5 },
            { id: "pts-5-4", n: 4, d: "Exercício de Cargo de Direção (CD-03 e 04) ou equivalente - Substituto.", u: "Por ano ou fração acima de seis meses", pts: 3.0 },
            { id: "pts-5-5", n: 5, d: "Exercício de Função Gratificada (FG-01 e 02) ou equivalente - Titular.", u: "Por ano ou fração acima de seis meses", pts: 4.5 },
            { id: "pts-5-6", n: 6, d: "Exercício de Função Gratificada (FG-01 e 02) ou equivalente - Substituto.", u: "Por ano ou fração acima de seis meses", pts: 1.5 },
            { id: "pts-5-7", n: 7, d: "Exercício de Função Gratificada (a partir da FG-03) ou equivalente - Titular.", u: "Por ano ou fração acima de seis meses", pts: 3.0 },
            { id: "pts-5-8", n: 8, d: "Exercício de Função Gratificada (a partir da FG-03) ou equivalente - Substituto.", u: "Por ano ou fração acima de seis meses", pts: 1.0 }
        ]
    },
    {
        id: 6,
        sigla: "Anexo VI",
        titulo: "Eixo VI: Produção, Prospecção e Difusão de Conhecimento Científico ou Técnico",
        itens: [
            { id: "pts-6-1", n: 1, d: "Carta Patente.", u: "Por patente", pts: 30.0 },
            { id: "pts-6-2", n: 2, d: "Participação no desenvolvimento de protótipos, depósitos ou registros de propriedade intelectual ou privilégio de invenção.", u: "Por projeto", pts: 25.0 },
            { id: "pts-6-3", n: 3, d: "Participação em transferência de tecnologia, licenciamento ou exploração de ativo tecnológico, como autor ou inventor.", u: "Por produto", pts: 20.0 },
            { id: "pts-6-4", n: 4, d: "Conclusão de curso de educação formal superior ao exigido para o ingresso no cargo de que é titular e que não seja utilizado para percepção do atual nível de Incentivo a Qualificação - IQ.", u: "Por curso", pts: 15.0 },
            { id: "pts-6-5", n: 5, d: "Participação na implantação ou desenvolvimento de produto, projeto, processo, técnica ou tecnologia de interesse institucional.", u: "Por produto", pts: 15.0 },
            { id: "pts-6-6", n: 6, d: "Certificação profissional por órgão ou entidade competente demonstrando domínio de conhecimento técnico na área de atuação.", u: "Por certificado", pts: 15.0 },
            { id: "pts-6-7", n: 7, d: "Atuação em atividade de liderança ou vice-liderança de grupo de pesquisa ou extensão registrada.", u: "Por grupo de pesquisa", pts: 7.5 },
            { id: "pts-6-8", n: 8, d: "Participação como membro em grupo de pesquisa devidamente registrado em órgão ou sistema oficial de reconhecimento institucional.", u: "Por projeto", pts: 3.0 },
            { id: "pts-6-9", n: 9, d: "Aprovação de projeto para a captação de recursos.", u: "Por projeto", pts: 7.5 },
            { id: "pts-6-10", n: 10, d: "Publicação ou organização de livro (com ISBN e Conselho Editorial).", u: "Por produto", pts: 20.0 },
            { id: "pts-6-11", n: 11, d: "Autoria ou coautoria de capítulo de livro, de artigo publicado em revista especializada, jornal científico ou periódico.", u: "Por publicação", pts: 7.5 },
            { id: "pts-6-12", n: 12, d: "Apresentação de trabalho em congresso, seminário ou outros eventos.", u: "Por produto", pts: 4.5 },
            { id: "pts-6-13", n: 13, d: "Produção de material técnico, científico, metodológico ou administrativo estruturado que visa à difusão do conhecimento.", u: "Por produto", pts: 4.5 },
            { id: "pts-6-14", n: 14, d: "Participação em atividade de avaliação do projeto de ensino, pesquisa, extensão ou inovação.", u: "Por projeto", pts: 4.5 },
            { id: "pts-6-15", n: 15, d: "Participação em atividade de difusão ou apoio à formação institucional (expositor, facilitador, colaborador).", u: "Por evento", pts: 3.0 },
            { id: "pts-6-16", n: 16, d: "Atuação como instrutor, tutor, palestrante, autor técnico ou orientador em ação formativa estruturada.", u: "Por curso", pts: 4.5 },
            { id: "pts-6-17", n: 17, d: "Atuação na coordenação/mediação de fórum, congresso, mesa-redonda, simpósio, seminário, oficina e outros eventos.", u: "Por evento", pts: 4.5 },
            { id: "pts-6-18", n: 18, d: "Exercício de atividade de orientação ou coorientação de trabalho de conclusão de curso em diferentes modalidades de ensino.", u: "Por evento", pts: 7.5 },
            { id: "pts-6-19", n: 19, d: "Autoria de obra artística ou cultural registrada.", u: "Por produto", pts: 3.0 },
            { id: "pts-6-20", n: 20, d: "Atuação no enfrentamento de situações de surto, epidemias e pandemia.", u: "Por mês", pts: 1.0 }
        ]
    }
];

// Configurações do Estado da Aplicação
let currentFontSize = 16;
const fontStep = 2;
const minFontSize = 12;
const maxFontSize = 24;

// Inicialização da página
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initA11y();
    initCalcInputs();
    initRscCalc();
    initTableViewer();
    initNews();
    initDiarias();
    calculateSalary(); // Cálculo inicial
});

// Controle de Abas
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
}

// Controle de Acessibilidade
function initA11y() {
    const btnContrast = document.getElementById("btn-contrast");
    const btnFontPlus = document.getElementById("btn-font-plus");
    const btnFontMinus = document.getElementById("btn-font-minus");

    btnContrast.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        const isActive = document.body.classList.contains("high-contrast");
        btnContrast.setAttribute("aria-pressed", isActive);
    });

    btnFontPlus.addEventListener("click", () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += fontStep;
            document.documentElement.style.setProperty("--base-font-size", `${currentFontSize}px`);
        }
    });

    btnFontMinus.addEventListener("click", () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= fontStep;
            document.documentElement.style.setProperty("--base-font-size", `${currentFontSize}px`);
        }
    });
}

// Inicialização dos Inputs da Calculadora
function initCalcInputs() {
    const inputs = ["nivel", "padrao", "select-iq", "select-rsc", "select-funcao", "aux-alimentacao", "aux-creche", "creche-dep", "aux-transporte", "transporte-valor", "transporte-dias", "transporte-pgd", "contrib-sindical", "aux-saude", "saude-idade"];
    
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("change", () => {
                if (id === "nivel") {
                    const isSemVinculo = el.value === "sem_vinculo";
                    const padraoEl = document.getElementById("padrao");
                    const iqEl = document.getElementById("select-iq");
                    const rscEl = document.getElementById("select-rsc");
                    if (padraoEl) padraoEl.disabled = isSemVinculo;
                    if (iqEl) {
                        iqEl.disabled = isSemVinculo;
                        if (isSemVinculo) iqEl.value = "none";
                    }
                    if (rscEl) {
                        rscEl.disabled = isSemVinculo;
                        if (isSemVinculo) rscEl.value = "none";
                    }
                    updateRscOptions();
                }
                if (id === "select-iq") {
                    updateRscOptions();
                }
                if (id === "aux-creche") {
                    document.getElementById("creche-dep").disabled = !el.checked;
                }
                if (id === "aux-transporte") {
                    document.querySelector(".transport-details").style.display = el.checked ? "block" : "none";
                }
                if (id === "aux-saude") {
                    document.getElementById("saude-idade").disabled = !el.checked;
                    document.querySelector(".dependent-list").style.display = el.checked ? "block" : "none";
                }
                calculateSalary();
            });
            if (id === "transporte-valor" || id === "transporte-dias") {
                el.addEventListener("input", calculateSalary);
            }
        }
    });

    // Evento do botão adicionar dependente de saúde
    document.getElementById("btn-add-dep").addEventListener("click", addDependentRow);

    // Inicializa as opções do RSC com base no IQ padrão
    updateRscOptions();
}

// Popular dinamicamente as opções válidas de RSC
function updateRscOptions() {
    const iqSelect = document.getElementById("select-iq");
    const rscSelect = document.getElementById("select-rsc");
    if (!iqSelect || !rscSelect) return;

    const currentIq = iqSelect.value;
    const rscValueBefore = rscSelect.value; // Salvar valor selecionado anteriormente
    rscSelect.innerHTML = "";

    const rscOpcoes = {
        none: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_fundamental", text: "RSC-PCCTAE-I: Fundamental Completo (10%)" },
            { val: "rsc_medio", text: "RSC-PCCTAE-II: Ensino Médio Completo (15%)" },
            { val: "rsc_graduacao", text: "RSC-PCCTAE-III: Graduação Completa (25%)" },
            { val: "rsc_especializacao", text: "RSC-PCCTAE-IV: Especialização Completa (30%)" },
            { val: "rsc_mestrado", text: "RSC-PCCTAE-V: Mestrado Completo (52%)" },
            { val: "rsc_doutorado", text: "RSC-PCCTAE-VI: Doutorado Completo (75%)" }
        ],
        fundamental: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_medio", text: "RSC-PCCTAE-II: Ensino Médio Completo (15%)" }
        ],
        medio: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_graduacao", text: "RSC-PCCTAE-III: Graduação Completa (25%)" }
        ],
        tecnico: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_graduacao", text: "RSC-PCCTAE-III: Graduação Completa (25%)" }
        ],
        graduacao: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_especializacao", text: "RSC-PCCTAE-IV: Especialização Completa (30%)" }
        ],
        especializacao: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_mestrado", text: "RSC-PCCTAE-V: Mestrado Completo (52%)" }
        ],
        mestrado: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_doutorado", text: "RSC-PCCTAE-VI: Doutorado Completo (75%)" }
        ],
        doutorado: [
            { val: "none", text: "Sem RSC (Já atingiu o teto da carreira)" }
        ]
    };

    const opcoes = rscOpcoes[currentIq] || [{ val: "none", text: "Sem RSC" }];

    opcoes.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.val;
        opt.textContent = o.text;
        rscSelect.appendChild(opt);
    });

    // Tentar restaurar o valor anterior se ele ainda existir nas novas opções
    const hasValue = Array.from(rscSelect.options).some(opt => opt.value === rscValueBefore);
    if (hasValue) {
        rscSelect.value = rscValueBefore;
    } else {
        rscSelect.value = "none";
    }
}

// Gerenciador de dependentes de saúde suplementar
function addDependentRow() {
    const list = document.getElementById("dep-ages-list");
    const row = document.createElement("div");
    row.className = "dependent-row";
    row.innerHTML = `
        <input type="number" class="form-control dep-age" placeholder="Idade do dependente" min="0" max="120" style="width: 70%;">
        <button type="button" class="btn-remove btn-remove-dep" aria-label="Remover dependente">Remover</button>
    `;
    list.appendChild(row);
    
    // Adicionar escuta para mudança na idade
    row.querySelector(".dep-age").addEventListener("change", calculateSalary);
    // Adicionar escuta para remover
    row.querySelector(".btn-remove-dep").addEventListener("click", () => {
        row.remove();
        calculateSalary();
    });

    calculateSalary();
}

// Busca o valor per capita de saúde suplementar na tabela
function getSaudePerCapita(remuneracao, idade) {
    let faixaEtaria = "0-18";
    if (idade >= 19 && idade <= 23) faixaEtaria = "19-23";
    else if (idade >= 24 && idade <= 28) faixaEtaria = "24-28";
    else if (idade >= 29 && idade <= 33) faixaEtaria = "29-33";
    else if (idade >= 34 && idade <= 38) faixaEtaria = "34-38";
    else if (idade >= 39 && idade <= 43) faixaEtaria = "39-43";
    else if (idade >= 44 && idade <= 48) faixaEtaria = "44-48";
    else if (idade >= 49 && IP_idade_entre(idade, 49, 53)) faixaEtaria = "49-53";
    else if (idade >= 54 && IP_idade_entre(idade, 54, 58)) faixaEtaria = "54-58";
    else if (idade >= 59) faixaEtaria = "59+";

    const faixas = pcctaeData.auxilios.saude_suplementar;
    for (const f of faixas) {
        if (remuneracao <= f.limite) {
            return f.valores[faixaEtaria] || 0;
        }
    }
    return 0;
}

function IP_idade_entre(idade, min, max) {
    return idade >= min && idade <= max;
}

// CÁLCULO GERAL DA REMUNERAÇÃO
function calculateSalary() {
    // 1. Vencimento Básico
    const nivel = document.getElementById("nivel").value;
    const padrao = parseInt(document.getElementById("padrao").value) - 1;
    let vencimentoBasico = 0;
    if (nivel !== "sem_vinculo") {
        vencimentoBasico = pcctaeData.tabela_salarial[nivel][padrao] || 0;
    }

    // 1.1 Função Comissionada
    const funcaoId = document.getElementById("select-funcao").value;
    const valorFuncao = pcctaeData.funcoes[funcaoId] || 0;

    // 2. Qualificação (IQ e RSC separados e integrados)
    const iqNivel = document.getElementById("select-iq").value;
    const rscNivel = document.getElementById("select-rsc").value;
    
    const iqPercentual = pcctaeData.incentivo_qualificacao[iqNivel] || 0;
    const rscPercentual = pcctaeData.rsc_pcctae[rscNivel] || 0;
    
    // O RSC eleva o percentual final ao nível do Reconhecimento de Saberes obtido
    const qualifPercentual = Math.max(iqPercentual, rscPercentual);
    const valorQualif = vencimentoBasico * qualifPercentual;

    // Regra: CD integral (100%) exclui o VB e o IQ/RSC dos proventos recebidos pelo servidor
    const isCdIntegral = ["cd1_int", "cd2_int", "cd3_int", "cd4_int"].includes(funcaoId);
    
    const vencimentoBasicoEfetivo = isCdIntegral ? 0 : vencimentoBasico;
    const valorQualifEfetivo = isCdIntegral ? 0 : valorQualif;

    // 3. Auxílios
    let valorAlimentacao = 0;
    if (document.getElementById("aux-alimentacao").checked) {
        valorAlimentacao = pcctaeData.auxilios.alimentacao;
    }

    let valorCreche = 0;
    if (document.getElementById("aux-creche").checked) {
        const numDep = parseInt(document.getElementById("creche-dep").value) || 0;
        valorCreche = numDep * pcctaeData.auxilios.pre_escolar;
    }

    let valorTransporte = 0;
    let contrapartidaTransporte = 0;
    if (document.getElementById("aux-transporte").checked) {
        const valorDiario = parseFloat(document.getElementById("transporte-valor").value) || 0;
        const dias = parseInt(document.getElementById("transporte-dias").value) || 0;
        const pgd = parseFloat(document.getElementById("transporte-pgd").value) || 0;
        
        // PGD reduz o transporte de acordo com o percentual de teletrabalho
        const fatorPGD = (100 - pgd) / 100.0;
        valorTransporte = valorDiario * dias * fatorPGD;

        // Contrapartida de 6% do Vencimento Básico (VB)
        contrapartidaTransporte = valorTransporte > 0 ? Math.min(valorTransporte, vencimentoBasico * 0.06) : 0;
    }

    // Contribuição Sindical (1% do Vencimento Básico)
    const sindicalAtivo = document.getElementById("contrib-sindical").checked;
    const valorSindical = sindicalAtivo ? vencimentoBasico * 0.01 : 0;

    // 4. Saúde Suplementar (Titular e Dependentes)
    let valorSaude = 0;
    if (document.getElementById("aux-saude").checked) {
        const idadeTitular = parseInt(document.getElementById("saude-idade").value) || 0;
        // O valor considerado de rendimentos para enquadrar na faixa de per capita é o vencimento básico efetivo + IQ/RSC efetivo + Função Comissionada
        const rendimentoReferencia = vencimentoBasicoEfetivo + valorQualifEfetivo + valorFuncao;
        
        // Custo do titular
        valorSaude += getSaudePerCapita(rendimentoReferencia, idadeTitular);

        // Custo dos dependentes
        const depAges = document.querySelectorAll(".dep-age");
        depAges.forEach(input => {
            const idadeDep = parseInt(input.value) || 0;
            valorSaude += getSaudePerCapita(rendimentoReferencia, idadeDep);
        });
    }

    // Totais de Proventos Brutos (Remuneração real efetiva)
    const baseTributavel = vencimentoBasicoEfetivo + valorQualifEfetivo + valorFuncao; 
    const totalAuxilios = valorAlimentacao + valorTransporte + valorCreche + valorSaude;
    const brutoTotal = baseTributavel + totalAuxilios;

    // 5. DEDUÇÕES (Cálculos de Previdência PSS e IRRF baseados em 2026)
    // PSS - Alíquotas Progressivas Federais (Incide sobre o cargo de carreira efetivo do servidor)
    const basePSS = (nivel === "sem_vinculo") ? 0 : (vencimentoBasico + valorQualif);
    const pss = calcularPSS(basePSS);

    // IRRF - Imposto de Renda Retido na Fonte
    // Base de cálculo = base tributável - PSS - dependentes (dedução legal R$ 189,59 cada) - contribuição sindical
    const depAgesCount = document.querySelectorAll(".dep-age").length;
    const crecheDepCount = document.getElementById("aux-creche").checked ? parseInt(document.getElementById("creche-dep").value) || 0 : 0;
    const totalDependentesIRRF = Math.max(depAgesCount, crecheDepCount); // Total de dependentes legais dedutíveis
    const deducaoDependentes = totalDependentesIRRF * 189.59;
    
    const baseIRRF = Math.max(0, baseTributavel - pss - deducaoDependentes - valorSindical);
    const irrf = calcularIRRF(baseIRRF);

    const totalDescontos = pss + irrf + contrapartidaTransporte + valorSindical;
    const liquidoTotal = brutoTotal - totalDescontos;

    // RENDERIZAR RESULTADOS NA TELA
    const elVenc = document.getElementById("res-vencimento");
    const elQual = document.getElementById("res-qualificacao");

    if (isCdIntegral) {
        elVenc.style.textDecoration = "line-through";
        elVenc.style.color = "#ef4444";
        elVenc.textContent = formatCurrency(vencimentoBasico) + " (Excluído)";

        elQual.style.textDecoration = "line-through";
        elQual.style.color = "#ef4444";
        elQual.textContent = formatCurrency(valorQualif) + " (Excluído)";
    } else {
        elVenc.style.textDecoration = "none";
        elVenc.style.color = "";
        elVenc.textContent = formatCurrency(vencimentoBasico);

        elQual.style.textDecoration = "none";
        elQual.style.color = "";
        elQual.textContent = formatCurrency(valorQualif);
    }

    document.getElementById("res-funcao").textContent = formatCurrency(valorFuncao);
    document.getElementById("res-alimentacao").textContent = formatCurrency(valorAlimentacao);
    document.getElementById("res-transporte").textContent = formatCurrency(valorTransporte);
    document.getElementById("res-creche").textContent = formatCurrency(valorCreche);
    document.getElementById("res-saude").textContent = formatCurrency(valorSaude);
    
    // Atualizar visualização e valores dos novos descontos
    const rowTrans = document.getElementById("row-desc-transporte");
    if (rowTrans) {
        if (contrapartidaTransporte > 0) {
            rowTrans.style.display = "flex";
            document.getElementById("res-desc-transporte").textContent = formatCurrency(contrapartidaTransporte);
        } else {
            rowTrans.style.display = "none";
        }
    }

    const rowSind = document.getElementById("row-desc-sindical");
    if (rowSind) {
        if (valorSindical > 0) {
            rowSind.style.display = "flex";
            document.getElementById("res-desc-sindical").textContent = formatCurrency(valorSindical);
        } else {
            rowSind.style.display = "none";
        }
    }
    
    document.getElementById("res-bruto").textContent = formatCurrency(brutoTotal);
    document.getElementById("res-pss").textContent = formatCurrency(pss);
    document.getElementById("res-irrf").textContent = formatCurrency(irrf);
    document.getElementById("res-descontos").textContent = formatCurrency(totalDescontos);
    document.getElementById("res-liquido").textContent = formatCurrency(liquidoTotal);

    // Atualizar Gráfico do Contracheque (Função comissionada entra no segmento básico)
    updateSalaryChart(vencimentoBasicoEfetivo + valorFuncao, valorQualifEfetivo, totalAuxilios, totalDescontos);
    
    // Atualizar Diárias se estiverem ativas
    if (typeof calculateDiarias === "function") {
        calculateDiarias();
    }
}

// Formatar Moeda Real R$
function formatCurrency(val) {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Algoritmo de Cálculo PSS Progressivo
function calcularPSS(base) {
    const aliquotas = [
        { limite: 1412.00, tax: 0.075 }, // Salário mínimo em 2024, referência
        { limite: 2666.68, tax: 0.09 },
        { limite: 4000.03, tax: 0.12 },
        { limite: 7786.02, tax: 0.14 }, // Teto do RGPS
        { limite: 13333.48, tax: 0.145 },
        { limite: 26666.94, tax: 0.165 },
        { limite: 53333.88, tax: 0.19 },
        { limite: Infinity, tax: 0.22 }
    ];

    let pssTotal = 0;
    let baseRestante = base;
    let limiteAnterior = 0;

    for (const a of aliquotas) {
        if (base > limiteAnterior) {
            const faixaLargura = Math.min(baseRestante, a.limite - limiteAnterior);
            pssTotal += faixaLargura * a.tax;
            baseRestante -= faixaLargura;
            limiteAnterior = a.limite;
            if (baseRestante <= 0) break;
        }
    }
    return pssTotal;
}

// Algoritmo de Cálculo IRRF Progressivo (Referência 2026)
function calcularIRRF(base) {
    // Tabela progressiva do IRRF
    if (base <= 2259.20) return 0;
    if (base <= 2828.65) return (base * 0.075) - 169.44;
    if (base <= 3751.05) return (base * 0.15) - 381.44;
    if (base <= 4664.68) return (base * 0.225) - 662.77;
    return (base * 0.275) - 896.00;
}

// Atualizar Gráfico de Proporção Salarial
function updateSalaryChart(vencimento, qualif, auxilios, descontos) {
    const total = vencimento + qualif + auxilios;
    if (total <= 0) return;

    const pVencimento = (vencimento / total) * 100;
    const pQualif = (qualif / total) * 100;
    const pAuxilios = (auxilios / total) * 100;
    
    // As deduções são projetadas em relação ao provento bruto total
    const pDescontos = (descontos / total) * 100;

    const segmentBasic = document.getElementById("seg-basic");
    const segmentQualif = document.getElementById("seg-qualif");
    const segmentBenefits = document.getElementById("seg-benefits");
    
    segmentBasic.style.width = `${pVencimento}%`;
    segmentQualif.style.width = `${pQualif}%`;
    segmentBenefits.style.width = `${pAuxilios}%`;

    // Atualizar labels numéricos
    document.getElementById("lbl-basic-pct").textContent = `${pVencimento.toFixed(1)}%`;
    document.getElementById("lbl-qualif-pct").textContent = `${pQualif.toFixed(1)}%`;
    document.getElementById("lbl-benefits-pct").textContent = `${pAuxilios.toFixed(1)}%`;
    document.getElementById("lbl-deduct-pct").textContent = `${pDescontos.toFixed(1)}% de descontos sobre o bruto`;
}

// Inicialização do Visualizador da Tabela Salarial
function initTableViewer() {
    const levelButtons = document.querySelectorAll(".level-tab-btn");
    levelButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            levelButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderLevelTable(btn.dataset.level);
        });
    });

    renderLevelTable("E"); // Começar com Nível E de padrão
}

// Renderizar Tabela de Vencimento de um Nível específico
function renderLevelTable(nivel) {
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    const valores = pcctaeData.tabela_salarial[nivel];
    valores.forEach((valor, idx) => {
        const padrao = idx + 1;
        const row = document.createElement("tr");

        // Cálculo dos IQs comuns para visualização
        const valorEspecializacao = valor * 1.30;
        const valorMestrado = valor * 1.52;
        const valorDoutorado = valor * 1.75;

        row.innerHTML = `
            <td style="font-weight: 600; text-align: center;">${padrao < 10 ? '0' + padrao : padrao}</td>
            <td>${formatCurrency(valor)}</td>
            <td style="color: var(--color-secondary);">${formatCurrency(valorEspecializacao)}</td>
            <td style="color: var(--color-primary);">${formatCurrency(valorMestrado)}</td>
            <td style="color: var(--color-accent);">${formatCurrency(valorDoutorado)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Renderizar dinamicamente os eixos e critérios do RSC
function renderRscActivities() {
    const container = document.getElementById("rsc-anexos-container");
    if (!container) return;

    container.innerHTML = "";

    RSC_ANEXOS_DATA.forEach(anexo => {
        const box = document.createElement("div");
        box.className = "rsc-eixo-box";
        box.id = `rsc-anexo-box-${anexo.id}`;

        const h3 = document.createElement("h3");
        h3.textContent = `${anexo.titulo} (${anexo.sigla})`;
        box.appendChild(h3);

        anexo.itens.forEach(item => {
            const row = document.createElement("div");
            row.className = "rsc-item-row";
            row.setAttribute("data-anexo", anexo.id);

            const label = document.createElement("label");
            label.setAttribute("for", item.id);
            label.innerHTML = `<strong>${item.n}.</strong> ${item.d} <span style="font-size: 0.8rem; color: var(--color-text-muted);">(${item.u} | ${item.pts.toFixed(1)} pts)</span>`;
            row.appendChild(label);

            const inputWrapper = document.createElement("div");
            inputWrapper.style.display = "flex";
            inputWrapper.style.alignItems = "center";
            inputWrapper.style.gap = "10px";

            const input = document.createElement("input");
            input.type = "number";
            input.id = item.id;
            input.className = "form-control rsc-input";
            input.min = "0";
            input.value = "0";
            input.setAttribute("data-pts", item.pts);
            input.setAttribute("data-eixo", anexo.id);
            input.addEventListener("input", calculateRscPoints);
            input.addEventListener("change", calculateRscPoints);

            const span = document.createElement("span");
            span.id = `val-${item.id}`;
            span.className = "rsc-inline-pts";
            span.textContent = "0 pts";

            inputWrapper.appendChild(input);
            inputWrapper.appendChild(span);
            row.appendChild(inputWrapper);
            box.appendChild(row);
        });

        container.appendChild(box);
    });

    // Configurar o buscador
    const searchInput = document.getElementById("rsc-input-busca");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase().trim();
            const boxes = document.querySelectorAll("#rsc-anexos-container .rsc-eixo-box");
            boxes.forEach(box => {
                let hasVisibleRow = false;
                const rows = box.querySelectorAll(".rsc-item-row");
                rows.forEach(row => {
                    const labelText = row.querySelector("label").textContent.toLowerCase();
                    if (labelText.includes(query)) {
                        row.style.display = "flex";
                        hasVisibleRow = true;
                    } else {
                        row.style.display = "none";
                    }
                });
                box.style.display = hasVisibleRow ? "block" : "none";
            });
        });
    }
}

// Inicialização da Calculadora de Pontuação RSC
function initRscCalc() {
    renderRscActivities();

    const rscPleiteadoSelect = document.getElementById("rsc-nivel-pleiteado");
    if (rscPleiteadoSelect) {
        rscPleiteadoSelect.addEventListener("change", calculateRscPoints);
    }

    // Ações de Importação e Exportação
    const btnExportJson = document.getElementById("btn-export-json");
    const btnImportTrigger = document.getElementById("btn-import-trigger");
    const fileImportInput = document.getElementById("rsc-file-import");
    const btnExportCsv = document.getElementById("btn-export-csv");

    if (btnExportJson) {
        btnExportJson.addEventListener("click", exportRscSessao);
    }
    if (btnImportTrigger && fileImportInput) {
        btnImportTrigger.addEventListener("click", () => fileImportInput.click());
        fileImportInput.addEventListener("change", importRscSessao);
    }
    if (btnExportCsv) {
        btnExportCsv.addEventListener("click", exportRscPlanilhaCsv);
    }

    calculateRscPoints(); // Cálculo inicial
}

// Exportar os dados de inputs de RSC para um arquivo JSON
function exportRscSessao() {
    const data = {};
    const inputs = document.querySelectorAll("#rsc-anexos-container .rsc-input");
    inputs.forEach(input => {
        data[input.id] = parseInt(input.value) || 0;
    });

    const selectNivel = document.getElementById("rsc-nivel-pleiteado");
    if (selectNivel) {
        data["rsc-nivel-pleiteado"] = selectNivel.value;
    }

    const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement("a");
    const dataAtual = new Date().toISOString().slice(0, 10);
    
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `calculadora-rsc-sessao-${dataAtual}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Importar os dados do arquivo JSON e recarregar os inputs
function importRscSessao(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            let totalCarregados = 0;
            
            Object.keys(data).forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (el.classList.contains("rsc-input")) {
                        el.value = Math.max(0, parseInt(data[id]) || 0);
                        totalCarregados++;
                    } else if (id === "rsc-nivel-pleiteado") {
                        el.value = data[id];
                        totalCarregados++;
                    }
                }
            });
            
            if (totalCarregados > 0) {
                alert(`Sessão carregada com sucesso! ${totalCarregados} parâmetros do RSC foram restaurados.`);
                calculateRscPoints();
            } else {
                alert("Nenhum parâmetro válido do simulador RSC foi localizado no arquivo selecionado.");
            }
        } catch (err) {
            alert("Erro ao ler o arquivo de sessão. Certifique-se de selecionar um arquivo .json gerado por esta calculadora.");
        }
    };
    reader.readAsText(file);
    // Limpar o valor do input file para permitir importar o mesmo arquivo novamente
    event.target.value = "";
}

// Exportar planilha das atividades pontuadas para arquivo CSV
function exportRscPlanilhaCsv() {
    const rows = [
        ["Eixo de Comprovacao", "Item", "Atividade", "Quantidade Informada", "Pontuacao Obtida"]
    ];

    let totalGeral = 0;

    RSC_ANEXOS_DATA.forEach(anexo => {
        anexo.itens.forEach(item => {
            const input = document.getElementById(item.id);
            const qtd = input ? parseInt(input.value) || 0 : 0;
            if (qtd > 0) {
                const pts = qtd * item.pts;
                totalGeral += pts;
                rows.push([anexo.titulo, item.n.toString(), item.d, qtd.toString(), `${pts.toFixed(1)} pts`]);
            }
        });
    });

    if (rows.length === 1) {
        alert("Não há dados de atividades para exportar. Insira valores no simulador.");
        return;
    }

    rows.push(["", "", "", "Total Geral:", `${totalGeral.toFixed(1)} pts`]);

    const csvContent = "\uFEFF" + rows.map(r => r.map(cell => `"${cell.replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const downloadAnchor = document.createElement("a");
    const dataAtual = new Date().toISOString().slice(0, 10);
    
    downloadAnchor.href = URL.createObjectURL(blob);
    downloadAnchor.setAttribute("download", `planilha-pontuacao-rsc-${dataAtual}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Alvos de Pontuação e Critérios por Nível (Conforme Minuta do Decreto - SEI 23000.026640/2025-10)
const RSC_LEVEL_TARGETS = {
    rsc_fundamental: { name: "RSC-PCCTAE-I", pts: 10, crit: 1, validate: (ativs) => true, msg: "" },
    rsc_medio: { name: "RSC-PCCTAE-II", pts: 15, crit: 2, validate: (ativs) => true, msg: "" },
    rsc_graduacao: { name: "RSC-PCCTAE-III", pts: 25, crit: 2, validate: (ativs) => true, msg: "" },
    rsc_especializacao: { 
        name: "RSC-PCCTAE-IV", 
        pts: 30, 
        crit: 3, 
        validate: (ativs) => (ativs[2] > 0 || ativs[4] > 0 || ativs[5] > 0 || ativs[6] > 0), 
        msg: "exige pontuação em pelo menos um critério dos Eixos II, IV, V ou VI" 
    },
    rsc_mestrado: { 
        name: "RSC-PCCTAE-V", 
        pts: 52, 
        crit: 5, 
        validate: (ativs) => (ativs[4] > 0 || ativs[5] > 0 || ativs[6] > 0), 
        msg: "exige pontuação em pelo menos um critério dos Eixos IV, V ou VI" 
    },
    rsc_doutorado: { 
        name: "RSC-PCCTAE-VI", 
        pts: 75, 
        crit: 7, 
        validate: (ativs) => (ativs[6] > 0), 
        msg: "exige pontuação em pelo menos um critério do Eixo VI (Produção e Difusão)" 
    }
};

// Calcular Pontuação Geral e por Eixo do RSC
function calculateRscPoints() {
    let total = 0;
    let totalCriteria = 0;
    const eixosPontos = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    const eixosAtivosCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    const inputs = document.querySelectorAll("#rsc-anexos-container .rsc-input");
    inputs.forEach(input => {
        const val = Math.max(0, parseInt(input.value) || 0);
        const weight = parseFloat(input.getAttribute("data-pts")) || 0;
        const eixo = parseInt(input.getAttribute("data-eixo")) || 1;
        const pts = val * weight;

        total += pts;
        eixosPontos[eixo] += pts;
        
        if (val > 0) {
            totalCriteria++;
            eixosAtivosCount[eixo]++;
        }

        // Atualizar span inline
        const span = document.getElementById(`val-${input.id}`);
        if (span) {
            span.textContent = `${pts.toFixed(1)} pts`;
        }
    });

    // Atualizar labels dos subtotais na tela
    for (let e = 1; e <= 6; e++) {
        const breakdownEl = document.getElementById(`rsc-breakdown-e${e}`);
        if (breakdownEl) {
            breakdownEl.textContent = `${eixosPontos[e].toFixed(1)} pts`;
        }
    }

    // Atualizar pontos totais
    const totalPointsEl = document.getElementById("rsc-total-points");
    if (totalPointsEl) {
        totalPointsEl.textContent = total.toFixed(1);
    }

    const selectNivel = document.getElementById("rsc-nivel-pleiteado");
    const rscNivelSelected = selectNivel ? selectNivel.value : "rsc_especializacao";

    const target = RSC_LEVEL_TARGETS[rscNivelSelected] || RSC_LEVEL_TARGETS.rsc_especializacao;
    
    const isPointsOk = total >= target.pts;
    const isCritOk = totalCriteria >= target.crit;
    const isObrigatorioOk = target.validate(eixosAtivosCount);
    const isApproved = isPointsOk && isCritOk && isObrigatorioOk;

    // Calcular e atualizar progresso
    const pct = Math.min(100, Math.round((total / target.pts) * 100));
    const progressPctEl = document.getElementById("rsc-progress-pct");
    if (progressPctEl) {
        progressPctEl.textContent = `${pct}%`;
    }
    
    const progressHeaderEl = document.querySelector(".rsc-progress-wrapper .rsc-progress-header span");
    if (progressHeaderEl) {
        progressHeaderEl.textContent = `Progresso da Meta (${target.pts} pontos | Mínimo ${target.crit} critérios)`;
    }

    const fill = document.getElementById("rsc-progress-bar-fill");
    if (fill) {
        fill.style.width = `${pct}%`;
        if (isApproved) {
            fill.style.backgroundColor = "#10b981"; // Verde sucesso
        } else {
            fill.style.backgroundColor = "var(--color-accent)"; // Ciano padrão (bloqueio ou pendente)
        }
    }

    // Status da Meta
    const statusBox = document.getElementById("rsc-status-box");
    const statusIcon = document.getElementById("rsc-status-icon");
    const statusTitle = document.getElementById("rsc-status-title");
    const statusDesc = document.getElementById("rsc-status-desc");

    if (statusBox && statusIcon && statusTitle && statusDesc) {
        if (isApproved) {
            statusBox.className = "rsc-status approved";
            statusIcon.textContent = "✅";
            statusTitle.textContent = "Requisitos Atingidos!";
            statusDesc.textContent = `Parabéns! Seu memorial descritivo atinge a pontuação mínima (${total.toFixed(1)} de ${target.pts} pts) e o total de critérios exigidos (${totalCriteria} de ${target.crit}) para homologação do ${target.name}.`;
        } else {
            statusBox.className = "rsc-status pending";
            statusIcon.textContent = "⚠️";
            
            if (!isPointsOk) {
                statusTitle.textContent = "Pontuação Insuficiente";
                statusDesc.textContent = `Você acumulou ${total.toFixed(1)} pontos. Faltam ${(target.pts - total).toFixed(1)} pontos para atingir o mínimo de ${target.pts} pts exigido para o ${target.name}.`;
            } else if (!isCritOk) {
                statusTitle.textContent = "Critérios Insuficientes";
                statusDesc.textContent = `Você acumulou ${total.toFixed(1)} pontos em apenas ${totalCriteria} critérios. É necessário ter pelo menos ${target.crit} critérios ativos para homologação do ${target.name}.`;
            } else {
                statusTitle.textContent = "Requisito Obrigatório Ausente";
                statusDesc.textContent = `Apesar de atingir os pontos e critérios, seu memorial não atendeu à regra do ${target.name} que ${target.msg}. Adicione atividades nos eixos exigidos para prosseguir.`;
            }
        }
    }

    // Atualizar painel informativo da lei do RSC-PCCTAE
    updateRscLevelInfo();

// Atualizar informações da Lei do RSC-PCCTAE baseadas no nível selecionado
function updateRscLevelInfo() {
    const selectNivel = document.getElementById("rsc-nivel-pleiteado");
    const infoBox = document.getElementById("rsc-nivel-info-box");
    if (!selectNivel || !infoBox) return;

    const nivel = selectNivel.value;
    
    const baseInfo = {
        rsc_fundamental: {
            titulo: "RSC-PCCTAE-I (Equivalência a Ensino Fundamental Completo)",
            percentual: "10%",
            requisito: "Não possuir Ensino Fundamental completo (Art. 12-C, § 2º, I).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso I da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor que não concluiu o ensino fundamental, concedendo o Incentivo à Qualificação de 10% (dez por cento) do valor do vencimento básico."
        },
        rsc_medio: {
            titulo: "RSC-PCCTAE-II (Equivalência a Ensino Médio Completo)",
            percentual: "15%",
            requisito: "Possuir certificado de conclusão de Ensino Fundamental completo (Art. 12-C, § 2º, II).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso II da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor com certificado de conclusão do ensino fundamental, concedendo o Incentivo à Qualificação de 15% (quinze por cento) do valor do vencimento básico."
        },
        rsc_graduacao: {
            titulo: "RSC-PCCTAE-III (Equivalência a Ensino Superior/Graduação Completa)",
            percentual: "25%",
            requisito: "Possuir certificado ou diploma de conclusão do Ensino Médio ou de Técnico de nível médio (Art. 12-C, § 2º, III).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso III da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor com certificado ou diploma de conclusão do ensino médio ou de técnico de nível médio, concedendo o Incentivo à Qualificação de 25% (vinte e cinco por cento) do valor do vencimento básico."
        },
        rsc_especializacao: {
            titulo: "RSC-PCCTAE-IV (Equivalência a Pós-Graduação Lato Sensu/Especialização Completa)",
            percentual: "30%",
            requisito: "Possuir diploma de Graduação no ensino superior (Art. 12-C, § 2º, IV).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso IV da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor com diploma de graduação no ensino superior, concedendo o Incentivo à Qualificação de 30% (trinta por cento) do valor do vencimento básico."
        },
        rsc_mestrado: {
            titulo: "RSC-PCCTAE-V (Equivalência a Mestrado Completo)",
            percentual: "52%",
            requisito: "Possuir certificado de pós-graduação lato sensu/especialização (Art. 12-C, § 2º, V).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso V da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor com certificado de pós-graduação lato sensu, concedendo o Incentivo à Qualificação de 52% (cinquenta e dois por cento) do valor do vencimento básico."
        },
        rsc_doutorado: {
            titulo: "RSC-PCCTAE-VI (Equivalência a Doutorado Completo)",
            percentual: "75%",
            requisito: "Possuir diploma de Mestrado completo (Art. 12-C, § 2º, VI).",
            nota: "Conforme o **Art. 12-C, § 2º, inciso VI da Lei nº 11.091/2005 (incluído pela Lei nº 15.367/2026)**: destinado a servidor com diploma de mestrado, concedendo o Incentivo à Qualificação de 75% (setenta e cinco por cento) do valor do vencimento básico. **Critério Adicional**: É obrigatório pontuar no **Eixo VI (Produção e Difusão Técnica)**, em alinhamento com o **Art. 12-D, inciso VI**."
        }
    };

    const info = baseInfo[nivel];
    if (info) {
        infoBox.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 1.5rem; line-height: 1;">⚖️</span>
                <div>
                    <h4 style="margin: 0 0 6px 0; font-family: var(--font-title); font-size: 0.95rem; font-weight: 700; color: var(--color-primary);">${info.titulo}</h4>
                    <p style="margin: 0 0 8px 0; font-size: 0.85rem; color: var(--color-text);">
                        <strong>Incentivo Financeiro (IQ):</strong> <span class="badge badge-info" style="background: var(--color-primary); color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 600;">${info.percentual}</span> | 
                        <strong>Requisito Acadêmico Base:</strong> ${info.requisito}
                    </p>
                    <p style="margin: 0; font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.45;">
                        ${info.nota.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}
                    </p>
                </div>
            </div>
        `;
    }
}

// Inicialização do Simulador de Diárias
function initDiarias() {
    const inputs = ["diaria-cargo", "diaria-destino", "diaria-inicio", "diaria-fim"];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("change", calculateDiarias);
            el.addEventListener("input", calculateDiarias);
            
            // Força a abertura do calendário nativo ao clicar no input
            if (id === "diaria-inicio" || id === "diaria-fim") {
                el.addEventListener("click", () => {
                    try {
                        el.showPicker();
                    } catch (e) {
                        console.log("showPicker não suportado:", e);
                    }
                });
            }
        }
    });
}

// Verifica se no dia incide desconto de alimentação/transporte (não incide em fins de semana e feriados)
function isDeductionDay(date) {
    const day = date.getDay(); // 0 = Domingo, 6 = Sábado
    if (day === 0 || day === 6) return false;

    // Feriados Nacionais Fixos no Brasil (formato: "MM-DD")
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = String(date.getDate()).padStart(2, '0');
    const key = `${month}-${dayOfMonth}`;

    const feriadosFixos = [
        "01-01", // Confraternização Universal / Ano Novo
        "04-21", // Tiradentes
        "05-01", // Dia do Trabalho
        "09-07", // Independência do Brasil
        "10-12", // Nossa Senhora Aparecida
        "11-02", // Finados
        "11-15", // Proclamação da República
        "11-20", // Dia Nacional de Zumbi e da Consciência Negra
        "12-25"  // Natal
    ];

    if (feriadosFixos.includes(key)) return false;

    return true;
}

// Cálculo das Diárias e Deduções correspondentes
function calculateDiarias() {
    const cargo = document.getElementById("diaria-cargo").value;
    const destino = document.getElementById("diaria-destino").value;
    const inicioVal = document.getElementById("diaria-inicio").value;
    const fimVal = document.getElementById("diaria-fim").value;

    if (!inicioVal || !fimVal) {
        resetDiariasResults();
        return;
    }

    const inicio = new Date(inicioVal + "T00:00:00");
    const fim = new Date(fimVal + "T00:00:00");

    if (fim < inicio) {
        resetDiariasResults();
        return;
    }

    // Cálculo dos dias de afastamento e quantidade de diárias
    const diffTime = Math.abs(fim - inicio);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let diasAfastamento = 1;
    let qtdDiarias = 0.5;

    if (diffDays > 0) {
        diasAfastamento = diffDays + 1;
        qtdDiarias = diffDays + 0.5;
    }

    // Cálculo de dias de desconto efetivos (desconsiderando fins de semana e feriados)
    let diasDescontoEfetivos = 0;
    let currentDate = new Date(inicio.getTime());
    while (currentDate.getTime() <= fim.getTime()) {
        if (isDeductionDay(currentDate)) {
            diasDescontoEfetivos++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Taxa diária da diária
    const taxaDiaria = pcctaeData.diarias[cargo][destino] || 0;
    const valorBruto = qtdDiarias * taxaDiaria;

    // Desconto de Auxílio Alimentação (auxilio / 22 por dia de desconto efetivo)
    const alimentacaoAtiva = document.getElementById("aux-alimentacao").checked;
    const alimentacaoDiaria = alimentacaoAtiva ? (pcctaeData.auxilios.alimentacao / 22) : 0;
    const descontoAlimentacao = alimentacaoDiaria * diasDescontoEfetivos;

    // Desconto de Auxílio Transporte (Calculado de forma autônoma)
    let transporteDiarioLiquido = 0;
    const transporteAtivo = document.getElementById("aux-transporte").checked;
    if (transporteAtivo) {
        const valorDiario = parseFloat(document.getElementById("transporte-valor").value) || 0;
        const dias = parseInt(document.getElementById("transporte-dias").value) || 0;
        const pgd = parseFloat(document.getElementById("transporte-pgd").value) || 0;
        
        const fatorPGD = (100 - pgd) / 100.0;
        const valorMensalBruto = valorDiario * dias * fatorPGD;

        // Obter Vencimento Básico de forma independente
        const nivel = document.getElementById("classe-nivel").value;
        const padrao = parseInt(document.getElementById("classe-padrao").value) || 1;
        const vencimentoBasico = pcctaeData.tabela_salarial[nivel] ? pcctaeData.tabela_salarial[nivel][padrao - 1] : 0;

        const contrapartidaMensal = valorMensalBruto > 0 ? Math.min(valorMensalBruto, vencimentoBasico * 0.06) : 0;
        const valorMensalLiquido = Math.max(0, valorMensalBruto - contrapartidaMensal);
        
        // A dedução diária no SIAPE é equivalente a 1/22 do valor líquido mensal creditado
        transporteDiarioLiquido = valorMensalLiquido / 22;
    }
    const descontoTransporte = transporteDiarioLiquido * diasDescontoEfetivos;

    const totalDesconto = descontoAlimentacao + descontoTransporte;
    const valorLiquido = Math.max(0, valorBruto - totalDesconto);

    // Renderizar nos elementos correspondentes
    document.getElementById("res-diaria-qtd").textContent = qtdDiarias.toLocaleString("pt-BR", { minimumFractionDigits: 1 });
    document.getElementById("res-diaria-dias-desconto").textContent = diasDescontoEfetivos;
    document.getElementById("res-diaria-bruto").textContent = formatCurrency(valorBruto);
    document.getElementById("res-diaria-desc-alimentacao").textContent = "- " + formatCurrency(descontoAlimentacao);
    document.getElementById("res-diaria-desc-transporte").textContent = "- " + formatCurrency(descontoTransporte);
    document.getElementById("res-diaria-liquido").textContent = formatCurrency(valorLiquido);
}

function resetDiariasResults() {
    document.getElementById("res-diaria-qtd").textContent = "0.0";
    document.getElementById("res-diaria-dias-desconto").textContent = "0";
    document.getElementById("res-diaria-bruto").textContent = formatCurrency(0);
    document.getElementById("res-diaria-desc-alimentacao").textContent = "- " + formatCurrency(0);
    document.getElementById("res-diaria-desc-transporte").textContent = "- " + formatCurrency(0);
    document.getElementById("res-diaria-liquido").textContent = formatCurrency(0);
}

// Inicialização das Notícias Dinâmicas
function initNews() {
    fetch("noticias.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar notícias.");
            }
            return response.json();
        })
        .then(data => {
            renderNews(data);
        })
        .catch(err => {
            console.error(err);
            // Renderizar notícias mockadas de backup se falhar
            const fallbackData = [
                {
                    "title": "Promulgação da Lei nº 15.141/2025",
                    "source": "Diário Oficial",
                    "pubDate": "2025-06-02 08:00",
                    "link": "https://www.in.gov.br",
                    "description": "Esta lei consubstancia a reestruturação da carreira do PCCTAE nos moldes do Termo de Acordo nº 11/2024.",
                    "category": "Vigente",
                    "badge_class": "badge-info"
                },
                {
                    "title": "Instituição do RSC-PCCTAE via Lei nº 15.367/2026",
                    "source": "Diário Oficial",
                    "pubDate": "2026-03-30 08:00",
                    "link": "https://www.in.gov.br",
                    "description": "Sancionada em 30 de março de 2026, a lei instituiu o Reconhecimento de Saberes e Competências (RSC).",
                    "category": "Vigente",
                    "badge_class": "badge-info"
                }
            ];
            renderNews(fallbackData);
        });
}

function renderNews(newsList) {
    const muralContainer = document.getElementById("mural-container");
    const newsContainer = document.getElementById("news-container");

    if (muralContainer) {
        muralContainer.innerHTML = "";
        // Pegar no máximo 3 notícias para o mural
        const muralItems = newsList.slice(0, 3);
        muralItems.forEach(item => {
            const dateStr = item.pubDate ? item.pubDate.split(" ")[0].split("-").reverse().join("/") : "";
            const card = document.createElement("div");
            card.className = "mural-card";
            card.innerHTML = `
                <span class="mural-badge ${item.badge_class || 'badge-info'}">${item.category || 'Informativo'}</span>
                <h4>${item.title}</h4>
                <p>${item.description || ''}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 10px;">
                    <span class="mural-date">${dateStr}</span>
                    <a href="${item.link}" target="_blank" style="color: var(--color-accent); font-size: 0.8rem; text-decoration: none;">Leia Mais ↗</a>
                </div>
            `;
            muralContainer.appendChild(card);
        });
    }

    if (newsContainer) {
        newsContainer.innerHTML = "";
        newsList.forEach(item => {
            const dateStr = item.pubDate ? item.pubDate.split(" ")[0].split("-").reverse().join("/") : "";
            const article = document.createElement("article");
            article.className = "news-item";
            article.innerHTML = `
                <div class="news-meta">${item.category || 'Informativo'} | Fonte: ${item.source || 'Institucional'} | Data: ${dateStr}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.description || ''}</p>
                <a href="${item.link}" target="_blank" style="color: var(--color-accent); font-size: 0.9rem; text-decoration: none; display: inline-block; margin-top: 10px;">Acessar Matéria Completa ↗</a>
            `;
            newsContainer.appendChild(article);
        });
    }
}

