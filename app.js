function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase();

    if(!campoPesquisa){
        section.innerHTML= "Nada foi encontrado.";
        return; 
    }

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        console.log(titulo.includes(campoPesquisa))
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
        
        
    }
    if (!resultados) {
        resultados = "Nada foi encontrado.";
    }

    section.innerHTML = resultados;
}

//console.log(dados[1]);

