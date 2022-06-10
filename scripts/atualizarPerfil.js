function atualizarPerfil(formData){
    var result = $.ajax( {
                    url: "https://photo-world-api2.herokuapp.com/api/user/"+JSON.parse(localStorage.getItem("auth")).id,
                    type: 'JSON',
                    method:"PUT",
                    data: formData,
                    processData: false,
                    contentType: false,
                    async: false
                });
    
    if(result.status == 422){
        return JSON.parse(result.responseText).errors[0].message;  
    }             
    
    return JSON.parse(result.responseText).message;   

}