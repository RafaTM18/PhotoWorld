function getComunidadeDiv(comunidade, key){
    console.log("\n comunidade: " + JSON.stringify(comunidade));
    var nomecomunidadeText = document.createTextNode(comunidade.nome);
    //var descricaoText = document.createTextNode(publicao.descricao);
    const comunidadeDiv = document.createElement("div");
    comunidadeDiv.setAttribute("class","col-sm-4 comunidade");
    comunidadeDiv.setAttribute("name",comunidade.id);
        const card = document.createElement("div");
        card.setAttribute("class","card shadow mb-2");

            const cardHeader = document.createElement("div");
            cardHeader.setAttribute("class","card-header py-2");

                const nomecomunidade = document.createElement("h6");
                nomecomunidade.setAttribute("class","m-0 font-weight-bold text-primary");
                nomecomunidade.setAttribute("name","comunidade");
                nomecomunidade.appendChild(nomecomunidadeText);

            cardHeader.appendChild(nomecomunidade);

            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body p-0");
                const divAreaDescricao = document.createElement("div");
                divAreaDescricao.setAttribute("class","col-sm-12 text-center");
                    const divDescricao = document.createElement("p");
                    divDescricao.setAttribute("class","p-1 text-center");
                        const descricaoText = document.createTextNode(comunidade.desc);
                    divDescricao.appendChild(descricaoText);
                divAreaDescricao.appendChild(divDescricao);

               
            cardBody.appendChild(divAreaDescricao);
            
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
    comunidadeDiv.appendChild(card);

    //publicacaoDiv.innerText = "Olá mundo ... diz" + publicao.autor;
    return comunidadeDiv;
}