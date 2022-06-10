function verificaLogin(login){
    return true;
}
function verificaSenha(senha){
    return true;
}
function verificacaoPrimaria(login,senha){


    return true;
}
function realizarLogin(loginUsuario, senhaUsuario){
    var responseText = null;
    verificacaoPrimaria(loginUsuario,senhaUsuario);
    //URL completa que o Rafael passar
    /*responseText = $.ajax({url: "http://127.0.0.1/servidor-teste/realizarLogin.php", Type:"Json", method:"POST", 
            data:{login:loginUsuario,senha:senhaUsuario}, async: false}).responseText;*/
    responseText = $.ajax({url: "https://photo-world-api2.herokuapp.com/api/user/"+loginUsuario, Type:"Json", method:"GET", 
            async: false}).responseText;        
    response = JSON.parse(responseText);
    //alert(responseText);
    /*Alterar de acordo com o que o back padronizar*/
    if(response.result == 0 || response == null || response.result == "0" ){
        //return "Falha na autentificação tente";
        return response.message;
    }else{
        localStorage.setItem("auth",JSON.stringify(response));
        window.location.assign("../index.html");
    }
}