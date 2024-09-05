function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Cria uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada resultado da pesquisa e adiciona ao HTML
    for (let Data of Datas) {
      resultados += `
        <div class="item-resultado">
          <h2>${Data.title}</h2>
          <p class="descricao-meta">${Data.descricao}</p>
          <a href=${Data.link_url} target="_blank">${Data.link}</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo HTML do elemento com os resultados
    section.innerHTML = resultados;
  }
  
  // Função auxiliar (não utilizada atualmente)
  function pesquisar() {
    alert('ainda não funcionamos');
  }