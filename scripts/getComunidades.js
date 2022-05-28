
async function getComunidades(main){
    
    var comunidades = null;
    var result = $.ajax({url: "https://photo-world-api2.herokuapp.com/api/community", Type:"Text", async: false }).responseText;
    comunidades = JSON.parse(result);
    
    console.log(result);
    console.log(comunidades);
   
   

    for (key in comunidades) {
        //console.log(publicacoes[key]);
        var comunidade = comunidades[key];
        main.appendChild(getComunidadeDiv(comunidade,key));
        //alert(pub.autor);
     }
    

}
