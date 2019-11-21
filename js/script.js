var x = 500;
var y = 400;
var time = 1500
var contPrincipal = 0;
var contEmTela = 0;

function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");

    var p1 = Math.floor(Math.random() * x);
    var p2 = Math.floor(Math.random() * y);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
    contEmTela++;
    verificaEmTela();
}

function estourar(elemento){
document.body.removeChild(elemento);
contPrincipal++;
verificaContPrincipal();
contEmTela--;
}

function iniciar() {
    setInterval(addBola, time);
}

function verificaContPrincipal(){
    if(contPrincipal == 10){
        time = 1000;
        iniciar();
    }
    if(contPrincipal == 50){
     time = 900;
     iniciar();   
    }
    if(contPrincipal == 100){
        time = 800;
        iniciar();
    }
}

function verificaEmTela(){
    if(contEmTela > 50){
        window.location.href = "https://www.google.com";
    }
}