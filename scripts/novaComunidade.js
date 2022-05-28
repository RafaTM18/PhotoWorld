function novaComunidade(formData){
    var result = $.ajax( {
                    url: "https://photo-world-api2.herokuapp.com/api/community",
                    type: 'JSON',
                    method:"POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    async: false
                }).responseText;
    
        return result;

}