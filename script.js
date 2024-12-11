let listaDeTeclas = document.querySelectorAll('.tecla');
let contador= 0;

function sonidos (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

while (contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function (){
        sonidos(idAudio);
    };
    contador = contador + 1;
}