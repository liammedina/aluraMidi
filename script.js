function sonidoPom () {
    document.querySelector('#sonido_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = sonidoPom;