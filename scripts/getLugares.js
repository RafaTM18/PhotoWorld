
async function getLugares(main){
    
    var lugares = null;
    var result = $.ajax({url: "https://photo-world-api2.herokuapp.com/api/place", Type:"Text", async: false }).responseText;
    lugares = JSON.parse(result);
    
    console.log(result);
    console.log(lugares);
   
   

    for (key in lugares) {
        //console.log(publicacoes[key]);
        var lugar = lugares[key];
        main.appendChild(getLugarDiv(lugar,key));
        //alert(pub.autor);
     }
    

}
