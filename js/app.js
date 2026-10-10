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
  7) Animações GSAP e ScrollTrigger
  8) Interacções visuais dos CTA e cartões

  Este ficheiro assume que produtos.js já foi carregado antes
  (ver a ordem dos <script> no fim do index.html).
*/


/* =========================================================
   1) MENU MOBILE
   ========================================================= */

/*
   Nota: as variáveis NÃO se podem chamar "botaoMenu" nem
   "navPrincipal" porque esses nomes correspondem aos id=
   do HTML e o browser pode criá-los automaticamente no
   objecto window.

   Por isso usamos o prefixo "el".
*/

const elBotaoMenu = document.getElementById("botaoMenu");
const elNavPrincipal = document.getElementById("navPrincipal");

if (elBotaoMenu && elNavPrincipal) {

  elBotaoMenu.addEventListener("click", () => {

    const aberto = elNavPrincipal.classList.toggle("aberto");

    elBotaoMenu.setAttribute(
      "aria-expanded",
      aberto ? "true" : "false"
    );

  });


  /*
    Fecha o menu quando o utilizador clica num link.
    Útil sobretudo em telemóveis.
  */

  elNavPrincipal.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      elNavPrincipal.classList.remove("aberto");

      elBotaoMenu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   2) CRIAR O HTML DE UM CARTÃO DE PRODUTO
   ========================================================= */

function criarCartaoProduto(produto) {

  const categoria = CATEGORIAS.find(
    (c) => c.id === produto.categoria
  );

  return `
    <article class="cartao-produto">

      <div class="imagem-produto ${
        produto.categoria === "kits" ? "imagem-kit" : ""
      }">

        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          loading="lazy"
        >

      </div>

      <div class="conteudo">

        <span class="categoria-etiqueta">
          ${categoria ? categoria.nome : ""}
        </span>

        <h3>${produto.nome}</h3>

        ${
          produto.preco
            ? `<p class="preco">${produto.preco}</p>`
            : ""
        }

        <button
          class="ver-mais"
          data-id="${produto.id}"
          type="button"
        >
          Saber mais
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   3) DESENHAR CATEGORIAS
   ========================================================= */

function desenharCategorias() {

  const lista = document.getElementById("listaCategorias");

  if (!lista) return;

  const botaoTodos = `
    <button
      class="categoria-botao ativa"
      data-categoria="todos"
      type="button"
    >
      Todos
    </button>
  `;

  const botoes = CATEGORIAS.map(
    (cat) => `
      <button
        class="categoria-botao"
        data-categoria="${cat.id}"
        type="button"
      >
        ${cat.nome}
      </button>
    `
  ).join("");

  lista.innerHTML = botaoTodos + botoes;


  Array.from(
    lista.querySelectorAll(".categoria-botao")
  ).forEach((btn) => {

    btn.addEventListener("click", () => {

      Array.from(
        lista.querySelectorAll(".categoria-botao")
      ).forEach((b) =>
        b.classList.remove("ativa")
      );

      btn.classList.add("ativa");


      /*
        Nesta página inicial, os botões de categoria servem
        como pré-visualização.

        O filtro completo fica na página:

        pages/produtos.html
      */

      window.location.href =
        `pages/produtos.html?categoria=${btn.dataset.categoria}`;

    });

  });

}


/* =========================================================
   4) DESENHAR PRODUTOS EM DESTAQUE
   ========================================================= */

function desenharDestaques() {

  const grelha =
    document.getElementById("grelhaDestaque");

  if (!grelha) return;

  const destaques =
    PRODUTOS.filter((p) => p.destaque);

  grelha.innerHTML =
    destaques.map(criarCartaoProduto).join("");


  /*
    Liga os botões "Saber mais", caso existam na página inicial.
    Esta função verifica se existe um modal antes de tentar
    utilizá-lo, para não criar erros noutras páginas.
  */

  Array.from(
    grelha.querySelectorAll(".ver-mais")
  ).forEach((btn) => {

    btn.addEventListener("click", () => {

      if (typeof abrirModal === "function") {
        abrirModal(btn.dataset.id);
      }

    });

  });

}


/* =========================================================
   5) ANO NO RODAPÉ
   ========================================================= */

function definirAno() {

  const span =
    document.getElementById("anoAtual");

  if (span) {

    span.textContent =
      new Date().getFullYear();

  }

}


/* =========================================================
   6) LIGAR INSTAGRAM / WHATSAPP
   ========================================================= */

function definirLinksContacto() {

  const linkInstagram =
    document.getElementById("linkInstagram");

  const linkWhatsappEl =
    document.getElementById("linkWhatsapp");


  if (linkInstagram) {

    linkInstagram.href =
      CONFIG.instagram;

    linkInstagram.target = "_blank";
    linkInstagram.rel = "noopener noreferrer";

  }


  if (linkWhatsappEl) {

    linkWhatsappEl.href =
      linkWhatsapp();

    linkWhatsappEl.target = "_blank";
    linkWhatsappEl.rel = "noopener noreferrer";

  }

}


/* =========================================================
   7) ANIMAÇÕES GSAP
   ========================================================= */

function iniciarAnimacoesGSAP() {

  /*
    Se GSAP não estiver carregado, simplesmente não fazemos
    as animações.

    Isto evita que o restante site deixe de funcionar.
  */

  if (typeof gsap === "undefined") {
    return;
  }


  /*
    Se o utilizador tiver activado "reduzir movimento"
    no sistema operativo, evitamos animações excessivas.
  */

  const reduzirMovimento =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  if (reduzirMovimento) {
    return;
  }


  /* -------------------------------------------------------
     REGISTAR SCROLLTRIGGER
     ------------------------------------------------------- */

  if (typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

  }


  /* -------------------------------------------------------
     7.1) CABEÇALHO
     ------------------------------------------------------- */

  const header =
    document.querySelector('[data-gsap="header"]');

  const marca =
    document.querySelector('[data-gsap="marca"]');


  if (header) {

    gsap.from(header, {

      y: -25,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"

    });

  }


  if (marca) {

    gsap.from(marca, {

      x: -20,
      opacity: 0,
      duration: 0.7,
      delay: 0.15,
      ease: "power3.out"

    });

  }


  /* -------------------------------------------------------
     7.2) HERO
     ------------------------------------------------------- */

  const heroEyebrow =
    document.querySelector('[data-gsap="hero-eyebrow"]');

  const heroTitle =
    document.querySelector('[data-gsap="hero-title"]');

  const heroDescription =
    document.querySelector('[data-gsap="hero-description"]');

  const heroActions =
    document.querySelector('[data-gsap="hero-actions"]');

  const heroImage =
    document.querySelector('[data-gsap="hero-image"]');


  /*
    Pequena sequência de entrada
  */

  if (heroEyebrow) {

    gsap.from(heroEyebrow, {

      y: 25,
      opacity: 0,
      duration: 0.7,
      delay: 0.25,
      ease: "power3.out"

    });

  }


  if (heroTitle) {

    gsap.from(heroTitle, {

      y: 35,
      opacity: 0,
      duration: 0.9,
      delay: 0.35,
      ease: "power3.out"

    });

  }


  if (heroDescription) {

    gsap.from(heroDescription, {

      y: 25,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.out"

    });

  }


  if (heroActions) {

    gsap.from(heroActions, {

      y: 20,
      opacity: 0,
      duration: 0.7,
      delay: 0.65,
      ease: "power3.out"

    });

  }


  /* -------------------------------------------------------
     7.3) IMAGEM DO HERO
     ------------------------------------------------------- */

  if (heroImage) {

    gsap.from(heroImage, {

      x: 45,
      opacity: 0,
      scale: 0.96,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"

    });


    /*
      Pequeno movimento contínuo e muito subtil.
      Apenas se não houver preferência por movimento reduzido.
    */

    gsap.to(heroImage, {

      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"

    });

  }


  /* -------------------------------------------------------
     7.4) CTA
     ------------------------------------------------------- */

  const ctas =
    document.querySelectorAll('[data-gsap="cta"]');


  if (ctas.length) {

    ctas.forEach((cta, index) => {

      /*
        Entrada individual dos CTA.
      */

      gsap.from(cta, {

        y: 15,
        opacity: 0,
        duration: 0.6,
        delay: 0.75 + (index * 0.08),
        ease: "power2.out"

      });


      /*
        Efeito subtil ao passar o rato.
        O CSS continua responsável pelo hover principal.
      */

      cta.addEventListener("mouseenter", () => {

        gsap.to(cta, {

          scale: 1.035,
          y: -2,
          duration: 0.2,
          ease: "power2.out"

        });

      });


      cta.addEventListener("mouseleave", () => {

        gsap.to(cta, {

          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out"

        });

      });


      /*
        Pequeno efeito ao clicar.
      */

      cta.addEventListener("mousedown", () => {

        gsap.to(cta, {

          scale: 0.98,
          duration: 0.1,
          ease: "power1.out"

        });

      });


      cta.addEventListener("mouseup", () => {

        gsap.to(cta, {

          scale: 1.035,
          duration: 0.15,
          ease: "power2.out"

        });

      });

    });

  }


  /* -------------------------------------------------------
     7.5) CATEGORIAS
     ------------------------------------------------------- */

  const categorias =
    document.querySelectorAll(".categoria-botao");


  if (categorias.length) {

    if (typeof ScrollTrigger !== "undefined") {

      const triggerCategorias =
        document.querySelector(".categorias-lista") ||
        document.querySelector("#listaCategorias");


      gsap.from(categorias, {

        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",

        scrollTrigger: {

          trigger:
            triggerCategorias || categorias[0],

          start: "top 85%",
          once: true

        }

      });

    } else {

      gsap.from(categorias, {

        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out"

      });

    }


    /*
      Hover das categorias.
    */

    categorias.forEach((categoria) => {

      categoria.addEventListener("mouseenter", () => {

        gsap.to(categoria, {

          y: -2,
          duration: 0.18,
          ease: "power2.out"

        });

      });


      categoria.addEventListener("mouseleave", () => {

        gsap.to(categoria, {

          y: 0,
          duration: 0.18,
          ease: "power2.out"

        });

      });

    });

  }


  /* -------------------------------------------------------
     7.6) PRODUTOS EM DESTAQUE
     ------------------------------------------------------- */

  const cartoes =
    document.querySelectorAll(".cartao-produto");


  if (cartoes.length) {

    if (typeof ScrollTrigger !== "undefined") {

      const triggerProdutos =
        document.querySelector(".grade-produtos") ||
        document.querySelector("#grelhaDestaque");


      gsap.from(cartoes, {

        y: 35,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {

          trigger:
            triggerProdutos || cartoes[0],

          start: "top 85%",
          once: true

        }

      });

    } else {

      gsap.from(cartoes, {

        y: 35,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out"

      });

    }


    /*
      -------------------------------------------------------
      HOVER DOS CARTÕES
      -------------------------------------------------------

      Efeito muito subtil para dar sensação de produto
      interactivo sem exagerar na animação.
    */

    cartoes.forEach((cartao) => {

      const imagem =
        cartao.querySelector(".imagem-produto img");

      cartao.addEventListener("mouseenter", () => {

        gsap.to(cartao, {

          y: -5,
          duration: 0.25,
          ease: "power2.out"

        });


        if (imagem) {

          gsap.to(imagem, {

            scale: 1.035,
            duration: 0.35,
            ease: "power2.out"

          });

        }

      });


      cartao.addEventListener("mouseleave", () => {

        gsap.to(cartao, {

          y: 0,
          duration: 0.25,
          ease: "power2.out"

        });


        if (imagem) {

          gsap.to(imagem, {

            scale: 1,
            duration: 0.35,
            ease: "power2.out"

          });

        }

      });

    });

  }


  /* -------------------------------------------------------
     7.7) RODAPÉ
     ------------------------------------------------------- */

  const footerItems =
    document.querySelectorAll('[data-gsap="footer-item"]');


  if (
    footerItems.length &&
    typeof ScrollTrigger !== "undefined"
  ) {

    gsap.from(footerItems, {

      y: 25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",

      scrollTrigger: {

        trigger: ".rodape",
        start: "top 90%",
        once: true

      }

    });

  }


  /* -------------------------------------------------------
     7.8) ANO / RODAPÉ
     ------------------------------------------------------- */

  const footer =
    document.querySelector('[data-gsap="footer"]');


  if (
    footer &&
    typeof ScrollTrigger !== "undefined"
  ) {

    gsap.from(footer, {

      opacity: 0,
      duration: 0.7,

      scrollTrigger: {

        trigger: footer,
        start: "top 95%",
        once: true

      }

    });

  }

}
/* =========================================================
   7.9) INTERACÇÕES TÁCTEIS PARA TELEMÓVEL
   ========================================================= */

/*
  Esta função acrescenta resposta visual ao toque.

  Não substitui as animações existentes do GSAP.
  Apenas melhora a experiência em dispositivos móveis,
  onde não existe hover.
*/

function activarInteraccoesToqueMobile() {

  if (typeof gsap === "undefined") {
    return;
  }

  const reduzirMovimento =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduzirMovimento) {
    return;
  }

  const eMobile =
    window.matchMedia &&
    window.matchMedia("(max-width: 860px)").matches;

  if (!eMobile) {
    return;
  }


  /* -------------------------------------------------------
     CTA
     ------------------------------------------------------- */

  const ctas =
    document.querySelectorAll('[data-gsap="cta"]');

  ctas.forEach((cta) => {

    cta.addEventListener("touchstart", () => {

      gsap.to(cta, {
        scale: 0.97,
        duration: 0.1,
        ease: "power1.out",
        overwrite: true
      });

    }, { passive: true });


    const libertarCTA = () => {

      gsap.to(cta, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(1.5)",
        overwrite: true
      });

    };

    cta.addEventListener(
      "touchend",
      libertarCTA,
      { passive: true }
    );

    cta.addEventListener(
      "touchcancel",
      libertarCTA,
      { passive: true }
    );

  });


  /* -------------------------------------------------------
     CATEGORIAS
     ------------------------------------------------------- */

  const categorias =
    document.querySelectorAll(".categoria-botao");

  categorias.forEach((categoria) => {

    categoria.addEventListener("touchstart", () => {

      gsap.to(categoria, {
        scale: 0.95,
        duration: 0.1,
        ease: "power1.out",
        overwrite: true
      });

    }, { passive: true });


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


  /* -------------------------------------------------------
     CARTÕES DE PRODUTO
     ------------------------------------------------------- */

  const cartoes =
    document.querySelectorAll(".cartao-produto");

  cartoes.forEach((cartao) => {

    const imagem =
      cartao.querySelector(".imagem-produto img");


    cartao.addEventListener("touchstart", () => {

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

    }, { passive: true });


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


  /* -------------------------------------------------------
     BOTÃO DO MENU MOBILE
     ------------------------------------------------------- */

  const menu =
    document.getElementById("botaoMenu");

  if (menu) {

    menu.addEventListener("touchstart", () => {

      gsap.to(menu, {
        scale: 0.92,
        duration: 0.1,
        ease: "power1.out",
        overwrite: true
      });

    }, { passive: true });


    const libertarMenu = () => {

      gsap.to(menu, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(1.5)",
        overwrite: true
      });

    };

    menu.addEventListener(
      "touchend",
      libertarMenu,
      { passive: true }
    );

    menu.addEventListener(
      "touchcancel",
      libertarMenu,
      { passive: true }
    );

  }

}

/* =========================================================
   8) INTERACÇÕES DOS CARTÕES
   ========================================================= */

/*
  Esta função é separada para que possa ser utilizada
  sempre que uma grelha de produtos for reconstruída.
*/

function activarInteraccoesCartoes() {

  if (typeof gsap === "undefined") {
    return;
  }


  const reduzirMovimento =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduzirMovimento) {
    return;
  }


  const cartoes =
    document.querySelectorAll(".cartao-produto");


  cartoes.forEach((cartao) => {

    const imagem =
      cartao.querySelector(".imagem-produto img");


    cartao.addEventListener("mouseenter", () => {

      gsap.to(cartao, {

        y: -5,
        duration: 0.25,
        ease: "power2.out"

      });


      if (imagem) {

        gsap.to(imagem, {

          scale: 1.035,
          duration: 0.35,
          ease: "power2.out"

        });

      }

    });


    cartao.addEventListener("mouseleave", () => {

      gsap.to(cartao, {

        y: 0,
        duration: 0.25,
        ease: "power2.out"

      });


      if (imagem) {

        gsap.to(imagem, {

          scale: 1,
          duration: 0.35,
          ease: "power2.out"

        });

      }

    });

  });

}


/* =========================================================
   9) EXECUTAR TUDO QUANDO A PÁGINA CARREGAR
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  desenharCategorias();
  desenharDestaques();
  definirAno();
  definirLinksContacto();

  const intro = document.getElementById("introMobile");
  const eMobile = window.matchMedia("(max-width: 860px)").matches;

  function iniciarEfeitosDaPagina() {
    iniciarAnimacoesGSAP();
    activarInteraccoesCartoes();

    if (typeof activarInteraccoesToqueMobile === "function") {
      activarInteraccoesToqueMobile();
    }
  }

  if (intro && eMobile) {
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      intro.classList.add("intro-a-sair");

      window.setTimeout(() => {
        intro.remove();
        document.body.style.overflow = "";
        iniciarEfeitosDaPagina();
      }, 700);
    }, 2000);
  } else {
    if (intro) intro.remove();
    iniciarEfeitosDaPagina();
  }
});

