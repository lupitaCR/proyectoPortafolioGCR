var modeIconTheme = document.getElementById("dl-icon");

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    modeIconTheme.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;

    //Navbar
    document.querySelector("#iconNavbar").setAttribute("src", "./img/iconoDark.png");
    document.querySelector("#myNavbar").setAttribute("class", "navbar navbar-expand-lg background-navbarDark");
    
    document.querySelector("#btnDownCV").setAttribute("class", "btn btn-lg botonDark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon");
    modeIconTheme.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;

    //navbar
    document.querySelector("#iconNavbar").setAttribute("src", "./img/iconoLight.png");
    document.querySelector("#myNavbar").setAttribute("class", "navbar navbar-expand-lg background-navbarLight");
    document.querySelector("#btnDownCV").setAttribute("class", "btn btn-lg botonPrimario");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") == "light"?
    temaOscuro() : temaClaro(); 
}