/*
  app.js
  ------------------------------------------------------
  Responsável por:
  1) Abrir/fechar o menu no telemóvel
  2) Desenhar os cartões de produto (reutilizado noutras páginas)
  3) Desenhar os botões de categoria (a partir de produtos.js)
  4) Desenhar os produtos em destaque na página inicial
  5) Ano no rodapé
  6) Ligar o menu de categorias e os links de contacto

  Este ficheiro assume que produtos.js já foi carregado antes
  (ver a ordem dos <script> no fim do index.html).
*/

/* ---------- 1) Menu mobile ----------
   Nota: as variáveis NÃO se podem chamar "botaoMenu" nem "navPrincipal"
   (iguais aos id= do HTML) — o browser cria automaticamente
   "window.botaoMenu", e declarar "const botaoMenu" por cima disso
   provoca um SyntaxError que trava TODO o ficheiro. Por isso o prefixo "el". */
const elBotaoMenu = document.getElementById("botaoMenu");
const elNavPrincipal = document.getElementById("navPrincipal");

if (elBotaoMenu && elNavPrincipal) {
  elBotaoMenu.addEventListener("click", () => {
    elNavPrincipal.classList.toggle("aberto");
  });
}

/* ---------- 2) Criar o HTML de um cartão de produto ---------- */
function criarCartaoProduto(produto) {
  const categoria = CATEGORIAS.find((c) => c.id === produto.categoria);

  return `
    <article class="cartao-produto">
      <div class="imagem-produto">
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
      </div>
      <div class="conteudo">
        <span class="categoria-etiqueta">${categoria ? categoria.nome : ""}</span>
        <h3>${produto.nome}</h3>
        <p class="descricao">${produto.descricaoCurta}</p>
        <button class="ver-mais" data-id="${produto.id}">Saber mais</button>
      </div>
    </article>
  `;
}

/* ---------- 3) Desenhar categorias ---------- */
function desenharCategorias() {
  const lista = document.getElementById("listaCategorias");
  if (!lista) return;

  const botaoTodos = `<button class="categoria-botao ativa" data-categoria="todos">Todos</button>`;

  const botoes = CATEGORIAS.map(
    (cat) => `<button class="categoria-botao" data-categoria="${cat.id}">${cat.nome}</button>`
  ).join("");

  lista.innerHTML = botaoTodos + botoes;

  Array.from(lista.querySelectorAll(".categoria-botao")).forEach((btn) => {
    btn.addEventListener("click", () => {
      Array.from(lista.querySelectorAll(".categoria-botao")).forEach((b) => b.classList.remove("ativa"));
      btn.classList.add("ativa");
      // Nesta página inicial, os botões de categoria servem como pré-visualização;
      // o filtro completo fica na página pages/produtos.html (próxima etapa).
      window.location.href = `pages/produtos.html?categoria=${btn.dataset.categoria}`;
    });
  });
}

/* ---------- 4) Desenhar produtos em destaque ---------- */
function desenharDestaques() {
  const grelha = document.getElementById("grelhaDestaque");
  if (!grelha) return;

  const destaques = PRODUTOS.filter((p) => p.destaque);
  grelha.innerHTML = destaques.map(criarCartaoProduto).join("");
}

/* ---------- 5) Ano no rodapé ---------- */
function definirAno() {
  const span = document.getElementById("anoAtual");
  if (span) span.textContent = new Date().getFullYear();
}

/* ---------- 6) Ligar Instagram/WhatsApp no rodapé (usa js/config.js) ---------- */
function definirLinksContacto() {
  const linkInstagram = document.getElementById("linkInstagram");
  const linkWhatsappEl = document.getElementById("linkWhatsapp");
  if (linkInstagram) linkInstagram.href = CONFIG.instagram;
  if (linkWhatsappEl) linkWhatsappEl.href = linkWhatsapp();
}

/* ---------- 7) Executar tudo quando a página carregar ---------- */
document.addEventListener("DOMContentLoaded", () => {
  desenharCategorias();
  desenharDestaques();
  definirAno();
  definirLinksContacto();
});