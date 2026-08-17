/**
 * Motor de Cálculo Previdenciário e Aposentadorias TAE Federal (PCCTAE)
 * Fundamentação: CF/88 (Art. 40), EC nº 103/2019, EC nº 41/2003, EC nº 47/2005, Lei nº 11.091/2005 e Lei nº 12.618/2012
 * Chancela Editorial: YLuna85 LABs
 */

// Teto Histórico do RGPS (2026 / Atualizado)
const TETO_RGPS_ATUAL = 7786.02;

// Data de corte da Reforma da Previdência (EC 103/2019)
const DATA_REFORMA = new Date("2019-11-13T00:00:00");
const DATA_CORTE_INTEGRALIDADE = new Date("2003-12-31T23:59:59");
const DATA_CORTE_FUNPRESP = new Date("2013-02-04T00:00:00");

// Funções Utilitárias de Datas e Cálculos
function parseDateInput(val) {
    if (!val) return null;
    const parts = val.split("-");
    if (parts.length !== 3) return null;
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
}

function formatDateBR(dateObj) {
    if (!dateObj || isNaN(dateObj.getTime())) return "Não elegível / Em cálculo";
    const d = String(dateObj.getDate()).padStart(2, "0");
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const y = dateObj.getFullYear();
    return `${d}/${m}/${y}`;
}

function diffYearsMonthsDays(startDate, endDate) {
    if (!startDate || !endDate || endDate < startDate) {
        return { years: 0, months: 0, days: 0, totalDays: 0 };
    }
    
    let y = endDate.getFullYear() - startDate.getFullYear();
    let m = endDate.getMonth() - startDate.getMonth();
    let d = endDate.getDate() - startDate.getDate();

    if (d < 0) {
        m -= 1;
        const prevMonthDays = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        d += prevMonthDays;
    }
    if (m < 0) {
        y -= 1;
        m += 12;
    }

    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    return { years: y, months: m, days: d, totalDays: totalDays };
}

function addDaysToDate(dateObj, days) {
    const res = new Date(dateObj.getTime());
    res.setDate(res.getDate() + Math.round(days));
    return res;
}

function addYearsToDate(dateObj, years) {
    const res = new Date(dateObj.getTime());
    res.setFullYear(res.getFullYear() + years);
    return res;
}

// Inicialização do Módulo de Aposentadoria
function initAposentadoria() {
    const btnCalcular = document.getElementById("btn-calcular-aposentadoria");
    if (btnCalcular) {
        btnCalcular.addEventListener("click", calculateAposentadoria);
    }
    
    // Atualizar padrões quando mudar o nível
    const nivelSelect = document.getElementById("apo-nivel");
    if (nivelSelect) {
        nivelSelect.addEventListener("change", updateApoPadroes);
        updateApoPadroes();
    }
}

function updateApoPadroes() {
    const nivelSelect = document.getElementById("apo-nivel");
    const padraoSelect = document.getElementById("apo-padrao");
    if (!nivelSelect || !padraoSelect) return;
    
    const nivel = nivelSelect.value;
    padraoSelect.innerHTML = "";
    
    // Níveis A a E possuem 19 padrões no PCCTAE 2026
    const totalPadroes = (pcctaeData && pcctaeData.tabela_salarial && pcctaeData.tabela_salarial[nivel]) 
        ? pcctaeData.tabela_salarial[nivel].length 
        : 19;
        
    for (let i = 1; i <= totalPadroes; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `Padrão ${String(i).padStart(2, "0")}`;
        if (i === 1) opt.selected = true;
        padraoSelect.appendChild(opt);
    }
}

// Execução Principal do Cálculo Previdenciário
function calculateAposentadoria() {
    const dataNascimento = parseDateInput(document.getElementById("apo-nascimento").value);
    const genero = document.getElementById("apo-genero").value; // "M" ou "F"
    const dataIngressoPublico = parseDateInput(document.getElementById("apo-ingresso-publico").value);
    const dataIngressoCargo = parseDateInput(document.getElementById("apo-ingresso-cargo").value);
    
    const anosAverbados = parseFloat(document.getElementById("apo-tempo-averbado-anos").value) || 0;
    const mesesAverbados = parseFloat(document.getElementById("apo-tempo-averbado-meses").value) || 0;
    const diasAverbados = parseFloat(document.getElementById("apo-tempo-averbado-dias").value) || 0;
    
    const nivel = document.getElementById("apo-nivel").value;
    const padrao = parseInt(document.getElementById("apo-padrao").value, 10) || 1;
    const iqPercent = parseFloat(document.getElementById("apo-iq").value) || 0;
    const rscPercent = parseFloat(document.getElementById("apo-rsc").value) || 0;
    
    if (!dataNascimento || !dataIngressoPublico || !dataIngressoCargo) {
        alert("Por favor, preencha a Data de Nascimento, Data de Ingresso no Serviço Público e Data de Ingresso no Cargo.");
        return;
    }
    
    const hoje = new Date();
    
    // Cálculo do tempo averbado anterior em dias
    const totalDiasAverbados = (anosAverbados * 365.25) + (mesesAverbados * 30.4375) + diasAverbados;
    
    // Vencimento Básico e Vantagens da Carreira
    const vbIndex = Math.min(Math.max(padrao - 1, 0), 18);
    const vbBase = (pcctaeData && pcctaeData.tabela_salarial && pcctaeData.tabela_salarial[nivel])
        ? pcctaeData.tabela_salarial[nivel][vbIndex]
        : 5215.39;
        
    // IQ e RSC (RSC é complementar ou independente conforme opção)
    const valorIQ = vbBase * iqPercent;
    const valorRSC = vbBase * rscPercent;
    const remuneracaoAtividade = vbBase + valorIQ + valorRSC;
    
    // Regime de Ingresso
    const isPre2003 = dataIngressoPublico <= DATA_CORTE_INTEGRALIDADE;
    const isPre2013 = dataIngressoPublico < DATA_CORTE_FUNPRESP;
    const isPos2013 = !isPre2013;
    
    // 1. Idade Atual e Tempo de Contribuição Atual
    const idadeAtualObj = diffYearsMonthsDays(dataNascimento, hoje);
    const tempoServicoPublicoAtual = diffYearsMonthsDays(dataIngressoPublico, hoje);
    const tempoCargoAtual = diffYearsMonthsDays(dataIngressoCargo, hoje);
    
    // Tempo total de contribuição em dias até hoje
    const diasServicoFederal = Math.floor((hoje - dataIngressoPublico) / (1000 * 60 * 60 * 24));
    const diasTotaisContribuicaoAtual = diasServicoFederal + totalDiasAverbados;
    const anosContribuicaoAtual = diasTotaisContribuicaoAtual / 365.25;
    
    // Tempo cumprido até a data da Reforma (13/11/2019)
    let diasAteReforma = 0;
    if (dataIngressoPublico < DATA_REFORMA) {
        diasAteReforma = Math.floor((DATA_REFORMA - dataIngressoPublico) / (1000 * 60 * 60 * 24)) + totalDiasAverbados;
    } else {
        diasAteReforma = totalDiasAverbados;
    }
    const anosAteReforma = diasAteReforma / 365.25;
    
    // Requisitos Básicos por Gênero
    const tempoMinimoContribuicao = (genero === "M") ? 35 : 30;
    const idadeMinimaGeral = (genero === "M") ? 65 : 62;
    const idadeMinimaPedagio = (genero === "M") ? 60 : 57;
    
    // =========================================================================
    // REGRA 1: PEDÁGIO DE 100% (Art. 20 da EC nº 103/2019)
    // =========================================================================
    let dataPedagio100 = null;
    let proventoPedagio = 0;
    let tipoProventoPedagio = "";
    
    // Saldo que faltava em 13/11/2019
    const saldoAnosReforma = Math.max(0, tempoMinimoContribuicao - anosAteReforma);
    const pedagioAnos = saldoAnosReforma; // 100% do tempo que faltava
    const tempoTotalExigidoPedagio = tempoMinimoContribuicao + pedagioAnos;
    
    // Data em que atinge o tempo total exigido (Tempo básico + Pedágio)
    const diasFaltantesPedagio = Math.max(0, (tempoTotalExigidoPedagio * 365.25) - diasTotaisContribuicaoAtual);
    const dataTempoPedagio = addDaysToDate(hoje, diasFaltantesPedagio);
    
    // Data em que atinge a idade mínima do pedágio (60H / 57M)
    const dataIdadePedagio = addYearsToDate(dataNascimento, idadeMinimaPedagio);
    
    // Data em que cumpre 20 anos de serviço público e 5 anos no cargo
    const data20AnosPub = addYearsToDate(dataIngressoPublico, 20);
    const data5AnosCargo = addYearsToDate(dataIngressoCargo, 5);
    
    // Data final do Pedágio 100% é a maior entre todas
    dataPedagio100 = new Date(Math.max(
        dataTempoPedagio.getTime(),
        dataIdadePedagio.getTime(),
        data20AnosPub.getTime(),
        data5AnosCargo.getTime()
    ));
    
    if (isPre2003) {
        proventoPedagio = remuneracaoAtividade;
        tipoProventoPedagio = "Integralidade e Paridade Plena (100% da última remuneração)";
    } else if (isPre2013) {
        proventoPedagio = remuneracaoAtividade * 0.95; // Média estimada
        tipoProventoPedagio = "100% da Média Aritmética Simples (Sem Teto do INSS)";
    } else {
        proventoPedagio = Math.min(remuneracaoAtividade, TETO_RGPS_ATUAL);
        tipoProventoPedagio = "100% da Média Aritmética (Limitada ao Teto do RGPS) + FUNPRESP";
    }
    
    // =========================================================================
    // REGRA 2: SISTEMA DE PONTOS (Art. 4º da EC nº 103/2019)
    // =========================================================================
    let dataPontos = null;
    let proventoPontos = 0;
    let tipoProventoPontos = "";
    
    // Simulação ano a ano até atingir a pontuação exigida
    let checkDate = new Date(hoje.getTime());
    let pontosAtingidos = false;
    
    for (let extraYears = 0; extraYears <= 45; extraYears++) {
        const testDate = addYearsToDate(checkDate, extraYears);
        const testYear = testDate.getFullYear();
        
        // Pontuação exigida no ano do teste
        let pontosExigidos = 0;
        let idadeMinimaPontos = 0;
        
        if (genero === "M") {
            pontosExigidos = Math.min(105, 96 + Math.max(0, testYear - 2019));
            idadeMinimaPontos = Math.min(65, 61 + (Math.max(0, testYear - 2019) * 0.5));
        } else {
            pontosExigidos = Math.min(100, 86 + Math.max(0, testYear - 2019));
            idadeMinimaPontos = Math.min(62, 56 + (Math.max(0, testYear - 2019) * 0.5));
        }
        
        const testIdade = (testDate - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25);
        const testContrib = (diasTotaisContribuicaoAtual + (extraYears * 365.25)) / 365.25;
        const testPontos = testIdade + testContrib;
        const testPub = (testDate - dataIngressoPublico) / (1000 * 60 * 60 * 24 * 365.25);
        const testCargo = (testDate - dataIngressoCargo) / (1000 * 60 * 60 * 24 * 365.25);
        
        if (testContrib >= tempoMinimoContribuicao && 
            testIdade >= idadeMinimaPontos && 
            testPontos >= pontosExigidos && 
            testPub >= 20 && 
            testCargo >= 5) {
            dataPontos = testDate;
            pontosAtingidos = true;
            break;
        }
    }
    
    if (!pontosAtingidos) {
        dataPontos = addYearsToDate(dataNascimento, idadeMinimaGeral);
    }
    
    // Cálculo do Provento na Regra de Pontos
    if (isPre2003) {
        const idadeNaDataPontos = (dataPontos - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25);
        if (idadeNaDataPontos >= idadeMinimaGeral) {
            proventoPontos = remuneracaoAtividade;
            tipoProventoPontos = "Integralidade e Paridade Plena (Atingiu 65H / 62M)";
        } else {
            const anosExtra = Math.max(0, (tempoMinimoContribuicao - 20));
            const aliq = Math.min(1.0, 0.60 + (anosExtra * 0.02));
            proventoPontos = remuneracaoAtividade * aliq;
            tipoProventoPontos = `Cálculo Proporcional (${(aliq * 100).toFixed(0)}% da Média Salarial)`;
        }
    } else {
        const contribNaData = (diasTotaisContribuicaoAtual + Math.max(0, dataPontos - hoje) / (1000 * 60 * 60 * 24)) / 365.25;
        const anosExcedentes = Math.max(0, contribNaData - 20);
        const aliq = Math.min(1.0, 0.60 + (anosExcedentes * 0.02));
        const baseCalculo = isPos2013 ? Math.min(remuneracaoAtividade, TETO_RGPS_ATUAL) : remuneracaoAtividade;
        proventoPontos = baseCalculo * aliq;
        tipoProventoPontos = `Cálculo Proporcional da Média (${(aliq * 100).toFixed(0)}% da Média)`;
    }
    
    // =========================================================================
    // REGRA 3: REGRA GERAL PERMANENTE (Art. 10 da EC nº 103/2019)
    // =========================================================================
    const dataIdadeGeral = addYearsToDate(dataNascimento, idadeMinimaGeral);
    const data25AnosContrib = addDaysToDate(hoje, Math.max(0, (25 * 365.25) - diasTotaisContribuicaoAtual));
    const data10AnosPub = addYearsToDate(dataIngressoPublico, 10);
    
    const dataGeralPermanente = new Date(Math.max(
        dataIdadeGeral.getTime(),
        data25AnosContrib.getTime(),
        data10AnosPub.getTime(),
        data5AnosCargo.getTime()
    ));
    
    const contribGeral = (diasTotaisContribuicaoAtual + Math.max(0, dataGeralPermanente - hoje) / (1000 * 60 * 60 * 24)) / 365.25;
    const aliqGeral = Math.min(1.0, 0.60 + (Math.max(0, contribGeral - 20) * 0.02));
    const baseGeral = isPos2013 ? Math.min(remuneracaoAtividade, TETO_RGPS_ATUAL) : remuneracaoAtividade;
    const proventoGeral = baseGeral * aliqGeral;
    
    // =========================================================================
    // REGRA 4: APOSENTADORIA COMPULSÓRIA AOS 75 ANOS
    // =========================================================================
    const dataCompulsoria75 = addYearsToDate(dataNascimento, 75);
    const contribCompulsoria = (diasTotaisContribuicaoAtual + Math.max(0, dataCompulsoria75 - hoje) / (1000 * 60 * 60 * 24)) / 365.25;
    const fracCompulsoria = Math.min(1.0, contribCompulsoria / tempoMinimoContribuicao);
    const proventoCompulsorio = (isPos2013 ? Math.min(remuneracaoAtividade, TETO_RGPS_ATUAL) : remuneracaoAtividade) * fracCompulsoria;
    
    // =========================================================================
    // ABONO DE PERMANÊNCIA (Art. 40, § 19 da CF/88)
    // =========================================================================
    // Primeira data em que o servidor cumpriu os requisitos para qualquer regra voluntária
    const primeiraDataAposentadoria = new Date(Math.min(dataPedagio100.getTime(), dataPontos.getTime(), dataGeralPermanente.getTime()));
    const jaTemDireitoAbono = hoje >= primeiraDataAposentadoria;
    
    // Cálculo do valor do PSS mensal devolvido
    let aliqPSSMedia = 0.14; // Alíquota de referência federal
    if (remuneracaoAtividade <= 3000) aliqPSSMedia = 0.11;
    else if (remuneracaoAtividade <= 6000) aliqPSSMedia = 0.125;
    else if (remuneracaoAtividade <= 12000) aliqPSSMedia = 0.14;
    else aliqPSSMedia = 0.145;
    
    const valorMensalAbono = isPos2013 
        ? Math.min(remuneracaoAtividade, TETO_RGPS_ATUAL) * aliqPSSMedia 
        : remuneracaoAtividade * aliqPSSMedia;
        
    // =========================================================================
    // RENDERIZAÇÃO DOS RESULTADOS NA TELA
    // =========================================================================
    renderAposentadoriaResults({
        hoje,
        dataNascimento,
        genero,
        idadeAtualObj,
        tempoServicoPublicoAtual,
        tempoCargoAtual,
        anosContribuicaoAtual,
        isPre2003,
        isPre2013,
        isPos2013,
        remuneracaoAtividade,
        vbBase,
        valorIQ,
        valorRSC,
        dataPedagio100,
        proventoPedagio,
        tipoProventoPedagio,
        dataPontos,
        proventoPontos,
        tipoProventoPontos,
        dataGeralPermanente,
        proventoGeral,
        aliqGeral,
        dataCompulsoria75,
        proventoCompulsorio,
        primeiraDataAposentadoria,
        jaTemDireitoAbono,
        valorMensalAbono
    });
}

function renderAposentadoriaResults(data) {
    const resultsContainer = document.getElementById("apo-results-container");
    if (!resultsContainer) return;
    
    resultsContainer.style.display = "block";
    resultsContainer.scrollIntoView({ behavior: "smooth" });
    
    // Identificar a melhor regra
    let melhorRegra = "Pedágio de 100% (Art. 20 da EC 103/2019)";
    let motivoMelhorRegra = "Garante o maior valor financeiro de provento.";
    
    if (data.isPre2003) {
        melhorRegra = "Pedágio de 100% (Art. 20)";
        motivoMelhorRegra = "Assegura Integralidade (100% da última remuneração) e Paridade plena com reajustes dos servidores da ativa.";
    } else if (data.dataPedagio100 <= data.dataPontos) {
        melhorRegra = "Pedágio de 100% (Art. 20)";
        motivoMelhorRegra = "Permite a aposentadoria em data mais próxima com 100% da média salarial.";
    } else {
        melhorRegra = "Sistema de Pontos (Art. 4º)";
        motivoMelhorRegra = "Elegibilidade atingida mais rapidamente pela progressão contínua da idade e tempo de contribuição.";
    }
    
    // Status do Abono
    let abonoBadgeHtml = "";
    if (data.jaTemDireitoAbono) {
        abonoBadgeHtml = `
        <div class="apo-alert apo-alert-success">
            <strong>Direito Adquirido ao Abono de Permanência!</strong><br>
            Você já preencheu todos os requisitos para se aposentar e tem direito a receber mensalmente a devolução integral da contribuição previdenciária (cerca de <strong>R$ ${data.valorMensalAbono.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong> por mês) se continuar em atividade.
        </div>`;
    } else {
        abonoBadgeHtml = `
        <div class="apo-alert apo-alert-info">
            <strong>Previsão para Abono de Permanência:</strong> A partir de <strong>${formatDateBR(data.primeiraDataAposentadoria)}</strong>, você poderá solicitar a isenção/devolução do PSS enquanto permanecer no cargo ativo.
        </div>`;
    }

    resultsContainer.innerHTML = `
    <div class="apo-dashboard-card">
        <div class="apo-dashboard-header">
            <h3>Diagnóstico e Simulação Previdenciária do Servidor</h3>
            <span class="apo-badge-regime">${data.isPre2003 ? "Ingresso Pré-2003 (Direito a Integralidade/Paridade)" : (data.isPre2013 ? "Ingresso 2004 a 2013 (Média sem Teto)" : "Ingresso Pós-2013 (Teto RGPS + Funpresp)")}</span>
        </div>
        
        <div class="apo-summary-grid">
            <div class="apo-summary-item">
                <span class="label">Idade Atual</span>
                <span class="val">${data.idadeAtualObj.years} anos, ${data.idadeAtualObj.months} m, ${data.idadeAtualObj.days} d</span>
            </div>
            <div class="apo-summary-item">
                <span class="label">Tempo Contribuição Total</span>
                <span class="val">${data.anosContribuicaoAtual.toFixed(1)} anos (${Math.round(data.anosContribuicaoAtual * 365.25)} dias)</span>
            </div>
            <div class="apo-summary-item">
                <span class="label">Serviço Público Federal</span>
                <span class="val">${data.tempoServicoPublicoAtual.years} anos, ${data.tempoServicoPublicoAtual.months} m</span>
            </div>
            <div class="apo-summary-item">
                <span class="label">Remuneração Ativa Estimada</span>
                <span class="val highlight">R$ ${data.remuneracaoAtividade.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
        </div>

        ${abonoBadgeHtml}

        <div class="apo-recommendation-box">
            <h4>Regra Mais Vantajosa Recomendada: <span style="color: var(--color-primary);">${melhorRegra}</span></h4>
            <p>${motivoMelhorRegra}</p>
        </div>

        <h4 class="apo-table-title">Comparativo Detalhado das Regras de Aposentadoria</h4>
        <div class="apo-table-responsive">
            <table class="apo-comparison-table">
                <thead>
                    <tr>
                        <th>Modalidade / Regra</th>
                        <th>Fundamento Legal</th>
                        <th>Data Estimada</th>
                        <th>Tipo de Provento</th>
                        <th>Provento Estimado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="highlight-row">
                        <td><strong>Regra 1: Pedágio de 100%</strong></td>
                        <td>Art. 20 da EC nº 103/2019</td>
                        <td><strong>${formatDateBR(data.dataPedagio100)}</strong></td>
                        <td>${data.tipoProventoPedagio}</td>
                        <td class="provento-val">R$ ${data.proventoPedagio.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                    <tr>
                        <td><strong>Regra 2: Sistema de Pontos</strong></td>
                        <td>Art. 4º da EC nº 103/2019</td>
                        <td><strong>${formatDateBR(data.dataPontos)}</strong></td>
                        <td>${data.tipoProventoPontos}</td>
                        <td class="provento-val">R$ ${data.proventoPontos.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                    <tr>
                        <td><strong>Regra 3: Geral Permanente</strong></td>
                        <td>Art. 10 da EC nº 103/2019</td>
                        <td><strong>${formatDateBR(data.dataGeralPermanente)}</strong></td>
                        <td>Proporcional (${(data.aliqGeral * 100).toFixed(0)}% da média)</td>
                        <td class="provento-val">R$ ${data.proventoGeral.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                    <tr>
                        <td><strong>Aposentadoria Compulsória</strong></td>
                        <td>Art. 40, § 1º, II da CF/88</td>
                        <td><strong>${formatDateBR(data.dataCompulsoria75)}</strong></td>
                        <td>Proporcional aos 75 anos de idade</td>
                        <td class="provento-val">R$ ${data.proventoCompulsorio.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="apo-financial-details">
            <h4>Detalhamento Financeiro do Provento no PCCTAE</h4>
            <ul class="apo-details-list">
                <li><strong>Vencimento Básico do Cargo:</strong> R$ ${data.vbBase.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} (Integralmente incorporado).</li>
                <li><strong>Incentivo à Qualificação (IQ):</strong> R$ ${data.valorIQ.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} (Integralmente incorporado aos proventos).</li>
                <li><strong>Reconhecimento de Saberes e Competências (RSC):</strong> R$ ${data.valorRSC.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} (Incorporado conforme regras da carreira).</li>
                <li><span class="warning-text">Parcelas transitórias que cessam na inatividade:</span> Auxílio Alimentação (R$ 1.192,00), Auxílio Transporte e Adicionais de Insalubridade/Periculosidade não acompanham a aposentadoria.</li>
            </ul>
        </div>

        <div class="apo-timeline-box">
            <h4>Linha do Tempo Projetada da Carreira e Aposentadoria</h4>
            <div class="apo-timeline">
                <div class="timeline-step passed">
                    <span class="timeline-dot"></span>
                    <span class="timeline-label">Ingresso Federal</span>
                    <span class="timeline-date">${formatDateBR(data.dataIngressoPublico)}</span>
                </div>
                <div class="timeline-step passed">
                    <span class="timeline-dot"></span>
                    <span class="timeline-label">Reforma EC 103</span>
                    <span class="timeline-date">13/11/2019</span>
                </div>
                <div class="timeline-step ${data.jaTemDireitoAbono ? 'passed' : 'future'}">
                    <span class="timeline-dot"></span>
                    <span class="timeline-label">Abono Permanência</span>
                    <span class="timeline-date">${formatDateBR(data.primeiraDataAposentadoria)}</span>
                </div>
                <div class="timeline-step future highlight">
                    <span class="timeline-dot"></span>
                    <span class="timeline-label">Pedágio 100%</span>
                    <span class="timeline-date">${formatDateBR(data.dataPedagio100)}</span>
                </div>
                <div class="timeline-step future">
                    <span class="timeline-dot"></span>
                    <span class="timeline-label">Compulsória (75 anos)</span>
                    <span class="timeline-date">${formatDateBR(data.dataCompulsoria75)}</span>
                </div>
            </div>
        </div>

        <div class="apo-disclaimer-box">
            <strong>Aviso Legal Informativo:</strong> Esta ferramenta realiza uma estimativa com base nas regras constitucionais vigentes (EC 103/2019 e Lei nº 11.091/2005). A concessão oficial de aposentadoria e fixação de proventos depende de análise processual e homologação pelo órgão de gestão de pessoas (DGP/PROGEP) da sua Instituição Federal de Ensino e pelo Tribunal de Contas da União (TCU).
        </div>
    </div>
    `;
}

// Auto-inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initAposentadoria();
});
