const scrollButton = document.getElementById('scrollDown');
const exploreSection = document.getElementById('explorar');

if (scrollButton && exploreSection) {
    scrollButton.addEventListener('click', () => {
        exploreSection.scrollIntoView({ behavior: 'smooth' });
    });
}

function abrirPagina(pagina){
    window.location.href = pagina;
}
