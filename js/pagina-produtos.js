/*
  pagina-produtos.js
  ------------------------------------------------------
  Só é usado em pages/produtos.html.
  Responsável por:
  1) Ler a categoria vinda da página inicial (?categoria=...)
  2) Desenhar os botões de filtro
  3) Desenhar a grelha de produtos filtrada
  4) Abrir/fechar o modal com os detalhes de um produto
*/

let categoriaAtiva = "todos";

/* ---------- 1) Ler categoria da URL, se existir ----------
   Envolvido em try/catch: se o browser da pessoa for muito antigo
   e não tiver URLSearchParams, a página continua a funcionar
   (mostra apenas "Todos" em vez de travar). */
function lerCategoriaDaUrl() {
  try {
    const parametros = new URLSearchParams(window.location.search);
    const categoria = parametros.get("categoria");
    if (categoria && (categoria === "todos" || CATEGORIAS.some((c) => c.id === categoria))) {
      categoriaAtiva = categoria;
    }
  } catch (erro) {
    categoriaAtiva = "todos";
  }
}

/* ---------- 2) Desenhar botões de filtro ---------- */
function desenharFiltros() {
  const lista = document.getElementById("listaFiltros");
  if (!lista) return;

  const todos = { id: "todos", nome: "Todos" };
  const opcoes = [todos, ...CATEGORIAS];

  lista.innerHTML = opcoes
    .map(
      (cat) =>
        `<button class="categoria-botao ${cat.id === categoriaAtiva ? "ativa" : ""}" data-categoria="${cat.id}">${cat.nome}</button>`
    )
    .join("");

  Array.from(lista.querySelectorAll(".categoria-botao")).forEach((btn) => {
    btn.addEventListener("click", () => {
      categoriaAtiva = btn.dataset.categoria;
      Array.from(lista.querySelectorAll(".categoria-botao")).forEach((b) => b.classList.remove("ativa"));
      btn.classList.add("ativa");
      desenharGrelha();
    });
  });
}

/* ---------- 3) Desenhar grelha filtrada ---------- */
function desenharGrelha() {
  const grelha = document.getElementById("grelhaProdutos");
  const vazio = document.getElementById("resultadoVazio");
  if (!grelha) return;

  const lista =
    categoriaAtiva === "todos"
      ? PRODUTOS
      : categoriaAtiva === "adultos"
      ? PRODUTOS.filter((p) => p.categoria !== "criancas")
      : PRODUTOS.filter((p) => p.categoria === categoriaAtiva);

  grelha.innerHTML = lista.map(criarCartaoProduto).join("");
  vazio.style.display = lista.length === 0 ? "block" : "none";

  // Liga o clique de cada "Saber mais" ao modal.
  Array.from(grelha.querySelectorAll(".ver-mais")).forEach((btn) => {
    btn.addEventListener("click", () => abrirModal(btn.dataset.id));
  });
}

/* ---------- 4) Modal de detalhes ---------- */
function abrirModal(idProduto) {
  const produto = PRODUTOS.find((p) => String(p.id) === String(idProduto));
  if (!produto) return;

  const categoria = CATEGORIAS.find((c) => c.id === produto.categoria);
  const corpo = document.getElementById("modalCorpo");

  corpo.innerHTML = `
    <div class="modal-imagem">
      <img src="${produto.imagem}" alt="${produto.nome}">
    </div>
    <div class="modal-conteudo">
      <span class="categoria-etiqueta">${categoria ? categoria.nome : ""}</span>
      <h2>${produto.nome}</h2>
      <p>${produto.descricaoCompleta || produto.descricaoCurta}</p>

      <dl class="modal-ficha">
        <dt>Composição</dt>
        <dd>${produto.composicao}</dd>
        <dt>Modo de utilização</dt>
        <dd>${produto.utilizacao}</dd>
        <dt>Público-alvo</dt>
        <dd>${produto.publicoAlvo}</dd>
      </dl>

      <div class="modal-acoes">
        <a class="botao botao-primario" target="_blank" rel="noopener"
           href="${linkWhatsapp(produto.nome)}">Questionar/Encomendar via WhatsApp</a>
      </div>
    </div>
  `;

  document.getElementById("modalFundo").classList.add("aberto");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  document.getElementById("modalFundo").classList.remove("aberto");
  document.body.style.overflow = "";
}

/* ---------- 5) Executar tudo ---------- */
document.addEventListener("DOMContentLoaded", () => {
  lerCategoriaDaUrl();
  desenharFiltros();
  desenharGrelha();
  definirAno();
  definirLinksContacto();

  document.getElementById("modalFechar").addEventListener("click", fecharModal);
  document.getElementById("modalFundo").addEventListener("click", (e) => {
    if (e.target.id === "modalFundo") fecharModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
  });
});