function pesquisarVegetal() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada vegetal no array de vegetais
  for (let vegetal of vegetais) {
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
                  </p>
                <a href=${vegetal.link} target="_blank">
                    Mais informações</a>
            </div>
        
        `;
  }

  // Atualiza o conteúdo HTML da seção de resultados com os resultados construídos
  section.innerHTML = resultados;
}
