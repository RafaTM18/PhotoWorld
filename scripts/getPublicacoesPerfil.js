
async function getPublicacoesPerfil(main){
    
    var publicacoes = null;
    var result = $.ajax({url: "https://photo-world-api2.herokuapp.com/api/post", Type:"Text", async: false }).responseText;
    publicacoes = JSON.parse(result);
    
    console.log(result);
    console.log(publicacoes);
   
   

    for (key in publicacoes) {
        //console.log(publicacoes[key]);
        var pub = publicacoes[key];
        main.appendChild(getPublicacaoDivPerfil(pub,key));
        //alert(pub.autor);
     }
    

}

