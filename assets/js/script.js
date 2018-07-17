const navbar = document.querySelector('.nav');
const classnav = 'nav-scroll';

function scrollBar() {
    const windowTop = window.pageYOffset; 
    if (windowTop > 360) {
        navbar.classList.add(classnav);
    }
    else{
        navbar.classList.remove(classnav);
    }
}

window.addEventListener('scroll', function() {
    scrollBar();
})

const titulo = document.querySelector(".descricao-header > h1 ");
const subtitulo = document.querySelector(".descricao-header > p ");

digitarTexto( titulo );
setTimeout( function(){
    digitarTexto( subtitulo );
}, 1200)

function digitarTexto( elemento ) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 110 * i)
    });
}
