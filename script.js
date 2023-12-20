document.addEventListener("DOMContentLoaded", function () {
    // Obtenha todos os radio buttons
    const radioButtons = document.querySelectorAll('.manual-navigation .manual-btn');

    // Obtenha todos os slides
    const slides = document.querySelectorAll('.slider .slide');

    // Itere sobre os radio buttons
    radioButtons.forEach(function (radioButton, index) {
        // Adicione um evento de clique a cada botão
        radioButton.addEventListener('click', function () {
            // Oculte todos os slides
            slides.forEach(function (slide) {
                slide.style.display = 'none';
            });

            // Exiba o slide correspondente ao botão clicado
            slides[index].style.display = 'block';
        });
    });
});
function openNav() {
    var navbar = document.getElementById("navbar");
    var width = navbar.style.width;

    if (width === '100%' || width === '') {
        navbar.style.width = '0%';
    } else {
        navbar.style.width = '100%';
    }
}


