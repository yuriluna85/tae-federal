// Recursos compartilhados das páginas estáticas: acessibilidade (alto contraste e tamanho de fonte) e aviso de cookies.
// As páginas que carregam app.js já têm esses recursos e não devem incluir este arquivo.
(function () {
  "use strict";

  const raiz = new URL(".", document.currentScript.src).href;
  const CHAVE_COOKIES = "cookie-consent-accepted";
  const PASSO = 1;
  const MIN = 14;
  const MAX = 22;
  let fonte = 16;

  function lerArmazenamento(chave) {
    try {
      return window.localStorage.getItem(chave);
    } catch (erro) {
      return null;
    }
  }

  function gravarArmazenamento(chave, valor) {
    try {
      window.localStorage.setItem(chave, valor);
    } catch (erro) {
      console.warn("Armazenamento local indisponível:", erro);
    }
  }

  function iniciarAcessibilidade() {
    const contraste = document.getElementById("btn-contrast");
    const mais = document.getElementById("btn-font-plus");
    const menos = document.getElementById("btn-font-minus");

    if (contraste) {
      contraste.addEventListener("click", function () {
        const ativo = document.body.classList.toggle("high-contrast");
        contraste.setAttribute("aria-pressed", String(ativo));
      });
    }
    if (mais) {
      mais.addEventListener("click", function () {
        fonte = Math.min(MAX, fonte + PASSO);
        document.documentElement.style.setProperty("--base-font-size", fonte + "px");
      });
    }
    if (menos) {
      menos.addEventListener("click", function () {
        fonte = Math.max(MIN, fonte - PASSO);
        document.documentElement.style.setProperty("--base-font-size", fonte + "px");
      });
    }
  }

  function iniciarCookies() {
    if (lerArmazenamento(CHAVE_COOKIES) === "true" || document.getElementById("cookie-consent-banner")) {
      return;
    }
    const aviso = document.createElement("div");
    aviso.id = "cookie-consent-banner";
    aviso.className = "cookie-banner";
    aviso.setAttribute("role", "dialog");
    aviso.setAttribute("aria-live", "polite");
    aviso.setAttribute("aria-label", "Aviso de cookies");
    aviso.innerHTML =
      '<div class="cookie-banner-text">Este site usa cookies para estatísticas de navegação e para exibir anúncios do Google AdSense. ' +
      "Nenhum dado digitado nas calculadoras é enviado a servidores: o cálculo acontece no seu navegador. " +
      'Veja a <a href="' + raiz + 'privacidade.html">Política de Privacidade</a> e os <a href="' + raiz + 'termos.html">Termos de Uso</a>.</div>' +
      '<div class="cookie-banner-actions"><button type="button" id="btn-accept-cookies" class="cookie-btn">Entendi e aceito</button></div>';
    document.body.appendChild(aviso);
    window.setTimeout(function () { aviso.classList.add("show"); }, 400);
    document.getElementById("btn-accept-cookies").addEventListener("click", function () {
      gravarArmazenamento(CHAVE_COOKIES, "true");
      aviso.classList.remove("show");
      window.setTimeout(function () { aviso.remove(); }, 400);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    iniciarAcessibilidade();
    iniciarCookies();
  });
})();
