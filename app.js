function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa === '') {
        section.innerHTML = `<span class="sem-resultados">Nada foi pesquisado</span>`;
        return;
    }

    // Normalizar o texto: remover acentos e converter para minúsculas
    campoPesquisaNormalizado = removerAcentos(campoPesquisa.toLowerCase());

    let resultados = "";
    for (let dado of dados) {
        const tituloNormalizado = removerAcentos(dado.titulo.toLowerCase());
        const descricaoNormalizada = removerAcentos(dado.descricao.toLowerCase());

        // Comparação flexível: verifica se o texto normalizado da pesquisa está contido em qualquer parte do título ou descrição
        if (tituloNormalizado.indexOf(campoPesquisaNormalizado) !== -1 ||
            descricaoNormalizada.indexOf(campoPesquisaNormalizado) !== -1) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.link_titulo} target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informacoes</a>  
                </div>
            `;
        }
    }

    section.innerHTML = resultados;
    if (!resultados){
        section.innerHTML = `<span class="sem-resultados">Nenhum planeta foi encontrado</span>`;
        return;
    }
}

function removerAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
    

