



$(document).ready(function(){

 
    $('#titulo').focusout(function(){
	 if ($('#titulo').val() === "Matrix" || $('#titulo').val() === "Psicosis") {
        	
         } else {
     		alert("Pelicula invalida");
    }
               
    });
    $('#number').isnumeric();
});

