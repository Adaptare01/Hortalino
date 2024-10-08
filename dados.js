let vegetais = [
  {
    nome: "Brócolis",
    epocaPlantio: ["Outono", "Primavera"],
    espacamentoLinha: 45,
    espacamentoEntre: 60,
    tempoColheita: 60,
    descricao:
      "Rico em vitaminas C e K, o brócolis é conhecido por suas propriedades anticancerígenas e antioxidantes.",
    link: "https://pt.wikipedia.org/wiki/Br%C3%B3colis",
    tag: "Vitamina K  Folha  Médio  Amargo  Verde  Inverno",
  },
  {
    nome: "Couve-flor",
    epocaPlantio: ["Outono", "Primavera"],
    espacamentoLinha: 60,
    espacamentoEntre: 60,
    tempoColheita: 80,
    descricao:
      "A couve-flor é uma excelente fonte de vitamina C e fibras, além de conter compostos que ajudam a fortalecer o sistema imunológico.",
    link: "https://pt.wikipedia.org/wiki/Couve-flor",
    tag: "Vitamina C  Flor  Médio  Leve  Branco  Inverno",
  },
  {
    nome: "Cenoura",
    epocaPlantio: ["Outono", "Inverno"],
    espacamentoLinha: 5,
    espacamentoEntre: 20,
    tempoColheita: 70,
    descricao:
      "Rica em betacaroteno, a cenoura é essencial para a saúde da visão e um antioxidante poderoso.",
    link: "https://pt.wikipedia.org/wiki/Cenoura",
    tag: "Vitamina A  Raiz  Pequeno  Doce  Laranja  Outono",
  },
  {
    nome: "Pimentão",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 60,
    espacamentoEntre: 60,
    tempoColheita: 70,
    descricao:
      "O pimentão é uma excelente fonte de vitamina C e antioxidantes, que ajudam a fortalecer o sistema imunológico.",
    link: "https://pt.wikipedia.org/wiki/Piment%C3%A3o",
    tag: "Vitamina C  Fruto  Médio  Doce/Picante  Variado  Verão",
  },
  {
    nome: "Abóbora",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 100,
    espacamentoEntre: 100,
    tempoColheita: 100,
    descricao:
      "Rica em betacaroteno, a abóbora é uma ótima fonte de vitamina A e fibras, contribuindo para a saúde da visão e digestão.",
    link: "https://pt.wikipedia.org/wiki/Ab%C3%B3bora",
    tag: "Vitamina A  Fruto  Grande  Doce  Laranja  Outono",
  },
  {
    nome: "Chuchu",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 80,
    espacamentoEntre: 80,
    tempoColheita: 60,
    descricao:
      "O chuchu é uma excelente fonte de água e fibras, auxiliando na hidratação e digestão.",
    link: "https://pt.wikipedia.org/wiki/Chuchu",
    tag: "Vitamina C  Fruto  Grande  Leve  Verde  Verão",
  },
  {
    nome: "Mandioca",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 50,
    espacamentoEntre: 50,
    tempoColheita: 120,
    descricao:
      "A mandioca é uma boa fonte de carboidratos complexos e fibras, fornecendo energia de forma gradual.",
    link: "https://pt.wikipedia.org/wiki/Mandioca",
    tag: "Carboidratos  Raiz  Grande  Neutro  Marrom  Todo o ano",
  },
  {
    nome: "Alho",
    epocaPlantio: ["Outono"],
    espacamentoLinha: 10,
    espacamentoEntre: 20,
    tempoColheita: 200,
    descricao:
      "O alho é conhecido por suas propriedades antibacterianas e antifúngicas, além de ser rico em antioxidantes.",
    link: "https://pt.wikipedia.org/wiki/Alho",
    tag: "Alicina  Bulbo  Pequeno  Forte  Branco  Inverno",
  },
  {
    nome: "Cebola",
    epocaPlantio: ["Outono"],
    espacamentoLinha: 10,
    espacamentoEntre: 20,
    tempoColheita: 150,
    descricao:
      "Rica em antioxidantes, a cebola ajuda a fortalecer o sistema imunológico e possui propriedades anti-inflamatórias.",
    link: "https://pt.wikipedia.org/wiki/Cebola",
    tag: "Quercetina  Bulbo  Médio  Forte  Amarelo  Inverno",
  },
  {
    nome: "Repolho",
    epocaPlantio: ["Primavera", "Outono"],
    espacamentoLinha: 45,
    espacamentoEntre: 60,
    tempoColheita: 90,
    descricao:
      "O repolho é uma excelente fonte de vitamina C e fibras, além de conter compostos que ajudam a prevenir o câncer.",
    link: "https://pt.wikipedia.org/wiki/Repolho",
    tag: "Vitamina C  Folha  Grande  Levemente amargo  Verde  Outono",
  },
  {
    nome: "Espinafre",
    epocaPlantio: ["Outono", "Primavera"],
    espacamentoLinha: 30,
    espacamentoEntre: 30,
    tempoColheita: 45,
    descricao:
      "Rico em ferro e vitamina K, o espinafre é essencial para a saúde das células sanguíneas e dos ossos.",
    link: "https://pt.wikipedia.org/wiki/Espinafre",
    tag: "Ferro  Folha  Pequeno  Levemente amargo  Verde escuro  Primavera",
  },
  {
    nome: "Cebolinha",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 15,
    espacamentoEntre: 20,
    tempoColheita: 60,
    descricao:
      "A cebolinha é rica em vitamina C e antioxidantes, com um sabor levemente picante.",
    link: "https://pt.wikipedia.org/wiki/Cebolinha",
    tag: "Vitamina K  Folha  Pequeno  Picante  Verde  Primavera",
  },
  {
    nome: "Salsinha",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 15,
    espacamentoEntre: 20,
    tempoColheita: 60,
    descricao:
      "A salsinha é rica em vitamina K e beta-caroteno, além de ter propriedades anti-inflamatórias.",
    link: "https://pt.wikipedia.org/wiki/Salsinha",
    tag: "Vitamina K  Folha  Pequeno  Picante  Verde  Primavera",
  },
  {
    nome: "Abobrinha",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 60,
    espacamentoEntre: 80,
    tempoColheita: 60,
    descricao:
      "A abobrinha é rica em água e fibras, sendo uma ótima opção para uma dieta saudável e equilibrada.",
    link: "https://pt.wikipedia.org/wiki/Abobrinha",
    tag: "Vitamina C  Fruto  Médio  Leve  Verde  Verão",
  },
  {
    nome: "Tomate",
    epocaPlantio: ["Primavera", "Verão"],
    espacamentoLinha: 80,
    espacamentoEntre: 50,
    tempoColheita: 60,
    descricao:
      "O tomate é uma fruta rica em licopeno, um antioxidante que ajuda a prevenir diversas doenças.",
    link: "https://pt.wikipedia.org/wiki/Tomate",
    tag: "Vitamina C  Fruto  Médio  Adocicado  Vermelho  Verão",
  },
];
