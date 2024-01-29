let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuaio = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
        
    if(numeroUsuaio === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(numeroUsuaio > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto en menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let nuemroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(nuemroGenerado +' numero');
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length ==numeroMaximo){
    asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(nuemroGenerado)){
            return generarNumeroSecreto(listaNumerosSorteados);
        } else{
            listaNumerosSorteados.push(nuemroGenerado);
            return nuemroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero y mostrarlo al jugador
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();