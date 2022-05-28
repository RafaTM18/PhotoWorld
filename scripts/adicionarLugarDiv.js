function adicionarLugarDiv(lugar, key){
    console.log("\n Lugar: " + JSON.stringify(lugar));
    var nomeLugarText = document.createTextNode(lugar.lugar);
    //var descricaoText = document.createTextNode(publicao.descricao);
    const lugarDiv = document.createElement("div");
    lugarDiv.setAttribute("class","col-sm-4 lugar");
    lugarDiv.setAttribute("name",key);
        const card = document.createElement("div");
        card.setAttribute("class","card shadow mb-2");

            const cardHeader = document.createElement("div");
            cardHeader.setAttribute("class","card-header py-2");

                const nomeLugar = document.createElement("h6");
                nomeLugar.setAttribute("class","m-0 font-weight-bold text-primary");
                nomeLugar.setAttribute("name","lugar");
                nomeLugar.appendChild(nomeLugarText);

            cardHeader.appendChild(nomeLugar);

            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body p-0");
                const divImg = document.createElement("div");
                divImg.setAttribute("class", "text-center col-sm-12");
                    const imgLugar = document.createElement("img");
                    imgLugar.setAttribute("class","img-fluid px-0 px-sm-1 mt-1 mb-1");
                    imgLugar.setAttribute("style","width: 35rem;");
                    imgLugar.setAttribute("src",lugar.urlFoto);
                    imgLugar.setAttribute("name","img");
                divImg.appendChild(imgLugar);
                
                const divTexto = document.createElement("div");
                divTexto.setAttribute("class","col-sm-12 text-center");
                    
                   

                    const linkMapa = document.createElement("a");
                    linkMapa.setAttribute("name","linkMapa");
                    linkMapa.setAttribute("target","_blanck");
                    linkMapa.setAttribute("href",lugar.localizacao);
                        const textoLink = document.createTextNode("Ver no MAPS");
                    linkMapa.appendChild(textoLink);

                    console.log("lugar.localizacao: " + lugar.localizacao);
                
                divTexto.appendChild(linkMapa);
            cardBody.appendChild(divImg);
            cardBody.appendChild(divTexto);
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
    lugarDiv.appendChild(card);

    //publicacaoDiv.innerText = "Olá mundo ... diz" + publicao.autor;
    return lugarDiv;
}