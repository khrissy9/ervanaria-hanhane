/*
  config.js
  ------------------------------------------------------
  Configuração central do site. Edita aqui o número de
  WhatsApp e o link do Instagram — todas as páginas usam
  estes valores, não precisas de alterar mais nada.
*/

const CONFIG = {
  // Número de WhatsApp com indicativo do país, SEM "+" e sem espaços.
  // Exemplo Moçambique: 258 + número = "258841234567"
  whatsapp: "258847333256",

  // Link do perfil de Instagram da loja.
  instagram: "https://instagram.com/ervanaria.hanhane",

  nomeLoja: "Ervanária Hanhane",
};

/**
 * Gera um link do WhatsApp com mensagem pré-escrita.
 * Usa-se assim: linkWhatsapp("Vitamina C Natural")
 */
function linkWhatsapp(nomeProduto) {
  const mensagem = nomeProduto
    ? `Olá, gostaria de saber mais sobre o suplemento "${nomeProduto}".`
    : `Olá, gostaria de saber mais sobre os suplementos da ${CONFIG.nomeLoja}.`;

  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}