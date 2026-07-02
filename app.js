// Dados de Carreira e Auxílios do PCCTAE - Vigência: Abril 2026
const pcctaeData = {
    tabela_salarial: {
        A: [1877.54, 1954.52, 2034.66, 2118.08, 2204.92, 2295.32, 2389.43, 2487.40, 2589.38, 2695.54, 2806.06, 2921.11, 3040.87, 3165.55, 3295.34, 3430.45, 3571.09, 3717.51, 3869.93],
        B: [2086.16, 2171.69, 2260.73, 2353.42, 2449.91, 2550.36, 2654.92, 2763.77, 2877.09, 2995.05, 3117.84, 3245.68, 3378.75, 3517.28, 3661.49, 3811.61, 3967.88, 4130.57, 4299.92],
        C: [2607.70, 2714.61, 2825.91, 2941.77, 3062.39, 3187.95, 3318.63, 3454.72, 3596.36, 3743.81, 3897.31, 4057.10, 4223.44, 4396.60, 4576.86, 4764.51, 4959.85, 5163.21, 5374.90],
        D: [3181.39, 3311.83, 3447.61, 3588.97, 3736.11, 3889.29, 4048.75, 4214.75, 4387.56, 4567.45, 4754.71, 4949.66, 5152.59, 5363.85, 5583.77, 5812.70, 6051.02, 6299.11, 6557.38],
        E: [5215.39, 5429.23, 5651.82, 5883.55, 6124.77, 6375.89, 6637.13, 6909.43, 7192.72, 7487.62, 7794.61, 8114.19, 8446.87, 8793.19, 9153.72, 9529.02, 9919.71, 10326.42, 10749.80]
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
    const inputs = ["nivel", "padrao", "select-iq", "select-rsc", "aux-alimentacao", "aux-creche", "creche-dep", "aux-saude", "saude-idade"];
    
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("change", () => {
                // Atualizar opções do RSC dinamicamente quando o IQ muda
                if (id === "select-iq") {
                    updateRscOptions();
                }
                if (id === "aux-creche") {
                    document.getElementById("creche-dep").disabled = !el.checked;
                }
                if (id === "aux-saude") {
                    document.getElementById("saude-idade").disabled = !el.checked;
                    document.querySelector(".dependent-list").style.display = el.checked ? "block" : "none";
                }
                calculateSalary();
            });
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
            { val: "rsc_fundamental", text: "RSC-I: Fundamental Completo (10%)" },
            { val: "rsc_medio", text: "RSC-II: Ensino Médio Completo (15%)" },
            { val: "rsc_tecnico", text: "RSC-III: Ensino Técnico Completo (20%)" },
            { val: "rsc_graduacao", text: "RSC-IV: Graduação Completa (25%)" },
            { val: "rsc_especializacao", text: "RSC-V: Especialização Completa (30%)" },
            { val: "rsc_mestrado", text: "RSC-VI: Mestrado Completo (52%)" },
            { val: "rsc_doutorado", text: "RSC-VII: Doutorado Completo (75%)" }
        ],
        fundamental: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_medio", text: "RSC-II: Ensino Médio Completo (15%)" }
        ],
        medio: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_tecnico", text: "RSC-III: Ensino Técnico Completo (20%)" }
        ],
        tecnico: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_graduacao", text: "RSC-IV: Graduação Completa (25%)" }
        ],
        graduacao: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_especializacao", text: "RSC-V: Especialização Completa (30%)" }
        ],
        especializacao: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_mestrado", text: "RSC-VI: Mestrado Completo (52%)" }
        ],
        mestrado: [
            { val: "none", text: "Sem RSC / Não possui" },
            { val: "rsc_doutorado", text: "RSC-VII: Doutorado Completo (75%)" }
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
    const vencimentoBasico = pcctaeData.tabela_salarial[nivel][padrao] || 0;

    // 2. Qualificação (IQ e RSC separados e integrados)
    const iqNivel = document.getElementById("select-iq").value;
    const rscNivel = document.getElementById("select-rsc").value;
    
    const iqPercentual = pcctaeData.incentivo_qualificacao[iqNivel] || 0;
    const rscPercentual = pcctaeData.rsc_pcctae[rscNivel] || 0;
    
    // O RSC eleva o percentual final ao nível do Reconhecimento de Saberes obtido
    const qualifPercentual = Math.max(iqPercentual, rscPercentual);
    const valorQualif = vencimentoBasico * qualifPercentual;

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

    // 4. Saúde Suplementar (Titular e Dependentes)
    let valorSaude = 0;
    if (document.getElementById("aux-saude").checked) {
        const idadeTitular = parseInt(document.getElementById("saude-idade").value) || 0;
        // O valor considerado de rendimentos para enquadrar na faixa de per capita é o vencimento básico + adicionais permanentes (como o IQ/RSC)
        const rendimentoReferencia = vencimentoBasico + valorQualif;
        
        // Custo do titular
        valorSaude += getSaudePerCapita(rendimentoReferencia, idadeTitular);

        // Custo dos dependentes
        const depAges = document.querySelectorAll(".dep-age");
        depAges.forEach(input => {
            const idadeDep = parseInt(input.value) || 0;
            valorSaude += getSaudePerCapita(rendimentoReferencia, idadeDep);
        });
    }

    // Totais de Proventos Brutos
    const baseTributavel = vencimentoBasico + valorQualif; // Somente vencimento e IQ/RSC sofrem impostos, auxílios são indenizatórios
    const totalAuxilios = valorAlimentacao + valorCreche + valorSaude;
    const brutoTotal = baseTributavel + totalAuxilios;

    // 5. DEDUÇÕES (Cálculos de Previdência PSS e IRRF baseados em 2026)
    // PSS - Alíquotas Progressivas Federais
    const pss = calcularPSS(baseTributavel);

    // IRRF - Imposto de Renda Retido na Fonte
    // Base de cálculo = base tributável - PSS - dependentes (dedução legal R$ 189,59 cada)
    const depAgesCount = document.querySelectorAll(".dep-age").length;
    const crecheDepCount = document.getElementById("aux-creche").checked ? parseInt(document.getElementById("creche-dep").value) || 0 : 0;
    const totalDependentesIRRF = Math.max(depAgesCount, crecheDepCount); // Total de dependentes legais dedutíveis
    const deducaoDependentes = totalDependentesIRRF * 189.59;
    
    const baseIRRF = Math.max(0, baseTributavel - pss - deducaoDependentes);
    const irrf = calcularIRRF(baseIRRF);

    const totalDescontos = pss + irrf;
    const liquidoTotal = brutoTotal - totalDescontos;

    // RENDERIZAR RESULTADOS NA TELA
    document.getElementById("res-vencimento").textContent = formatCurrency(vencimentoBasico);
    document.getElementById("res-qualificacao").textContent = formatCurrency(valorQualif);
    document.getElementById("res-alimentacao").textContent = formatCurrency(valorAlimentacao);
    document.getElementById("res-creche").textContent = formatCurrency(valorCreche);
    document.getElementById("res-saude").textContent = formatCurrency(valorSaude);
    
    document.getElementById("res-bruto").textContent = formatCurrency(brutoTotal);
    document.getElementById("res-pss").textContent = formatCurrency(pss);
    document.getElementById("res-irrf").textContent = formatCurrency(irrf);
    document.getElementById("res-descontos").textContent = formatCurrency(totalDescontos);
    document.getElementById("res-liquido").textContent = formatCurrency(liquidoTotal);

    // Atualizar Gráfico do Contracheque
    updateSalaryChart(vencimentoBasico, valorQualif, totalAuxilios, totalDescontos);
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

// Inicialização da Calculadora de Pontuação RSC
function initRscCalc() {
    const inputs = document.querySelectorAll(".rsc-input");
    inputs.forEach(input => {
        input.addEventListener("input", calculateRscPoints);
        input.addEventListener("change", calculateRscPoints);
    });

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
    const inputs = document.querySelectorAll(".rsc-input");
    inputs.forEach(input => {
        data[input.id] = parseInt(input.value) || 0;
    });

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
                if (el && el.classList.contains("rsc-input")) {
                    el.value = Math.max(0, parseInt(data[id]) || 0);
                    totalCarregados++;
                }
            });
            
            if (totalCarregados > 0) {
                alert(`Sessão carregada com sucesso! ${totalCarregados} parâmetros de atividades foram restaurados.`);
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
        ["Eixo de Comprovacao", "Atividade", "Quantidade Informada", "Pontuacao Obtida"]
    ];

    const eixosMapeados = [
        {
            eixo: "Eixo I: Representações e Comissões",
            items: [
                { id: "pts-e1-cperm", label: "Comissão Permanente / Colegiado / Conselho", peso: 10 },
                { id: "pts-e1-ctemp", label: "Comissão Temporária / Grupo de Trabalho", peso: 5 }
            ]
        },
        {
            eixo: "Eixo II: Projetos Institucionais",
            items: [
                { id: "pts-e2-coord", label: "Coordenador de Projeto de Ensino/Pesquisa/Extensão", peso: 15 },
                { id: "pts-e2-membro", label: "Membro Executor de Projeto", peso: 10 }
            ]
        },
        {
            eixo: "Eixo III: Premiações Ocupacionais",
            items: [
                { id: "pts-e3-premio", label: "Láurea, Menção Honrosa ou Prêmio de Gestão", peso: 10 }
            ]
        },
        {
            eixo: "Eixo IV: Encargos e Responsabilidades",
            items: [
                { id: "pts-e4-complex", label: "Atividade Especializada de Alta Complexidade / Parecer Técnico", peso: 8 }
            ]
        },
        {
            eixo: "Eixo V: Funções de Liderança",
            items: [
                { id: "pts-e5-cd", label: "Cargos de Direção - CD", peso: 15 },
                { id: "pts-e5-fg", label: "Função Gratificada / Chefia de Setor - FG", peso: 10 }
            ]
        },
        {
            eixo: "Eixo VI: Produção e Difusão Técnica",
            items: [
                { id: "pts-e6-manual", label: "Nota Técnica, Manual Operacional ou Cartilha", peso: 8 },
                { id: "pts-e6-live", label: "Suporte Audiovisual / Operação de Transmissão Institucional / Live", peso: 5 }
            ]
        }
    ];

    let totalGeral = 0;

    eixosMapeados.forEach(em => {
        em.items.forEach(item => {
            const input = document.getElementById(item.id);
            const qtd = input ? parseInt(input.value) || 0 : 0;
            if (qtd > 0) {
                const pts = qtd * item.peso;
                totalGeral += pts;
                rows.push([em.eixo, item.label, qtd.toString(), `${pts} pts`]);
            }
        });
    });

    if (rows.length === 1) {
        alert("Não há dados de atividades para exportar. Insira valores no simulador.");
        return;
    }

    rows.push(["", "", "Total Geral:", `${totalGeral} pts`]);

    // Converter para string CSV no formato adequado com separador de ponto e vírgula
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

// Calcular Pontuação Geral e por Eixo do RSC
function calculateRscPoints() {
    const pesos = {
        "pts-e1-cperm": 10,
        "pts-e1-ctemp": 5,
        "pts-e2-coord": 15,
        "pts-e2-membro": 10,
        "pts-e3-premio": 10,
        "pts-e4-complex": 8,
        "pts-e5-cd": 15,
        "pts-e5-fg": 10,
        "pts-e6-manual": 8,
        "pts-e6-live": 5
    };

    const e1 = (parseInt(document.getElementById("pts-e1-cperm").value) || 0) * pesos["pts-e1-cperm"] +
               (parseInt(document.getElementById("pts-e1-ctemp").value) || 0) * pesos["pts-e1-ctemp"];

    const e2 = (parseInt(document.getElementById("pts-e2-coord").value) || 0) * pesos["pts-e2-coord"] +
               (parseInt(document.getElementById("pts-e2-membro").value) || 0) * pesos["pts-e2-membro"];

    const e3 = (parseInt(document.getElementById("pts-e3-premio").value) || 0) * pesos["pts-e3-premio"];

    const e4 = (parseInt(document.getElementById("pts-e4-complex").value) || 0) * pesos["pts-e4-complex"];

    const e5 = (parseInt(document.getElementById("pts-e5-cd").value) || 0) * pesos["pts-e5-cd"] +
               (parseInt(document.getElementById("pts-e5-fg").value) || 0) * pesos["pts-e5-fg"];

    const e6 = (parseInt(document.getElementById("pts-e6-manual").value) || 0) * pesos["pts-e6-manual"] +
               (parseInt(document.getElementById("pts-e6-live").value) || 0) * pesos["pts-e6-live"];

    const total = e1 + e2 + e3 + e4 + e5 + e6;

    // Atualizar labels dos subtotais na tela
    document.getElementById("rsc-breakdown-e1").textContent = `${e1} pts`;
    document.getElementById("rsc-breakdown-e2").textContent = `${e2} pts`;
    document.getElementById("rsc-breakdown-e3").textContent = `${e3} pts`;
    document.getElementById("rsc-breakdown-e4").textContent = `${e4} pts`;
    document.getElementById("rsc-breakdown-e5").textContent = `${e5} pts`;
    document.getElementById("rsc-breakdown-e6").textContent = `${e6} pts`;

    // Atualizar pontos totais
    document.getElementById("rsc-total-points").textContent = total;

    // Calcular e atualizar progresso
    const pct = Math.min(100, Math.round((total / 50) * 100));
    document.getElementById("rsc-progress-pct").textContent = `${pct}%`;
    
    const fill = document.getElementById("rsc-progress-bar-fill");
    if (fill) {
        fill.style.width = `${pct}%`;
        if (total >= 50) {
            fill.style.backgroundColor = "#10b981"; // Verde sucesso
        } else {
            fill.style.backgroundColor = "var(--color-accent)"; // Ciano padrão
        }
    }

    // Status da Meta
    const statusBox = document.getElementById("rsc-status-box");
    const statusIcon = document.getElementById("rsc-status-icon");
    const statusTitle = document.getElementById("rsc-status-title");
    const statusDesc = document.getElementById("rsc-status-desc");

    if (statusBox && statusIcon && statusTitle && statusDesc) {
        if (total >= 50) {
            statusBox.className = "rsc-status approved";
            statusIcon.textContent = "✅";
            statusTitle.textContent = "Pontuação Atingida!";
            statusDesc.textContent = `Parabéns! Você acumulou ${total} pontos (mínimo exigido: 50). Seu memorial descritivo atende aos critérios regulamentares mínimos para homologação do RSC no IF Baiano.`;
        } else {
            statusBox.className = "rsc-status pending";
            statusIcon.textContent = "⚠️";
            statusTitle.textContent = "Pontuação Insuficiente";
            statusDesc.textContent = `Faltam ${50 - total} pontos para atingir a meta mínima. Insira mais portarias de comissões, projetos institucionais ou registros de produção técnica.`;
        }
    }
}
