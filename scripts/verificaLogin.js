function verificaLogin(){    
    if(localStorage.getItem("auth") == null)
        location.assign("./paginas/login.html");
    else
        return true;
}