/*function realizarCadastro(usuarioValue,apelidoValue,dataNascimentoValue, senhaValue){
    var responseText = null;
    
    */
    /*
    responseText = $.ajax({url: "https://photo-world-api2.herokuapp.com/api/user", Type:"Json", method:"POST", 
            data:{username:usuarioValue,nome:apelidoValue,dtNasc:dataNascimentoValue}, async: false}).responseText;
    response = JSON.parse(responseText);*/
    function realizarCadastro(formData){
    responseText = $.ajax({
            url: "https://photo-world-api2.herokuapp.com/api/user", 
            data: formData,
            type: 'JSON',
            method:"POST",
            data: formData,
            processData: false,
            contentType: false,
            async: false
        }).responseText;
    response = JSON.parse(responseText);
    alert(responseText);

    if(response.message != "Usuário cadastrado com sucesso!" || response == null || response.result == "0" ){
        return "Falha no cadastro, verifique seus campos!";
       
    }else{
        window.location.assign("../paginas/login.html");
    }

    return response.message;
    }
    /*Alterar de acordo com o que o back padronizar*/ 
    /*if(response.message == 0 || response == null || response.result == "0" ){
        //return "Falha na autentificação tente";
        return response.message;
    }else{
        window.location.assign("../paginas/login.html");
    }
    return response.message;
    */
   /*Back padronizou como: message*/
   /*
   if(response.message != "Usuário cadastrado com sucesso!" || response == null || response.result == "0" ){
        return "Falha no cadastro, verifique seus campos!";
       
    }else{
        window.location.assign("../paginas/login.html");
    }

    return response.message;
    
}*/