function validaFormulario(){

    var valor = document.getElementById("numero").value;

    if(valor.length > 2){
        alert("Você digitou um numero invalido");
        return false;
    } else {
        return true;
    }

}