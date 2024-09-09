function pesquisarVegetal() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Seleciona a seção HTML onde o usuário digita a palavra de busca
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let nome = "";
  let descricao = "";
  let tag = "";

  if (!campoPesquisa) {
    section.innerHTML = "Favor digitar o nome de um vegetal!";

    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre cada vegetal no array de vegetais
  for (let vegetal of vegetais) {
    nome = vegetal.nome.toLowerCase();
    descricao = vegetal.descricao.toLowerCase();
    tag = vegetal.tag.toLowerCase();

    // se nome includes campoPesquisa
    // então faz uma coisa....
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tag.includes(campoPesquisa)
    ) {
      // Constrói o HTML para cada vegetal, incluindo nome, descrição, época de plantio, tempo de colheita e link
      resultados += `
        <div class="item-resultado">
            <h2><a href="#" target="_blank">${vegetal.nome}</a></h2>
                <p class="descricao-meta">
                ${vegetal.descricao}
                <p class="descricao-meta">
                Época de plantio: ${vegetal.epocaPlantio}
                </p>
                <p class="descricao-meta">
                Tempo para colher: ${vegetal.tempoColheita}
                </p>
                <p>
                Espaçamento: ${vegetal.espacamentoEntre} x ${
        vegetal.espacamentoLinha
      }
                </p>
                <p>
                Área por planta: ${
                  vegetal.espacamentoEntre * vegetal.espacamentoLinha
                }
                </p>    
            </p>
            
            <a href=${vegetal.link} target="_blank">
                Mais informações</a>
        </div>

        `;
    }
  }

  if (!resultados) {
    resultados = "Infelizmente não conheço esse vegetal.";
  }

  // Atualiza o conteúdo HTML da seção de resultados com os resultados construídos
  section.innerHTML = resultados;
}
