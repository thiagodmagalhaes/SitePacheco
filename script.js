function openNav() {
    var navbar = document.getElementById("navbar");
    var width = navbar.style.width;

    if (width === '100%' || width === '') {
        navbar.style.width = '0%';
    } else {
        navbar.style.width = '100%';
    }
}