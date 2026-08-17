/**
 * app_concursos.js
 * -----------------
 * Motor de Busca Dinamico de Concursos Publicos TAE & IFES (Estilo PCI Concursos)
 * Alimentado por mineracao real via Scrapling (G:\Meu Drive\APP\_Recursos_e_Skills_Zips\AGy\Scrapling-main)
 * Desenvolvido por: YLuna85 LABs & IF Baiano APPs
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
 <h3>Nao foi possivel carregar os editais no momento</h3>
 <p>Verifique sua conexao ou tente novamente mais tarde.</p>
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
 if (c.status && c.status.includes('Publicado')) badgeStatusClass = 'badge-published';
 if (c.status && c.status.includes('Previsto')) badgeStatusClass = 'badge-predicted';

 const tagsNiveis = (c.niveis || ['D', 'E']).map(n => `<span class="tag-nivel">Nivel ${n}</span>`).join(' ');
 const vagasTexto = c.vagas_descricao || `${c.vagas || 1} vagas`;
 const dataColetaStr = c.data_coleta ? `<span style="font-size:0.75rem; color:var(--color-text-muted); margin-left:8px;">Atualizado: ${c.data_coleta}</span>` : '';

 return `
 <article class="concurso-card" data-regiao="${c.regiao || 'Nacional'}" data-uf="${c.uf || 'BR'}">
 <div class="concurso-card-header">
 <div>
 <span class="concurso-badge ${badgeStatusClass}">${c.status || 'Inscricoes Abertas'}</span>
 <span class="concurso-uf">Local: ${c.uf || 'BR'} — ${c.regiao || 'Nacional'}</span>
 </div>
 <span class="concurso-banca">${c.fonte_coleta || 'Fonte Oficial'}</span>
 </div>

 <h3 class="concurso-titulo">${c.instituicao || 'Instituicao Federal'}</h3>
 <p class="concurso-subtitulo">${c.titulo || 'Processo Seletivo / Concurso'}</p>

 <div class="concurso-tags-niveis">
 ${tagsNiveis}
 <span class="tag-vagas">${vagasTexto}</span>
 </div>

 <div class="concurso-info-row">
 <strong>Cargos / Detalhes:</strong> ${c.cargos || 'Cargos do PCCTAE / IFES'}
 </div>
 <div class="concurso-info-row">
 <strong>Remuneracao Inicial:</strong> <span class="destaque-salario">${c.remuneracao_inicial || 'Conforme Edital'}</span>
 </div>
 <div class="concurso-info-row">
 <strong>Periodo de Inscricao:</strong> ${c.prazo_inscricao || 'Consulte o edital'}
 </div>

 <div class="concurso-card-footer">
 <a href="${c.link_edital}" target="_blank" rel="noopener noreferrer" class="btn-concurso btn-edital" title="Acessar pagina oficial do edital">
 Acessar Edital Oficial
 </a>
 <a href="index.html" class="btn-concurso btn-simular" title="Simular salario na Calculadora TAE">
 Simular Salario
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
 const matchTexto = !termo || 
 (c.instituicao && c.instituicao.toLowerCase().includes(termo)) ||
 (c.titulo && c.titulo.toLowerCase().includes(termo)) ||
 (c.cargos && c.cargos.toLowerCase().includes(termo)) ||
 (c.uf && c.uf.toLowerCase().includes(termo)) ||
 (c.banca && c.banca.toLowerCase().includes(termo));

 const matchRegiao = !regiao || c.regiao === regiao;
 const matchNivel = !nivel || (c.niveis && c.niveis.includes(nivel));
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
