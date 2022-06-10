function novoLugar(formData){
    var result = $.ajax( {
                    url: "https://photo-world-api2.herokuapp.com/api/place",
                    type: 'JSON',
                    method:"POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    async: false
                })
                if(result.status == 422){
                    return JSON.parse(result.responseText).errors[0].message;  
               }
                           
               ///return JSON.parse(result).erros[0].message;
               return JSON.parse(result.responseText).message; 
}