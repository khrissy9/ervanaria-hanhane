/*
  produtos.js

  ------------------------------------------------------

  Aqui ficam TODOS os produtos da loja.

  Para adicionar um novo produto, copia um bloco { ... },
  cola no fim do array e muda os valores.

  Campos:

  Novos campos:

    beneficios       -> principais benefícios/apoios descritos com linguagem responsável

    indicadoPara     -> necessidades/situações em que o produto pode interessar; não é diagnóstico


    id          -> número único (não repetir)

    nome        -> nome do suplemento

    categoria   -> tem de ser igual a um "id" em CATEGORIAS abaixo

    imagem      -> caminho para a foto em images/produtos/

    descricaoCompleta -> aparece na página de detalhes

    composicao  -> baseada no rótulo do produto

    utilizacao  -> modo de uso, conforme o rótulo

    publicoAlvo -> indicado pelo fabricante

    destaque    -> true/false (aparece na página inicial)


  Nota: não há campo de preço — os preços são tratados directamente
  no WhatsApp, por isso não aparecem no site.
*/


const CATEGORIAS = [
   { id: "kits", nome: "Kits de Saúde" },
  { id: "adultos", nome: "Para Adultos" },

  { id: "criancas", nome: "Para Crianças" },

  { id: "vitaminas", nome: "Vitaminas" },

  { id: "minerais", nome: "Minerais" },

  { id: "energia", nome: "Energia" },

  { id: "imunidade", nome: "Imunidade" },

  { id: "beleza", nome: "Beleza" },

  { id: "ervas", nome: "Ervas & Fitoterapia" },

  { id: "cha", nome: "Chás Naturais" },

  { id: "vigor", nome: "Vigor" },

  { id: "emagrecimento", nome: "Controlo de Peso" },

  { id: "saude-feminina", nome: "Saúde Feminina" },

  { id: "nutricao", nome: "Nutrição" },

  { id: "higiene", nome: "Higiene & Cuidado Pessoal" },

  { id: "diversos", nome: "Diversos" },

];


// Avisos de segurança reutilizados pelos produtos abaixo (campo "cuidados").

const CUIDADOS = {

  padrao:
    "Não exceder a dose indicada na embalagem. Manter fora do alcance de crianças. Grávidas, lactantes ou pessoas sob medicação devem consultar um profissional de saúde antes de usar. Não substitui uma alimentação equilibrada nem acompanhamento médico.",

  criancas:
    "Produto para crianças — usar apenas sob orientação de um profissional de saúde, respeitando a dose indicada na embalagem.",

  cha:
    "Não é recomendado como substituto de água ao longo do dia. Grávidas, lactantes ou pessoas com condições de saúde específicas devem consultar um profissional de saúde antes de consumir.",

  topico:
    "Uso externo apenas. Interromper o uso em caso de irritação e consultar um profissional de saúde. Evitar contacto com os olhos.",

  intimo:
    "Produto de higiene/bem-estar feminino. Consultar um profissional de saúde antes de usar, sobretudo em caso de gravidez, infeção ou sintomas fora do normal.",

};



const PRODUTOS = [

  {

    id: 1,

    nome: "Cordyceps Plus Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/Cordyceps.jpg",

    descricaoCompleta: "O Cordyceps é indicado para pessoas com fadiga crónica, com imunidade comprometida, pessoas sofrendo de crancro, doencças respiratóricas crónicas e doenças renais.",

    beneficios: "Apoio à vitalidade, resistência e disposição; evidência clínica ainda limitada.",

    indicadoPara: "Pode interessar adultos que relatam cansaço ocasional, baixa disposição ou que procuram apoio à rotina física. Não deve ser apresentado como tratamento para fadiga persistente, doença respiratória ou outra doença.",

    composicao: "Extrato de Cordyceps sinensis. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 2,

    nome: "Spirulina Plus Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/Spirulina.jpg",

    descricaoCompleta: "A Spirulina é indicada para pessoas com distúribios gastrointestinais, pessoas com câncer após radioterapia ou quimioterapia .",

    beneficios: "Complemento nutricional com proteína, micronutrientes e compostos antioxidantes.",

    indicadoPara: "Pode interessar pessoas com alimentação pouco variada ou que procuram reforço nutricional. Não substitui refeições nem deve ser usado para tratar anemia, diabetes ou outras doenças sem avaliação profissional.",

    composicao: "Extrato de espirulina. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 3,

    nome: "Propolis Plus Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/propolis.jpg",

    descricaoCompleta: "O própolis é indicado para pessoas com dores de ouvido, angina do peito e doenças respiratórias.",

    beneficios: "Fonte de compostos fenólicos com potencial antioxidante e apoio geral às defesas.",

    indicadoPara: "Pode interessar adultos que procuram suporte geral à imunidade e proteção antioxidante. Pessoas alérgicas a produtos de abelha devem ter especial cautela.",

    composicao: "Extrato de própolis. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 4,

    nome: "Ganoderma Plus Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/ganoderma.jpg",

    descricaoCompleta: "O Ganoderma lucidum regula imunidade, acelera recuperação após quimioterapia ou radioterapia, com doenças crónicas do fígado e pessoas com problemas de cólicas.",

    beneficios: "Apoio ao bem-estar geral e fornecimento de compostos estudados pela ação antioxidante.",

    indicadoPara: "Pode interessar adultos que procuram suporte geral ao bem-estar e às defesas do organismo. Não deve ser apresentado como tratamento para cancro, infeções ou outras doenças.",

    composicao: "Extrato de Ganoderma lucidum. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 5,

    nome: "Cardio-Puissance Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/cardio.jpg",

    descricaoCompleta: "O Cardio-Puissance é para adultos com problemas de coração, hipertensão, dilata artérias coronárias e alivia angina do peito.",

    beneficios: "Complemento ao estilo de vida voltado ao bem-estar cardiovascular.",

    indicadoPara: "Pode interessar adultos que procuram apoio nutricional ao estilo de vida cardiovascular. Pessoas com hipertensão, colesterol elevado, doença cardíaca ou que usam medicamentos devem consultar um profissional antes de usar.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 6,

    nome: "Soja Puissance Capsule (Isoflavonas)",

    categoria: "saude-feminina",

    imagem: "../images/produtos/soypower.jpg",

    descricaoCompleta: "As isoflavonas, indicado para mulheres com problemas de insónia, baixo histrogênio em pré ou pós menopausa, cancro da mama, hosteoporose, melhora a pele e a qualidade de vida sexual.",

    beneficios: "Pode apoiar o conforto na menopausa, especialmente afrontamentos, com efeito variável.",

    indicadoPara: "Pode interessar mulheres adultas na fase de menopausa que procuram apoio para sintomas como afrontamentos. Não deve ser usado para tratar problemas hormonais sem orientação profissional.",

    composicao: "Isoflavonas de soja. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 7,

    nome: "A-Power Capsule",

    categoria: "imunidade",

    imagem: "../images/produtos/a-power.jpg",

    descricaoCompleta: "Indicado para pessoas com imunidade comprometida, previne e ajuda no tratamento do cranco.",

    beneficios: "Combinação vegetal para suporte geral de vitalidade e defesas naturais.",

    indicadoPara: "Pode interessar adultos que procuram suporte geral de vitalidade e imunidade. Não substitui vacinação, alimentação adequada ou tratamento de infeções.",

    composicao: "Espinheiro-mar, Anoectochilus formosanus, Ganoderma, Ginseng.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 8,

    nome: "Vigueur Capsule",

    categoria: "vigor",

    imagem: "../images/produtos/vigpower.png",

    descricaoCompleta: "O Vigueur é indicado para homens que pretendem melhorar a sexualidade",

    beneficios: "Apoio geral à disposição e vitalidade, conforme a composição do produto.",

    indicadoPara: "Pode interessar adultos com baixa disposição ocasional que procuram complemento à alimentação e ao descanso. Cansaço persistente deve ser investigado por um profissional.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 9,

    nome: "Ginseng RHs Capsule",

    categoria: "energia",

    imagem: "../images/produtos/ginseng.png",

    descricaoCompleta: "O Ginseng é um anti-cancerismo, doenças respiratórias crónicas, cicatrização de feridas.",

    beneficios: "Apoio à disposição; alguns estudos sugerem pequeno efeito sobre fadiga.",

    indicadoPara: "Pode interessar adultos com cansaço ou baixa disposição ocasional. Não é substituto de sono adequado nem tratamento para fadiga persistente.",

    composicao: "Extrato de Ginseng. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 10,

    nome: "Pro-Slim Tea",

    categoria: "emagrecimento",

    imagem: "../images/produtos/pro-slim.jpg",

    descricaoCompleta: "O Pro-Slim Tea remove toxinas e auxilia na perda de pesos, para quem tem obesidade.",

    beneficios: "Complemento de uma rotina de alimentação equilibrada, atividade física e controlo de peso.",

    indicadoPara: "Pode interessar adultos que procuram apoio dentro de um plano de controlo de peso. Não é indicado como solução para obesidade ou como substituto de alimentação.",

    composicao: "Mistura de ervas em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 11,

    nome: "Kuding Plus Tea",

    categoria: "cha",

    imagem: "../images/produtos/kuding%20tea.jpg",

    descricaoCompleta: "O Kuding alivia a dor, inflamação, trata dores de cabeça, garganta inflamada, constipação ou gripe.",

    beneficios: "Bebida tradicional para bem-estar e hidratação variada.",

    indicadoPara: "Pode interessar adultos que procuram variar o consumo de chás naturais. Pessoas que usam medicamentos ou têm condições de saúde devem confirmar a segurança antes do consumo regular.",

    composicao: "Folhas de Kuding em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 12,

    nome: "Pine Pollen Tea",

    categoria: "cha",

    imagem: "../images/produtos/pine%20pollen.jpg",

    descricaoCompleta: "O Pine Pollen Tea melhora a digestão, retarda o envelhecimento, e alivia a fadiga cronica e é para todas idades.",

    beneficios: "Bebida tradicional de pólen de pinheiro para consumo como chá.",

    indicadoPara: "Pode interessar adultos que procuram uma bebida natural diferente. Pessoas com alergias a pólen devem ter cautela.",

    composicao: "Pólen de pinheiro em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 13,

    nome: "Cleansing Tea (Limpeza Intestinal)",

    categoria: "cha",

    imagem: "../images/produtos/in-cleansing.jpg",

    descricaoCompleta: "Apoio à regularidade intestinal e ao funcionamento digestivo.",

    beneficios: "Apoio ao conforto digestivo e à regularidade intestinal, conforme a fórmula.",

    indicadoPara: "Pode interessar adultos com sensação ocasional de digestão pesada ou irregularidade intestinal leve. Não deve ser usado para tratar obstipação persistente, dor abdominal ou doença intestinal.",

    composicao: "Mistura de ervas em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 14,

    nome: "Balsam Pear Tea (Chá Ku Gua)",

    categoria: "cha",

    imagem: "../images/produtos/balsam%20tea.jpg",

    descricaoCompleta: "Apoio ao metabolismo da glicose e ao equilíbrio do açúcar no sangue.",

    beneficios: "Bebida tradicional de melão-amargo; não substitui controlo médico da glicose.",

    indicadoPara: "Pode interessar adultos que procuram uma bebida vegetal tradicional. Pessoas com diabetes ou que usam medicamentos para baixar a glicose devem ter orientação profissional.",

    composicao: "Melão-amargo em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 15,

    nome: "Lipid Care Tea",

    categoria: "cha",

    imagem: "../images/produtos/lipid%20tea.jpg",

    descricaoCompleta: "Apoio ao metabolismo das gorduras e ao controlo do perfil lipídico.",

    beneficios: "Complemento de hábitos saudáveis relacionados com o perfil lipídico.",

    indicadoPara: "Pode interessar adultos preocupados com alimentação e saúde cardiovascular. Não substitui estatinas, outros medicamentos ou acompanhamento para colesterol elevado.",

    composicao: "Mistura de ervas em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 16,

    nome: "Breast Care Tea",

    categoria: "saude-feminina",

    imagem: "../images/produtos/breast%20tea.jpg",

    descricaoCompleta: "Suporte ao bem-estar e cuidado da saúde mamária feminina.",

    beneficios: "Bebida de bem-estar feminino; benefícios específicos dependem da fórmula.",

    indicadoPara: "Pode interessar mulheres adultas que procuram uma bebida de bem-estar feminino. Qualquer caroço, dor, secreção ou alteração mamária deve ser avaliada por um profissional.",

    composicao: "Mistura de ervas em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 17,

    nome: "Kidney Tonifying Capsule (Homem)",

    categoria: "vigor",

    imagem: "../images/produtos/kidney%20men.jpg",

    descricaoCompleta: "Suporte ao sistema urinário e à vitalidade masculina.",

    beneficios: "Apoio geral à vitalidade masculina; não substitui avaliação urológica.",

    indicadoPara: "Pode interessar homens adultos que procuram apoio geral à vitalidade. Não deve ser apresentado como tratamento para doença renal, disfunção erétil ou problemas urinários.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Homens adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 18,

    nome: "Kidney Tonifying Capsule (Mulher)",

    categoria: "saude-feminina",

    imagem: "../images/produtos/kidney%20woman.jpg",

    descricaoCompleta: "Suporte ao sistema urinário e ao bem-estar feminino.",

    beneficios: "Apoio geral à vitalidade feminina; não substitui avaliação ginecológica.",

    indicadoPara: "Pode interessar mulheres adultas que procuram apoio geral à vitalidade. Não deve ser apresentado como tratamento para doença renal, problemas hormonais ou ginecológicos.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 19,

    nome: "Protein Powder",

    categoria: "nutricao",

    imagem: "../images/produtos/protein%20powder.jpg",

    descricaoCompleta: "Aumento da ingestão de proteínas e suporte à manutenção e recuperação muscular.",

    beneficios: "Ajuda a aumentar a ingestão de proteína e apoiar manutenção/ganho de massa muscular.",

    indicadoPara: "Pode interessar praticantes de musculação e pessoas com dificuldade de atingir as necessidades proteicas pela alimentação. Não substitui uma dieta equilibrada e a quantidade adequada depende da pessoa.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 20,

    nome: "Vitamin C Tablet",

    categoria: "vitaminas",

    imagem: "../images/produtos/vitamina%20c.jpg",

    descricaoCompleta: "Suporte antioxidante, imunidade e formação de colagénio.",

    beneficios: "Contribui para colagénio, defesa antioxidante e funcionamento normal do organismo.",

    indicadoPara: "Pode interessar pessoas com baixa ingestão de frutas e vegetais ou necessidade aumentada identificada por profissional. Não deve ser vendido como cura de constipações ou infeções.",

    composicao: "Vitamina C (ácido ascórbico). Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 21,

    nome: "Multi-Vitamins Tablet (Adultos)",

    categoria: "vitaminas",

    imagem: "../images/produtos/multi%20vitamina%20adults.jpg",

    descricaoCompleta: "Complementação geral de vitaminas e minerais para adultos.",

    beneficios: "Ajuda a complementar a ingestão diária de várias vitaminas.",

    indicadoPara: "Pode interessar adultos com alimentação pouco variada ou necessidades nutricionais específicas. Deve-se evitar combinar vários suplementos sem verificar as doses totais.",

    composicao: "Mistura de vitaminas. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 22,

    nome: "Multi-Vitamins Tablet (Crianças)",

    categoria: "criancas",

    imagem: "../images/produtos/multi%20vitamina%20kid.jpg",

    descricaoCompleta: "Complementação de vitaminas e minerais para apoiar o crescimento e desenvolvimento infantil.",

    beneficios: "Complementa vitaminas na infância quando a alimentação não cobre as necessidades.",

    indicadoPara: "Pode interessar crianças com ingestão nutricional inadequada quando recomendado. Não deve ser usado para tratar falta de apetite, atraso de crescimento ou doenças sem avaliação pediátrica.",

    composicao: "Mistura de vitaminas. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem e orientação de um profissional de saúde.",

    publicoAlvo: "Crianças",

    destaque: true,

    cuidados: CUIDADOS.criancas,

  },



  {

    id: 23,

    nome: "Calcium Tablet (Crianças)",

    categoria: "criancas",

    imagem: "../images/produtos/calcium%20kid.jpg",

    descricaoCompleta: "Suporte à formação e manutenção de ossos e dentes durante o crescimento.",

    beneficios: "Contribui para ossos e dentes e para funções musculares e nervosas normais.",

    indicadoPara: "Pode interessar crianças com ingestão insuficiente de cálcio ou necessidades identificadas por profissional. Não deve ser dado em doses arbitrárias.",

    composicao: "Cálcio. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem e orientação de um profissional de saúde.",

    publicoAlvo: "Crianças",

    destaque: false,

    cuidados: CUIDADOS.criancas,

  },



  {

    id: 24,

    nome: "Calcium Capsule",

    categoria: "minerais",

    imagem: "../images/produtos/calcium.jpg",

    descricaoCompleta: "Suporte aos ossos, dentes e função muscular.",

    beneficios: "Apoia ossos, dentes, músculos, nervos e coagulação normal.",

    indicadoPara: "Pode interessar adultos com baixa ingestão de alimentos ricos em cálcio ou necessidades aumentadas identificadas por profissional, incluindo algumas pessoas mais velhas. Excesso também pode causar problemas.",

    composicao: "Cálcio. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 25,

    nome: "Zinc Tablet (Adultos)",

    categoria: "minerais",

    imagem: "../images/produtos/zinco.jpg",

    descricaoCompleta: "Suporte à imunidade, cicatrização e metabolismo normal.",

    beneficios: "Contribui para função imunitária, cicatrização, crescimento e metabolismo.",

    indicadoPara: "Pode interessar adultos com dieta pobre em fontes de zinco ou deficiência confirmada. Não deve ser apresentado como tratamento de infeções; doses excessivas podem causar efeitos adversos.",

    composicao: "Zinco. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 26,

    nome: "Zinc Tablet (Crianças)",

    categoria: "criancas",

    imagem: "../images/produtos/zinco%20kid.jpg",

    descricaoCompleta: "Suporte ao crescimento, desenvolvimento e funcionamento do sistema imunitário infantil.",

    beneficios: "Contribui para crescimento, desenvolvimento, cicatrização e função imunitária infantil.",

    indicadoPara: "Pode interessar crianças com ingestão insuficiente de zinco quando recomendado por profissional. Não usar doses de adulto em crianças.",

    composicao: "Zinco. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem e orientação de um profissional de saúde.",

    publicoAlvo: "Crianças",

    destaque: false,

    cuidados: CUIDADOS.criancas,

  },



  {

    id: 27,

    nome: "Lecithin Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/lecithin.jpg",

    descricaoCompleta: "Apoio ao metabolismo das gorduras e à função cerebral e do sistema nervoso.",

    beneficios: "Fornece fosfolípidos como complemento nutricional.",

    indicadoPara: "Pode interessar adultos que procuram um complemento nutricional. Não deve ser apresentado como tratamento para colesterol, fígado ou problemas de memória.",

    composicao: "Lecitina. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 28,

    nome: "Deep Sea Fish Oil Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/deep%20sea.jpg",

    descricaoCompleta: "Suporte cardiovascular, cerebral e ocular através de ácidos gordos ómega-3.",

    beneficios: "Fornece EPA/DHA e outros ómega-3 importantes para funções celulares.",

    indicadoPara: "Pode interessar pessoas com baixo consumo de peixe e que procuram aumentar a ingestão de ómega-3. Pessoas que usam anticoagulantes ou têm condições cardiovasculares devem consultar um profissional.",

    composicao: "Óleo de peixe. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 29,

    nome: "Gastric Health Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/gastric.jpg",

    descricaoCompleta: "Suporte à digestão e ao conforto gástrico.",

    beneficios: "Apoio geral ao conforto digestivo, conforme a composição.",

    indicadoPara: "Pode interessar adultos que procuram apoio geral ao conforto digestivo. Dor abdominal persistente, refluxo intenso, vómitos ou sangue nas fezes exigem avaliação médica.",

    composicao: "Rhizoma Dioscoreae. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 30,

    nome: "Garlic Oil Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/garlic.jpg",

    descricaoCompleta: "Suporte cardiovascular, imunidade e metabolismo.",

    beneficios: "Fornece compostos sulfurados do alho como complemento alimentar.",

    indicadoPara: "Pode interessar adultos que procuram complementar a alimentação com compostos derivados do alho. Pessoas que usam anticoagulantes ou têm cirurgia programada devem consultar um profissional.",

    composicao: "Óleo de alho. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 31,

    nome: "Chitosan Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/chitosan.jpg",

    descricaoCompleta: "Apoio ao controlo da absorção de gorduras e ao controlo do peso.",

    beneficios: "Fibra utilizada como complemento em estratégias de controlo alimentar.",

    indicadoPara: "Pode interessar adultos que já seguem alimentação equilibrada e procuram complemento ao controlo de peso. Pessoas com alergia a crustáceos devem verificar a origem da quitosana.",

    composicao: "Quitosana. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 32,

    nome: "Aloe Vera Plus Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/aloe%20vera.jpg",

    descricaoCompleta: "Suporte ao bem-estar digestivo e intestinal.",

    beneficios: "Pode apoiar o bem-estar digestivo conforme a preparação de Aloe Vera.",

    indicadoPara: "Pode interessar adultos que procuram um produto de bem-estar digestivo, mas a composição deve ser confirmada no rótulo. Evitar uso oral na gravidez e amamentação sem orientação profissional.",

    composicao: "Extrato de Aloe Vera. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 33,

    nome: "Compound Marrow Powder",

    categoria: "nutricao",

    imagem: "../images/produtos/compound.jpg",

    descricaoCompleta: "Complemento nutricional para suporte de ossos, articulações e ingestão de nutrientes.",

    beneficios: "Complemento nutricional em pó; benefícios dependem da composição do rótulo.",

    indicadoPara: "Pode interessar adultos que procuram um complemento nutricional, desde que a composição e a dose sejam verificadas. Não deve ser usado para tratar anemia, fraqueza ou outras condições sem diagnóstico.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 34,

    nome: "Ginkgo Biloba Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/ginko%20biloba.jpg",

    descricaoCompleta: "Suporte à circulação e à função cognitiva e memória.",

    beneficios: "Suporte potencial à função cognitiva; evidência clínica é variável.",

    indicadoPara: "Pode interessar adultos que procuram suporte cognitivo, especialmente em idades mais avançadas, após avaliação adequada. Deve haver cautela com anticoagulantes e antes de cirurgias.",

    composicao: "Extrato de Ginkgo Biloba. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 35,

    nome: "HepatSure Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/hepatsure.jpg",

    descricaoCompleta: "Suporte à função e ao bem-estar do fígado.",

    beneficios: "Complemento de hábitos de cuidado hepático; não é detox nem tratamento.",

    indicadoPara: "Pode interessar adultos que procuram complemento a hábitos de alimentação saudável. Pessoas com fígado gorduroso, hepatite, enzimas elevadas ou consumo elevado de álcool devem procurar avaliação profissional.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 36,

    nome: "Royal Jelly Capsule",

    categoria: "energia",

    imagem: "../images/produtos/royal%20jelly.jpg",

    descricaoCompleta: "Suporte à nutrição, energia e vitalidade geral.",

    beneficios: "Complemento de vitalidade e nutrição; evidência para benefícios específicos é limitada.",

    indicadoPara: "Pode interessar adultos que procuram um suplemento de bem-estar e vitalidade. Pessoas com alergia a produtos de abelha devem evitar ou consultar um profissional.",

    composicao: "Geleia real. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 37,

    nome: "iShine Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/ishine.jpg",

    descricaoCompleta: "Apoio ao relaxamento, descanso e qualidade do sono.",

    beneficios: "Apoio ao relaxamento e descanso, conforme os ingredientes.",

    indicadoPara: "Pode interessar adultos com dificuldade ocasional de relaxar ou que procuram uma rotina de descanso. Insónia persistente, ansiedade ou depressão devem ser avaliadas por profissional.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 38,

    nome: "Slimming Capsule",

    categoria: "emagrecimento",

    imagem: "../images/produtos/slimming.jpg",

    descricaoCompleta: "Apoio ao controlo e redução do peso.",

    beneficios: "Complemento de um plano estruturado de controlo de peso.",

    indicadoPara: "Pode interessar adultos que procuram apoio dentro de um plano de controlo de peso. Não deve ser usado como substituto de refeições nem como tratamento da obesidade.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 39,

    nome: "Parashield Capsule",

    categoria: "imunidade",

    imagem: "../images/produtos/parashield.jpg",

    descricaoCompleta: "Suporte às defesas naturais do organismo e ao bem-estar intestinal.",

    beneficios: "Apoio geral às defesas naturais; não trata parasitas ou infeções.",

    indicadoPara: "Pode interessar adultos que procuram suporte geral ao bem-estar. Não deve substituir diagnóstico ou tratamento de infeções parasitárias.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 40,

    nome: "Anti-Aging Capsule",

    categoria: "beleza",

    imagem: "../images/produtos/anti%20aging.jpg",

    descricaoCompleta: "Suporte antioxidante e ao envelhecimento saudável e cuidado da pele.",

    beneficios: "Suporte antioxidante e ao cuidado da pele/envelhecimento saudável.",

    indicadoPara: "Pode interessar adultos preocupados com manutenção da pele e envelhecimento saudável. Proteção solar, alimentação e cuidados dermatológicos continuam a ser fundamentais.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 41,

    nome: "Super CoQ-10 Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/super%20q-10.jpg",

    descricaoCompleta: "Suporte à produção de energia celular e à saúde cardiovascular.",

    beneficios: "Participa na produção de energia celular e na proteção antioxidante.",

    indicadoPara: "Pode interessar adultos que procuram suporte energético celular ou que tenham indicação profissional para CoQ10. Pessoas que usam varfarina ou medicamentos crónicos devem consultar um profissional.",

    composicao: "Coenzima Q10. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 42,

    nome: "Prostacare Capsule",

    categoria: "vigor",

    imagem: "../images/produtos/prostcare.jpg",

    descricaoCompleta: "Suporte à saúde da próstata e ao sistema urinário masculino.",

    beneficios: "Apoio ao bem-estar masculino/prostático, sem substituir avaliação médica.",

    indicadoPara: "Pode interessar homens adultos preocupados com bem-estar urinário/prostático. Dificuldade para urinar, sangue na urina ou dor exigem avaliação médica.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Homens adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 43,

    nome: "Glucoblock Capsule",

    categoria: "ervas",

    imagem: "../images/produtos/gluco.jpg",

    descricaoCompleta: "Apoio ao metabolismo da glicose e ao equilíbrio do açúcar no sangue.",

    beneficios: "Complemento de estilo de vida saudável para saúde metabólica; não substitui medicamentos.",

    indicadoPara: "Pode interessar adultos que procuram apoio nutricional dentro de um estilo de vida saudável. Pessoas com diabetes ou que usam medicamentos para glicose devem consultar um profissional antes de usar.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 44,

    nome: "Arthropower Capsule (Joint Health Plus)",

    categoria: "ervas",

    imagem: "../images/produtos/arthropower.jpg",

    descricaoCompleta: "Suporte às articulações, mobilidade e conforto articular.",

    beneficios: "Apoio ao conforto articular como complemento a hábitos saudáveis.",

    indicadoPara: "Pode interessar adultos com desconforto articular ocasional que procuram complemento ao exercício e hábitos saudáveis. Dor persistente, inchaço ou limitação de movimento devem ser avaliados.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 45,

    nome: "Bone Care Plaster",

    categoria: "diversos",

    imagem: "../images/produtos/bone%20care%20plaster.jpg",

    descricaoCompleta: "Uso externo para proporcionar conforto localizado a músculos e articulações.",

    beneficios: "Cuidado externo localizado; não trata ossos, fraturas ou doenças articulares.",

    indicadoPara: "Pode interessar adultos que procuram conforto localizado. Não aplicar sobre feridas ou pele irritada e não usar para substituir avaliação de dor óssea ou articular.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Aplicar conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.topico,

  },



  {

    id: 46,

    nome: "Detoxin Pad",

    categoria: "diversos",

    imagem: "../images/produtos/detoxin%20pad.jpg",

    descricaoCompleta: "Produto de uso externo para cuidado dos pés; comercializado como produto de bem-estar.",

    beneficios: "Produto de cuidado externo para os pés; não há base para prometer detox.",

    indicadoPara: "Pode interessar adultos que procuram uma experiência de cuidado pessoal para os pés. Não deve ser vendido como método de desintoxicação, perda de peso ou tratamento de doenças.",

    composicao: "Vitamina C, extratos botânicos, quitosana (ver rótulo para lista completa).",

    utilizacao: "Aplicar conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.topico,

  },



  {

    id: 47,

    nome: "Blueberry Juice High VC",

    categoria: "nutricao",

    imagem: "../images/produtos/blueberry%20juice.jpg",

    descricaoCompleta: "Complemento nutricional com mirtilo e vitamina C, com acção antioxidante.",

    beneficios: "Bebida com mirtilo e vitamina C para complemento nutricional e antioxidante.",

    indicadoPara: "Pode interessar adultos que têm baixa ingestão de frutas e procuram uma bebida nutricional. Não substitui fruta fresca nem tratamento de deficiência nutricional diagnosticada.",

    composicao: "Extrato de mirtilo, Vitamina C. Ver rótulo para quantidades.",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 48,

    nome: "Green World Super Nutrition (Blueberry)",

    categoria: "nutricao",

    imagem: "../images/produtos/super%20nutrition.jpg",

    descricaoCompleta: "Complementação nutricional geral, fornecendo nutrientes conforme a composição do produto.",

    beneficios: "Complemento nutricional em pó; benefícios dependem da composição.",

    indicadoPara: "Pode interessar adultos que procuram complementar a dieta. A composição e a dose devem ser confirmadas no rótulo antes de recomendar para uma necessidade específica.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 49,

    nome: "Eye Care Softgel II",

    categoria: "beleza",

    imagem: "../images/produtos/eye%20care.jpg",

    descricaoCompleta: "Suporte nutricional à saúde dos olhos e à visão.",

    beneficios: "Suporte nutricional ao bem-estar ocular; não substitui oftalmologista.",

    indicadoPara: "Pode interessar adultos preocupados com manutenção da saúde ocular. Alterações de visão, dor ocular ou perda súbita de visão exigem avaliação oftalmológica.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 50,

    nome: "Clear Lung Tea",

    categoria: "cha",

    imagem: "../images/produtos/clear%20lung%20tea.jpg",

    descricaoCompleta: "Suporte ao conforto das vias respiratórias e ao bem-estar respiratório.",

    beneficios: "Bebida de ervas para bem-estar respiratório; não trata doenças pulmonares.",

    indicadoPara: "Pode interessar adultos que procuram uma bebida quente de bem-estar. Falta de ar, dor no peito, febre persistente ou tosse prolongada exigem avaliação médica.",

    composicao: "Mistura de ervas em saquetas.",

    utilizacao: "Preparar como infusão, conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.cha,

  },



  {

    id: 51,

    nome: "Green World Herbs (Pasta Dentífrica)",

    categoria: "higiene",

    imagem: "../images/produtos/green%20world%20herbs.jpg",

    descricaoCompleta: "Higiene oral, limpeza dos dentes e cuidado das gengivas.",

    beneficios: "Higiene oral diária e limpeza de placa; fórmula deve ser confirmada no rótulo.",

    indicadoPara: "Pode interessar toda a família para higiene oral diária. Não substitui consulta odontológica quando há dor, sangramento persistente, cáries ou infeção.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Usar na escovagem diária, conforme indicação da embalagem.",

    publicoAlvo: "Toda a família",

    destaque: false,

    cuidados: CUIDADOS.topico,

  },



  {

    id: 52,

    nome: "Meal Cellulose Tablet",

    categoria: "nutricao",

    imagem: "../images/produtos/meal%20cellulose.jpg",

    descricaoCompleta: "Fonte de fibra para apoiar a regularidade intestinal e a saciedade.",

    beneficios: "Fonte de fibra que pode contribuir para regularidade intestinal.",

    indicadoPara: "Pode interessar adultos com ingestão baixa de fibra ou trânsito intestinal irregular. Pessoas com dor abdominal, obstrução intestinal ou sintomas persistentes devem procurar orientação profissional.",

    composicao: "Celulose. Ver rótulo para lista completa.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 53,

    nome: "Blueberry Enzymes Tablet",

    categoria: "nutricao",

    imagem: "../images/produtos/enzyms%20table.jpg",

    descricaoCompleta: "Suporte à digestão através de enzimas e complementação nutricional.",

    beneficios: "Complemento de enzimas e mirtilo; efeito digestivo depende da fórmula.",

    indicadoPara: "Pode interessar adultos que procuram complemento nutricional para a digestão. Não deve ser usado como tratamento de doenças digestivas sem avaliação.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 54,

    nome: "Blueberry Coffee",

    categoria: "nutricao",

    imagem: "../images/produtos/coffe.jpg",

    descricaoCompleta: "Energia e disposição através do café, com compostos antioxidantes do mirtilo.",

    beneficios: "Cafeína pode aumentar temporariamente alerta; mirtilo fornece compostos vegetais.",

    indicadoPara: "Pode interessar adultos que procuram uma bebida para aumentar a disposição e atenção durante o dia. Pessoas sensíveis à cafeína, grávidas ou com determinadas condições cardiovasculares devem limitar o consumo conforme orientação profissional.",

    composicao: "Café, extrato de mirtilo. Ver rótulo para lista completa.",

    utilizacao: "Preparar conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 55,

    nome: "Uterus Cleansing Pills",

    categoria: "saude-feminina",

    imagem: "../images/produtos/uteruscleansing.jpg",

    descricaoCompleta: "Produto de bem-estar íntimo feminino, comercializado para suporte ao cuidado uterino.",

    beneficios: "Produto de bem-estar íntimo; não existe base para prometer limpeza do útero.",

    indicadoPara: "Pode interessar mulheres que procuram produtos de bem-estar íntimo, mas devem consultar um ginecologista antes do uso. Sangramento anormal, dor pélvica, corrimento com odor ou febre exigem avaliação.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir rigorosamente as indicações da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.intimo,

  },



  {

    id: 56,

    nome: "Vitamin D3 Capsule",

    categoria: "vitaminas",

    imagem: "../images/produtos/vitamin%20d3.jpg",

    descricaoCompleta: "Suporte à absorção de cálcio, saúde dos ossos e músculos e funcionamento imunitário.",

    beneficios: "Ajuda na absorção de cálcio e apoia ossos, músculos e imunidade.",

    indicadoPara: "Pode interessar adultos com baixa vitamina D identificada, baixa exposição solar ou ingestão insuficiente. Doses elevadas devem ser evitadas sem orientação, pois vitamina D em excesso pode causar toxicidade.",

    composicao: "Vitamina D3. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: true,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 57,

    nome: "Ovary Nutrition",

    categoria: "saude-feminina",

    imagem: "../images/produtos/ovary%20%20nutrition.jpg",

    descricaoCompleta: "Suporte nutricional ao bem-estar do sistema reprodutivo feminino.",

    beneficios: "Suplemento de bem-estar feminino; benefícios específicos dependem da composição.",

    indicadoPara: "Pode interessar mulheres adultas que procuram apoio nutricional feminino. Não deve ser apresentado como tratamento para quistos, SOP, infertilidade ou alterações hormonais.",

    composicao: "Ver rótulo para lista completa de ingredientes.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.intimo,

  },



  {

    id: 58,

    nome: "Green World Women Care Gel",

    categoria: "saude-feminina",

    imagem: "../images/produtos/woman%20care%20gel.jpg",

    descricaoCompleta: "Higiene e cuidado íntimo feminino.",

    beneficios: "Higiene/cuidado íntimo feminino conforme instruções do fabricante.",

    indicadoPara: "Pode interessar mulheres que procuram cuidado e higiene íntima. Ardor, comichão, corrimento anormal, odor forte ou dor devem ser avaliados por profissional.",

    composicao: "Extratos de Sophora flavescens, Leonurus, Cnidium, Phellodendron, Angelica sinensis.",

    utilizacao: "Seguir rigorosamente as indicações da embalagem.",

    publicoAlvo: "Mulheres adultas",

    destaque: false,

    cuidados: CUIDADOS.intimo,

  },



  {

    id: 59,

    nome: "Green World Olive Soap",

    categoria: "higiene",

    imagem: "../images/produtos/olive%20soap.jpg",

    descricaoCompleta: "Higiene e limpeza diária da pele.",

    beneficios: "Limpeza diária da pele e remoção de suor, oleosidade e impurezas.",

    indicadoPara: "Pode interessar pessoas que procuram um sabonete para higiene diária. Em caso de pele muito sensível, eczema ou irritação persistente, deve-se interromper o uso e procurar orientação.",

    composicao: "Extrato de azeitona. Ver rótulo para lista completa.",

    utilizacao: "Usar na higiene diária, conforme indicação da embalagem.",

    publicoAlvo: "Toda a família",

    destaque: false,

    cuidados: CUIDADOS.topico,

  },



  {

    id: 60,

    nome: "Beta-Carotene & Lycopene Capsule",

    categoria: "beleza",

    imagem: "../images/produtos/carotene.jpg",

    descricaoCompleta: "Suporte antioxidante e apoio à saúde da pele e visão.",

    beneficios: "Fornece carotenoides antioxidantes; betacaroteno pode contribuir para vitamina A.",

    indicadoPara: "Pode interessar adultos que procuram complementar a ingestão de carotenoides. Fumadores e ex-fumadores devem ter cautela com suplementos de altas doses de betacaroteno.",

    composicao: "Betacaroteno, licopeno. Ver rótulo para quantidades.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 61,

    nome: "Clear (saquetas)",

    categoria: "diversos",

    imagem: "../images/produtos/clear.jpg",

    descricaoCompleta: "Bebida em pó para bem-estar geral; a função específica depende da composição do produto.",

    beneficios: "Benefícios indeterminados até confirmar composição no rótulo.",

    indicadoPara: "Pode interessar adultos apenas depois de confirmar a composição, dose e finalidade no rótulo. Não recomendar para uma doença específica sem conhecer os ingredientes.",

    composicao: "Ver rótulo da embalagem (maioritariamente em chinês).",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 62,

    nome: "Wake (saquetas)",

    categoria: "diversos",

    imagem: "../images/produtos/wake.jpg",

    descricaoCompleta: "Bebida em pó associada à energia e disposição; a função específica depende da composição.",

    beneficios: "Finalidade indeterminada até confirmar composição; o nome sugere disposição, mas não confirma ingredientes.",

    indicadoPara: "Pode interessar adultos que procuram uma bebida de disposição, mas a composição deve ser confirmada antes da utilização. Pessoas sensíveis a estimulantes devem ter cautela.",

    composicao: "Ver rótulo da embalagem (maioritariamente em chinês).",

    utilizacao: "Dissolver conforme indicação da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 63,

    nome: "Grape Seed Extract Plus Capsule (OPC)",

    categoria: "beleza",

    imagem: "../images/produtos/grape%20seed%20extract.jpg",

    descricaoCompleta: "Suporte antioxidante e à circulação e saúde vascular.",

    beneficios: "Fonte de OPC e outros polifenóis com ação antioxidante.",

    indicadoPara: "Pode interessar adultos que procuram suporte antioxidante e cardiovascular. Não deve ser apresentado como tratamento para varizes, hipertensão ou outras doenças.",

    composicao: "Extrato de semente de uva. Ver rótulo para quantidade.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 64,

    nome: "NMN Longevity Capsule",

    categoria: "beleza",

    imagem: "../images/produtos/nmn%20longevity.jpg",

    descricaoCompleta: "Suporte ao metabolismo celular e ao envelhecimento saudável.",

    beneficios: "Precursor de NAD+ investigado no metabolismo celular e envelhecimento saudável.",

    indicadoPara: "Pode interessar adultos interessados em envelhecimento saudável e nutrição celular, desde que entendam que a evidência clínica ainda está em desenvolvimento. Não deve ser vendido como produto que prolonga a vida.",

    composicao: "NMN. Ver rótulo para quantidade exata.",

    utilizacao: "Seguir as indicações da embalagem.",

    publicoAlvo: "Adultos",

    destaque: false,

    cuidados: CUIDADOS.padrao,

  },



  {

    id: 65,

    nome: "Enjoyable Sanitary Napkin (Uso de Dia)",

    categoria: "higiene",

    imagem: "../images/produtos/enjoyable%20day.jpg",

    descricaoCompleta: "Protecção e absorção do fluxo menstrual durante o dia.",

    beneficios: "Absorção de fluxo menstrual e conforto durante o uso diurno.",

    indicadoPara: "Pode interessar mulheres que procuram proteção menstrual para uso diurno. Irritação, coceira, dor ou corrimento anormal devem ser avaliados.",

    composicao: "Ver rótulo da embalagem.",

    utilizacao: "Uso único. Trocar regularmente conforme necessidade.",

    publicoAlvo: "Mulheres",

    destaque: false,

    cuidados: CUIDADOS.intimo,

  },



  {

    id: 66,

    nome: "Enjoyable Sanitary Napkin (Uso de Noite)",

    categoria: "higiene",

    imagem: "../images/produtos/enjoyable%20night.jpg",

    descricaoCompleta: "Protecção e absorção do fluxo menstrual durante a noite.",

    beneficios: "Proteção e absorção de fluxo menstrual durante o período noturno.",

    indicadoPara: "Pode interessar mulheres que procuram proteção menstrual noturna. Se houver sangramento muito intenso, dor anormal ou sintomas persistentes, recomenda-se avaliação por profissional de saúde.",

    composicao: "Ver rótulo da embalagem.",

    utilizacao: "Uso único. Trocar regularmente conforme necessidade.",

    publicoAlvo: "Mulheres",

    destaque: false,

    cuidados: CUIDADOS.intimo,

  },
    {
    id: 67,
    nome: "Kit Desintoxicação",
    categoria: "kits",
    imagem: "../images/produtos/kit-desintoxicacao.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com a desintoxicação e bem-estar geral.",
    beneficios: "Conjunto de produtos destinado a complementar uma rotina de alimentação equilibrada e hábitos saudáveis.",
    indicadoPara: "Adultos interessados em complementar os seus cuidados de bem-estar.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 68,
    nome: "Kit Sistema Circulatório",
    categoria: "kits",
    imagem: "../images/produtos/kit-circulatorio.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com o sistema circulatório e bem-estar cardiovascular.",
    beneficios: "Conjunto de produtos destinado a complementar hábitos de vida saudáveis.",
    indicadoPara: "Adultos interessados em complementar os cuidados relacionados com o bem-estar circulatório.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 69,
    nome: "Kit Sistema Digestivo",
    categoria: "kits",
    imagem: "../images/produtos/kit-digestivo.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com o sistema digestivo.",
    beneficios: "Conjunto de produtos destinado a complementar hábitos alimentares e de bem-estar digestivo.",
    indicadoPara: "Adultos interessados em complementar os cuidados relacionados com o bem-estar digestivo.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 70,
    nome: "Kit Cancro",
    categoria: "kits",
    imagem: "../images/produtos/kit-cancro.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos comercializado na linha de cuidados e bem-estar relacionados com a saúde.",
    beneficios: "Conjunto de produtos destinado a complementar cuidados gerais de saúde e bem-estar.",
    indicadoPara: "Adultos. Este kit não substitui diagnóstico, tratamento ou acompanhamento médico de doenças oncológicas.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações das respectivas embalagens e orientação de profissional de saúde quando aplicável.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 71,
    nome: "Kit Emagrecimento",
    categoria: "kits",
    imagem: "../images/produtos/kit-emagrecimento.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos destinado a complementar uma rotina de controlo de peso e hábitos de vida saudáveis.",
    beneficios: "Complemento de uma rotina que inclua alimentação equilibrada e actividade física.",
    indicadoPara: "Adultos interessados em complementar uma rotina de controlo de peso.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 72,
    nome: "Kit Vista",
    categoria: "kits",
    imagem: "../images/produtos/kit-vista.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com o bem-estar ocular e a visão.",
    beneficios: "Conjunto de produtos destinado a complementar cuidados nutricionais relacionados com o bem-estar ocular.",
    indicadoPara: "Adultos interessados em complementar os cuidados nutricionais relacionados com a saúde ocular.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 73,
    nome: "Kit Cérebro",
    categoria: "kits",
    imagem: "../images/produtos/kit-cerebro.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com o bem-estar e suporte nutricional da função cognitiva.",
    beneficios: "Conjunto de produtos destinado a complementar hábitos de vida saudáveis e cuidados nutricionais.",
    indicadoPara: "Adultos interessados em complementar os cuidados nutricionais relacionados com o bem-estar cognitivo.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

  {
    id: 74,
    nome: "Kit Parasitário",
    categoria: "kits",
    imagem: "../images/produtos/kit-parasitario.jpg",
    preco: "Preço sob consulta",
    descricaoCompleta: "Kit de produtos da linha de cuidados relacionados com o bem-estar digestivo e intestinal.",
    beneficios: "Conjunto de produtos destinado a complementar cuidados gerais de bem-estar digestivo.",
    indicadoPara: "Adultos interessados em produtos de bem-estar digestivo. Não substitui diagnóstico ou tratamento médico de infecções parasitárias.",
    composicao: "Consultar os produtos que integram o kit.",
    utilizacao: "Seguir as indicações específicas constantes das embalagens dos produtos que integram o kit.",
    publicoAlvo: "Adultos",
    destaque: false,
    cuidados: CUIDADOS.padrao,
  },

];