/*
  pagina-produtos.js

  ------------------------------------------------------

  Só é usado em pages/produtos.html.



  Responsável por:



  1) Ler a categoria vinda da página inicial (?categoria=...)

  2) Desenhar os botões de filtro

  3) Desenhar a grelha de produtos filtrada

  4) Abrir/fechar o modal com os detalhes de um produto

  5) Animar a página com GSAP, quando disponível

*/

let categoriaAtiva = "todos";


/* ---------- 1) Ler categoria da URL, se existir ----------

   Envolvido em try/catch: se o browser da pessoa for muito antigo

   e não tiver URLSearchParams, a página continua a funcionar

   (mostra apenas "Todos" em vez de travar).

*/

function lerCategoriaDaUrl() {

  try {

    const parametros = new URLSearchParams(window.location.search);

    const categoria = parametros.get("categoria");


    if (

      categoria &&

      (categoria === "todos" ||

        CATEGORIAS.some((c) => c.id === categoria))

    ) {

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


  const todos = {

    id: "todos",

    nome: "Todos"

  };


  const opcoes = [todos, ...CATEGORIAS];


  lista.innerHTML = opcoes

    .map(

      (cat) =>

        `<button class="categoria-botao ${
          cat.id === categoriaAtiva ? "ativa" : ""
        }" data-categoria="${cat.id}">

          ${cat.nome}

        </button>`

    )

    .join("");


  Array.from(

    lista.querySelectorAll(".categoria-botao")

  ).forEach((btn) => {

    btn.addEventListener("click", () => {

      categoriaAtiva = btn.dataset.categoria;


      Array.from(

        lista.querySelectorAll(".categoria-botao")

      ).forEach((b) => {

        b.classList.remove("ativa");

      });


      btn.classList.add("ativa");


      desenharGrelha();


      /* Animação do botão seleccionado */

      animarElementoGSAP(btn);

    });

  });


  /* Animação inicial dos filtros */

  animarFiltrosGSAP();

}


/* =========================================================

   PESQUISA INTELIGENTE DE PRODUTOS

   ========================================================= */


function normalizarTexto(texto) {

  return String(texto || "")

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/[^\w\s-]/g, " ")

    .replace(/\s+/g, " ")

    .trim();

}


/* ---------- Sinónimos e palavras-chave ---------- */


const SINONIMOS_PESQUISA = {

  energia: [

    "energia",

    "disposicao",

    "vitalidade",

    "cansaco",

    "fadiga",

    "forca",

    "resistencia"

  ],


  imunidade: [

    "imunidade",

    "imunitario",

    "imunitaria",

    "defesas",

    "defesa",

    "resistencia"

  ],


  digestao: [

    "digestao",

    "digestivo",

    "digestiva",

    "intestino",

    "intestinal",

    "barriga",

    "inchaco",

    "regularidade"

  ],


  circulacao: [

    "circulacao",

    "circulatorio",

    "circulatoria",

    "vascular",

    "coracao",

    "cardiovascular"

  ],


  olhos: [

    "olhos",

    "ocular",

    "visao",

    "vista"

  ],


  respiracao: [

    "respiracao",

    "respiratorio",

    "respiratoria",

    "pulmao",

    "pulmoes",

    "vias respiratorias",

    "garganta"

  ],


  ossos: [

    "ossos",

    "osseo",

    "ossea",

    "calcio"

  ],


  articulacoes: [

    "articulacoes",

    "articular",

    "juntas",

    "mobilidade"

  ],


  pele: [

    "pele",

    "derme",

    "beleza",

    "antioxidante",

    "envelhecimento"

  ],


  emagrecimento: [

    "emagrecimento",

    "emagrecer",

    "emagrecer",

    "peso",

    "perder peso",

    "controlo de peso",

    "gordura",

    "slim"

  ],


  mulher: [

    "mulher",

    "mulheres",

    "feminino",

    "feminina",

    "saude feminina",

    "intimo"

  ],


  homem: [

    "homem",

    "homens",

    "masculino",

    "masculina",

    "prostata",

    "urinario"

  ],


  nutricao: [

    "nutricao",

    "nutriente",

    "nutrientes",

    "alimentacao",

    "suplemento",

    "suplementos",

    "complemento alimentar"

  ],


  vitaminas: [

    "vitamina",

    "vitaminas",

    "vitaminico",

    "vitaminica"

  ],


  minerais: [

    "mineral",

    "minerais",

    "zinco",

    "calcio",

    "magnesio"

  ],


  criancas: [

    "crianca",

    "criancas",

    "infantil",

    "menino",

    "menina"

  ]

};


/* ---------- Obter palavras relacionadas ---------- */


function obterTermosPesquisa(texto) {

  const textoNormalizado = normalizarTexto(texto);


  if (!textoNormalizado) return [];


  const termos = new Set(

    textoNormalizado

      .split(" ")

      .filter((termo) => termo.length >= 2)

  );


  Object.values(SINONIMOS_PESQUISA).forEach((grupo) => {

    const grupoNormalizado = grupo.map(normalizarTexto);


    const encontrouGrupo = grupoNormalizado.some((termo) =>

      textoNormalizado.includes(termo)

    );


    if (encontrouGrupo) {

      grupoNormalizado.forEach((termo) => {

        termo.split(" ").forEach((parte) => {

          if (parte.length >= 2) {

            termos.add(parte);

          }

        });

      });

    }

  });


  return Array.from(termos);

}


/* ---------- Calcular relevância do produto ---------- */


function pontuarProduto(produto, pesquisa) {

  const textoPesquisa = normalizarTexto(pesquisa);


  if (!textoPesquisa) return 0;


  const categoria = CATEGORIAS.find(

    (c) => c.id === produto.categoria

  );


  const nome = normalizarTexto(produto.nome);


  const textoProduto = normalizarTexto([

    produto.nome,

    categoria ? categoria.nome : "",

    produto.descricaoCompleta,

    produto.beneficios,

    produto.indicadoPara,

    produto.composicao,

    produto.publicoAlvo

  ].join(" "));


  const termos = obterTermosPesquisa(pesquisa);


  let pontuacao = 0;


  /* Nome exacto */

  if (nome.includes(textoPesquisa)) {

    pontuacao += 100;

  }


  /* Informação completa */

  if (textoProduto.includes(textoPesquisa)) {

    pontuacao += 40;

  }


  /* Palavras e sinónimos */

  termos.forEach((termo) => {

    if (nome.includes(termo)) {

      pontuacao += 30;

    } else if (textoProduto.includes(termo)) {

      pontuacao += 10;

    }

  });


  return pontuacao;

}


/* ---------- Executar pesquisa ---------- */


function pesquisarProdutos() {

  const campo = document.getElementById("campoPesquisa");

  const grelha = document.getElementById("grelhaProdutos");

  const vazio = document.getElementById("resultadoVazio");


  if (!campo || !grelha) return;


  const pesquisa = campo.value.trim();


  let lista =

    categoriaAtiva === "todos"

      ? PRODUTOS

      : categoriaAtiva === "adultos"

      ? PRODUTOS.filter((p) => p.categoria !== "criancas")

      : PRODUTOS.filter((p) => p.categoria === categoriaAtiva);


  if (pesquisa) {

    lista = lista

      .map((produto) => ({

        produto,

        pontuacao: pontuarProduto(produto, pesquisa)

      }))

      .filter((item) => item.pontuacao > 0)

      .sort((a, b) => b.pontuacao - a.pontuacao)

      .map((item) => item.produto);

  }


  grelha.innerHTML = lista.map(criarCartaoProduto).join("");


  vazio.style.display = lista.length === 0 ? "block" : "none";


  Array.from(grelha.querySelectorAll(".ver-mais")).forEach((btn) => {

    btn.addEventListener("click", () => abrirModal(btn.dataset.id));

  });


  /* Animação dos resultados da pesquisa */

  animarProdutosGSAP();

  activarInteraccoesToqueProdutos();

}


/* ---------- Activar pesquisa ---------- */


function activarPesquisa() {

  const campo = document.getElementById("campoPesquisa");

  const botao = document.getElementById("botaoPesquisa");


  if (!campo) return;


  campo.addEventListener("input", pesquisarProdutos);


  if (botao) {

    botao.addEventListener("click", pesquisarProdutos);

  }

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

      : PRODUTOS.filter(

          (p) => p.categoria === categoriaAtiva

        );


  grelha.innerHTML = lista

    .map(criarCartaoProduto)

    .join("");


  if (vazio) {

    vazio.style.display =

      lista.length === 0 ? "block" : "none";

  }


  /* Liga o clique de cada "Saber mais" ao modal. */

  Array.from(

    grelha.querySelectorAll(".ver-mais")

  ).forEach((btn) => {

    btn.addEventListener("click", () => {

      abrirModal(btn.dataset.id);

    });

  });


  /* GSAP */

  animarProdutosGSAP();

  activarInteraccoesToqueProdutos();

}


/* =========================================================

   ANIMAÇÕES GSAP

   ========================================================= */


/*

  Estas funções são opcionais.


  Se o GSAP não estiver carregado no HTML,

  nada acontece e o site continua normalmente.

*/


function gsapDisponivel() {

  return typeof window.gsap !== "undefined";

}


/* ---------- Animação dos filtros ---------- */


function animarFiltrosGSAP() {

  if (!gsapDisponivel()) return;


  const botoes = document.querySelectorAll(

    "#listaFiltros .categoria-botao"

  );


  if (!botoes.length) return;


  gsap.fromTo(

    botoes,

    {

      opacity: 0,

      y: 10

    },

    {

      opacity: 1,

      y: 0,

      duration: 0.45,

      stagger: 0.04,

      ease: "power2.out"

    }

  );

}


/* ---------- Animação dos cartões ---------- */


function animarProdutosGSAP() {

  if (!gsapDisponivel()) return;


  const cartoes = document.querySelectorAll(

    "#grelhaProdutos .cartao-produto"

  );


  if (!cartoes.length) return;


  gsap.fromTo(

    cartoes,

    {

      opacity: 0,

      y: 18

    },

    {

      opacity: 1,

      y: 0,

      duration: 0.5,

      stagger: 0.05,

      ease: "power2.out"

    }

  );

}


/* ---------- Pequena animação do botão ---------- */


function animarElementoGSAP(elemento) {

  if (!gsapDisponivel() || !elemento) return;


  gsap.fromTo(

    elemento,

    {

      scale: 0.96

    },

    {

      scale: 1,

      duration: 0.25,

      ease: "power2.out"

    }

  );

}


/* =========================================================

   INTERACÇÕES TÁCTEIS PARA TELEMÓVEL

   ========================================================= */


function eMobile() {

  return (

    window.matchMedia &&

    window.matchMedia("(max-width: 860px)").matches

  );

}


function movimentoReduzido() {

  return (

    window.matchMedia &&

    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  );

}


/* ---------- Toque nas categorias ---------- */


function activarInteraccoesToqueCategorias() {

  if (!gsapDisponivel()) return;

  if (!eMobile()) return;

  if (movimentoReduzido()) return;


  const categorias = document.querySelectorAll(

    ".categoria-botao"

  );


  categorias.forEach((categoria) => {

    if (categoria.dataset.toqueActivo === "true") return;

    categoria.dataset.toqueActivo = "true";


    categoria.addEventListener(

      "touchstart",

      () => {

        gsap.to(categoria, {

          scale: 0.95,

          duration: 0.1,

          ease: "power1.out",

          overwrite: true

        });

      },

      { passive: true }

    );


    const libertarCategoria = () => {

      gsap.to(categoria, {

        scale: 1,

        duration: 0.25,

        ease: "back.out(1.5)",

        overwrite: true

      });

    };


    categoria.addEventListener(

      "touchend",

      libertarCategoria,

      { passive: true }

    );


    categoria.addEventListener(

      "touchcancel",

      libertarCategoria,

      { passive: true }

    );

  });

}


/* ---------- Toque nos cartões ---------- */


function activarInteraccoesToqueProdutos() {

  if (!gsapDisponivel()) return;

  if (!eMobile()) return;

  if (movimentoReduzido()) return;


  const cartoes = document.querySelectorAll(

    "#grelhaProdutos .cartao-produto"

  );


  cartoes.forEach((cartao) => {

    if (cartao.dataset.toqueActivo === "true") return;

    cartao.dataset.toqueActivo = "true";


    const imagem = cartao.querySelector(

      ".imagem-produto img"

    );


    cartao.addEventListener(

      "touchstart",

      () => {

        gsap.to(cartao, {

          scale: 0.985,

          duration: 0.1,

          ease: "power1.out",

          overwrite: true

        });


        if (imagem) {

          gsap.to(imagem, {

            scale: 1.025,

            duration: 0.18,

            ease: "power2.out",

            overwrite: true

          });

        }

      },

      { passive: true }

    );


    const libertarCartao = () => {

      gsap.to(cartao, {

        scale: 1,

        duration: 0.25,

        ease: "back.out(1.35)",

        overwrite: true

      });


      if (imagem) {

        gsap.to(imagem, {

          scale: 1,

          duration: 0.3,

          ease: "power2.out",

          overwrite: true

        });

      }

    };


    cartao.addEventListener(

      "touchend",

      libertarCartao,

      { passive: true }

    );


    cartao.addEventListener(

      "touchcancel",

      libertarCartao,

      { passive: true }

    );

  });

}


/* =========================================================

   4) MODAL DE DETALHES

   ========================================================= */


function abrirModal(idProduto) {

  const produto = PRODUTOS.find(

    (p) => String(p.id) === String(idProduto)

  );


  if (!produto) return;


  const categoria = CATEGORIAS.find(

    (c) => c.id === produto.categoria

  );


  const corpo = document.getElementById("modalCorpo");


  if (!corpo) return;


  /*

    O preço é apresentado apenas quando existe

    no objecto do produto.


    Assim, os produtos normais continuam sem preço

    e os Kits de Saúde podem apresentar o seu preço.

  */


  const blocoPreco = produto.preco

    ? `<p class="preco modal-preco">${produto.preco}</p>`

    : "";


  corpo.innerHTML = `

    <div class="modal-imagem ${
      produto.categoria === "kits"

        ? "modal-imagem-kit"

        : ""

    }">

      <img src="${produto.imagem}" alt="${produto.nome}">

    </div>


    <div class="modal-conteudo">


      <span class="categoria-etiqueta">

        ${categoria ? categoria.nome : ""}

      </span>


      <h2>${produto.nome}</h2>


      ${blocoPreco}


      <p>

        ${produto.descricaoCompleta || ""}

      </p>


      <dl class="modal-ficha">


        <dt>Composição</dt>

        <dd>${produto.composicao}</dd>


        <dt>Modo de utilização</dt>

        <dd>${produto.utilizacao}</dd>


        <dt>Público-alvo</dt>

        <dd>${produto.publicoAlvo}</dd>


      </dl>


      <div class="modal-acoes">


        <a

          class="botao botao-primario"

          target="_blank"

          rel="noopener"

          href="${linkWhatsapp(produto.nome)}"

        >

          Questionar/Encomendar via WhatsApp

        </a>


      </div>


    </div>

  `;


  const fundo = document.getElementById("modalFundo");


  if (!fundo) return;


  fundo.classList.add("aberto");


  document.body.style.overflow = "hidden";


  /* ---------- Animação GSAP do modal ---------- */


  if (gsapDisponivel()) {

    const conteudo = fundo.querySelector(".modal-conteudo");

    const imagem = fundo.querySelector(".modal-imagem");

    const accoes = fundo.querySelector(".modal-acoes");

    const preco = fundo.querySelector(".modal-preco");

    const botaoWhatsapp = fundo.querySelector(

      ".modal-acoes .botao"

    );


    if (imagem) {

      gsap.fromTo(

        imagem,

        {

          opacity: 0,

          scale: 0.96

        },

        {

          opacity: 1,

          scale: 1,

          duration: 0.4,

          ease: "power2.out"

        }

      );

    }


    if (conteudo) {

      gsap.fromTo(

        conteudo,

        {

          opacity: 0,

          y: 15

        },

        {

          opacity: 1,

          y: 0,

          duration: 0.35,

          ease: "power2.out"

        }

      );

    }


    if (preco) {

      gsap.fromTo(

        preco,

        {

          opacity: 0,

          y: 8,

          scale: 0.92

        },

        {

          opacity: 1,

          y: 0,

          scale: 1,

          duration: 0.45,

          delay: 0.18,

          ease: "back.out(1.7)"

        }

      );

    }


    if (accoes) {

      gsap.fromTo(

        accoes,

        {

          opacity: 0,

          y: 10

        },

        {

          opacity: 1,

          y: 0,

          duration: 0.3,

          delay: 0.15,

          ease: "power2.out"

        }

      );

    }


    if (botaoWhatsapp) {

      gsap.fromTo(

        botaoWhatsapp,

        {

          opacity: 0,

          y: 8,

          scale: 0.97

        },

        {

          opacity: 1,

          y: 0,

          scale: 1,

          duration: 0.35,

          delay: 0.28,

          ease: "back.out(1.4)"

        }

      );

    }

  }


  activarToqueModal();

}


/* =========================================================

   INTERACÇÃO TÁCTIL DO MODAL

   ========================================================= */


function activarToqueModal() {

  if (!gsapDisponivel()) return;

  if (!eMobile()) return;

  if (movimentoReduzido()) return;


  const fundo = document.getElementById("modalFundo");


  if (!fundo) return;


  const botaoWhatsapp = fundo.querySelector(

    ".modal-acoes .botao"

  );


  const botaoFechar = document.getElementById(

    "modalFechar"

  );


  if (botaoWhatsapp) {

    if (botaoWhatsapp.dataset.toqueActivo !== "true") {

      botaoWhatsapp.dataset.toqueActivo = "true";


      botaoWhatsapp.addEventListener(

        "touchstart",

        () => {

          gsap.to(botaoWhatsapp, {

            scale: 0.96,

            duration: 0.1,

            ease: "power1.out",

            overwrite: true

          });

        },

        { passive: true }

      );


      const libertarWhatsapp = () => {

        gsap.to(botaoWhatsapp, {

          scale: 1,

          duration: 0.25,

          ease: "back.out(1.5)",

          overwrite: true

        });

      };


      botaoWhatsapp.addEventListener(

        "touchend",

        libertarWhatsapp,

        { passive: true }

      );


      botaoWhatsapp.addEventListener(

        "touchcancel",

        libertarWhatsapp,

        { passive: true }

      );

    }

  }


  if (botaoFechar) {

    if (botaoFechar.dataset.toqueActivo !== "true") {

      botaoFechar.dataset.toqueActivo = "true";


      botaoFechar.addEventListener(

        "touchstart",

        () => {

          gsap.to(botaoFechar, {

            scale: 0.9,

            duration: 0.1,

            ease: "power1.out",

            overwrite: true

          });

        },

        { passive: true }

      );


      const libertarFechar = () => {

        gsap.to(botaoFechar, {

          scale: 1,

          duration: 0.25,

          ease: "back.out(1.5)",

          overwrite: true

        });

      };


      botaoFechar.addEventListener(

        "touchend",

        libertarFechar,

        { passive: true }

      );


      botaoFechar.addEventListener(

        "touchcancel",

        libertarFechar,

        { passive: true }

      );

    }

  }

}


/* ---------- 5) Fechar modal ---------- */


function fecharModal() {

  const fundo = document.getElementById("modalFundo");


  if (!fundo) return;


  if (gsapDisponivel()) {

    gsap.to(fundo.querySelector(".modal-conteudo"), {

      opacity: 0,

      y: 10,

      duration: 0.18,

      ease: "power1.in",

      onComplete: () => {

        fundo.classList.remove("aberto");

        document.body.style.overflow = "";

      }

    });

  } else {

    fundo.classList.remove("aberto");

    document.body.style.overflow = "";

  }

}


/* ---------- 6) Executar tudo ---------- */


document.addEventListener("DOMContentLoaded", () => {


  lerCategoriaDaUrl();


  desenharFiltros();


  desenharGrelha();


  definirAno();


  definirLinksContacto();


  activarPesquisa();


  activarInteraccoesToqueCategorias();


  activarInteraccoesToqueProdutos();


  const botaoFechar =

    document.getElementById("modalFechar");


  const modalFundo =

    document.getElementById("modalFundo");


  if (botaoFechar) {

    botaoFechar.addEventListener(

      "click",

      fecharModal

    );

  }


  if (modalFundo) {

    modalFundo.addEventListener("click", (e) => {


      if (e.target.id === "modalFundo") {

        fecharModal();

      }


    });

  }


  document.addEventListener("keydown", (e) => {


    if (e.key === "Escape") {

      fecharModal();

    }


  });


});