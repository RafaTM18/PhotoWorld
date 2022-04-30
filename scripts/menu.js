const main = $ (document.getElementById("main"));
const mnPerfil = document.getElementById("mnPerfil");
const mnLugares = document.getElementById("mnLugares");
const mnPublicacoes = document.getElementById("mnPublicacoes");
	
	
    function actionMenu(){
        limparMain();
        var ativo =document.getElementsByClassName('active');
        ativo[0].classList.remove('active');    
    }
    function limparMain(){
        main.empty();
    }
    mnPerfil.onclick = (e) => {  
        actionMenu();
        mnPerfil.classList.add("active");
        $(main).load("./paginas/meuPerfil.html");
    }

    mnLugares.onclick = (e) => {  
        
        actionMenu();
        mnLugares.classList.add("active");
        $(main).load("./paginas/lugares.html");
    }

    mnPublicacoes.onclick = (e) => {  
        
        actionMenu();
        mnPublicacoes.classList.add("active");
        $(main).load("./paginas/publicacoes.html");
    }