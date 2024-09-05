function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

let resultados = ""

for (let Data of Datas) {
resultados += `
    <div class="item-resultado">
    <h2>${Data.title}</h2>
        <p class="descricao-meta">${Data.descricao}</p>
        <a href=${Data.link_url} target="_blank">${Data.link}</a>
</div>
`
}

section.innerHTML = resultados
};

function pesquisar() {
    alert('ainda não funcionamos')
}

