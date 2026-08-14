/**
 * app_concursos.js
 * -----------------
 * Motor de Busca Dinâmico de Concursos Públicos TAE & IFES (Estilo PCI Concursos)
 * Desenvolvido por: YLuna85 LABs
 */

let todosConcursos = [];

document.addEventListener('DOMContentLoaded', () => {
    carregarConcursos();
    configurarFiltros();
});

async function carregarConcursos() {
    const grid = document.getElementById('concursos-grid');
    const contador = document.getElementById('concursos-contador');
    
    try {
        const response = await fetch('data/concursos_tae.json');
        if (!response.ok) {
            throw new Error('Falha ao carregar dados de editais.');
        }
        todosConcursos = await response.json();
        renderizarConcursos(todosConcursos);
    } catch (err) {
        console.error(err);
        grid.innerHTML = `
            <div class="concurso-empty">
                <h3>Não foi possível carregar os editais no momento</h3>
                <p>Verifique sua conexão ou tente novamente mais tarde.</p>
            </div>
        `;
    }
}

function renderizarConcursos(concursos) {
    const grid = document.getElementById('concursos-grid');
    const contador = document.getElementById('concursos-contador');
    
    if (contador) {
        contador.innerText = `${concursos.length} editais encontrados`;
    }

    if (!concursos || concursos.length === 0) {
        grid.innerHTML = `
            <div class="concurso-empty">
                <h3>Nenhum edital encontrado com os filtros selecionados</h3>
                <p>Tente limpar os filtros ou buscar por outro termo.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = concursos.map(c => {
        let badgeStatusClass = 'badge-open';
        if (c.status.includes('Publicado')) badgeStatusClass = 'badge-published';
        if (c.status.includes('Previsto')) badgeStatusClass = 'badge-predicted';

        const tagsNiveis = c.niveis.map(n => `<span class="tag-nivel">Nível ${n}</span>`).join(' ');

        return `
            <article class="concurso-card" data-regiao="${c.regiao}" data-uf="${c.uf}">
                <div class="concurso-card-header">
                    <div>
                        <span class="concurso-badge ${badgeStatusClass}">${c.status}</span>
                        <span class="concurso-uf">📍 ${c.uf} — ${c.regiao}</span>
                    </div>
                    <span class="concurso-banca">Banca: ${c.banca}</span>
                </div>

                <h3 class="concurso-titulo">${c.instituicao}</h3>
                <p class="concurso-subtitulo">${c.titulo}</p>

                <div class="concurso-tags-niveis">
                    ${tagsNiveis}
                    <span class="tag-vagas">👥 ${c.vagas} vagas</span>
                </div>

                <div class="concurso-info-row">
                    <strong>💼 Cargos:</strong> ${c.cargos}
                </div>
                <div class="concurso-info-row">
                    <strong>💰 Remuneração Inicial:</strong> <span class="destaque-salario">${c.remuneracao_inicial}</span>
                </div>
                <div class="concurso-info-row">
                    <strong>📅 Inscrições:</strong> ${c.prazo_inscricao}
                </div>
                <div class="concurso-info-row">
                    <strong>📝 Descrição:</strong> ${c.descricao}
                </div>

                <div class="concurso-card-footer">
                    <a href="${c.link_edital}" target="_blank" rel="noopener noreferrer" class="btn-concurso btn-edital">
                        📄 Ver Edital Oficial
                    </a>
                    <a href="${c.link_banca}" target="_blank" rel="noopener noreferrer" class="btn-concurso btn-banca">
                        🌐 Página da Banca
                    </a>
                    <a href="index.html" class="btn-concurso btn-simular" title="Simular salário deste cargo na Calculadora TAE">
                        🧮 Simular Salário
                    </a>
                </div>
            </article>
        `;
    }).join('');
}

function configurarFiltros() {
    const inputBusca = document.getElementById('busca-concurso');
    const selectRegiao = document.getElementById('filtro-regiao');
    const selectNivel = document.getElementById('filtro-nivel');
    const selectStatus = document.getElementById('filtro-status');
    const btnLimpar = document.getElementById('btn-limpar-filtros');

    function aplicarFiltros() {
        const termo = inputBusca ? inputBusca.value.toLowerCase().trim() : '';
        const regiao = selectRegiao ? selectRegiao.value : '';
        const nivel = selectNivel ? selectNivel.value : '';
        const status = selectStatus ? selectStatus.value : '';

        const filtrados = todosConcursos.filter(c => {
            // Busca textual
            const matchTexto = !termo || 
                c.instituicao.toLowerCase().includes(termo) ||
                c.titulo.toLowerCase().includes(termo) ||
                c.cargos.toLowerCase().includes(termo) ||
                c.uf.toLowerCase().includes(termo) ||
                c.banca.toLowerCase().includes(termo);

            // Filtro Regiao
            const matchRegiao = !regiao || c.regiao === regiao;

            // Filtro Nivel
            const matchNivel = !nivel || c.niveis.includes(nivel);

            // Filtro Status
            const matchStatus = !status || c.status === status;

            return matchTexto && matchRegiao && matchNivel && matchStatus;
        });

        renderizarConcursos(filtrados);
    }

    if (inputBusca) inputBusca.addEventListener('input', aplicarFiltros);
    if (selectRegiao) selectRegiao.addEventListener('change', aplicarFiltros);
    if (selectNivel) selectNivel.addEventListener('change', aplicarFiltros);
    if (selectStatus) selectStatus.addEventListener('change', aplicarFiltros);

    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            if (inputBusca) inputBusca.value = '';
            if (selectRegiao) selectRegiao.value = '';
            if (selectNivel) selectNivel.value = '';
            if (selectStatus) selectStatus.value = '';
            renderizarConcursos(todosConcursos);
        });
    }
}
