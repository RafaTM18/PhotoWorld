function getPublicacaoDiv(publicao, key){
    console.log("Publição: " + JSON.stringify(publicao));
    var id = JSON.parse(localStorage.getItem("auth")).id;
    var resultNome =$.ajax({url: "https://photo-world-api2.herokuapp.com/api/user/" +id , Type:"JSON", async: false }).responseText;
    var nomeAutor = JSON.parse(resultNome);
    var autorText = document.createTextNode(nomeAutor.nome);
    var descricaoText = document.createTextNode(publicao.desc);
    const publicacaoDiv = document.createElement("div");
    publicacaoDiv.setAttribute("class","col-sm-12 publicacao");
    publicacaoDiv.setAttribute("name",publicao.id);
        const card = document.createElement("div");
        card.setAttribute("class","card shadow mb-2");

            const cardHeader = document.createElement("div");
            cardHeader.setAttribute("class","card-header py-2");
            
                const autor = document.createElement("h6");
                autor.setAttribute("class","m-0 font-weight-bold text-primary");
                autor.setAttribute("name","autor");
                autor.appendChild(autorText);
            cardHeader.appendChild(autor);

            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body d-flex");
                const divImg = document.createElement("div");
                divImg.setAttribute("class", "text-center col-sm-6");
                    const imgPublicacao = document.createElement("img");
                    imgPublicacao.setAttribute("class","img-fluid px-2 px-sm-4 mt-2 mb-2");
                    imgPublicacao.setAttribute("style","width: 35rem;");
                    imgPublicacao.setAttribute("src",publicao.img);
                    imgPublicacao.setAttribute("name","img");
                divImg.appendChild(imgPublicacao);
                
                const divTexto = document.createElement("div");
                divTexto.setAttribute("class","col-sm-6");
                    
                    const descricao = document.createElement("p");
                    descricao.setAttribute("name","descricao");
                    descricao.appendChild(descricaoText);

                    const linkMapa = document.createElement("a");
                    linkMapa.setAttribute("target","_blanck");
                    linkMapa.setAttribute("id",publicao.id);
                    //linkMapa.setAttribute("width","80%");
                    //linkMapa.setAttribute("height","50%");
                    //linkMapa.setAttribute("max-width","100px");
                    //linkMapa.setAttribute("max-hight","100px");
                    linkMapa.setAttribute("href",publicao.local); //PRecisa ser alterado
                        const textoLink = document.createTextNode("Ver no MAPS");
                    linkMapa.appendChild(textoLink);

                    console.log("publicao.local: " + publicao.local);
                divTexto.appendChild(descricao);
                divTexto.appendChild(linkMapa);
            cardBody.appendChild(divImg);
            cardBody.appendChild(divTexto);
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
    publicacaoDiv.appendChild(card);

    //publicacaoDiv.innerText = "Olá mundo ... diz" + publicao.autor;
    return publicacaoDiv;
}