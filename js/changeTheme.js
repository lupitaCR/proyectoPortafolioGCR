/* 
GCR: SCRIPT PARA CAMBIAR MODO NOCTURNO A LA PAGINA WEB
*/
var modeIconTheme = document.getElementById("dl-icon");

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");

    //Navbar
    modeIconTheme.innerHTML = `
    <span class="material-symbols-outlined">
        <svg xmlns="http://www.w3.org/2000/svg" fill="dark" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 
        105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 
        255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 
        198t198 82Zm-10-270Z"/></svg>
    </span>
    `;
    document.querySelector("#iconNavbar").setAttribute("src", "./img/iconoDark.png");
    document.querySelector("#myNavbar").setAttribute("class", "background-navbarDark navbar navbar-expand-md fixed-top");
    document.querySelector("#aAcerca").setAttribute("class", "nav-link fontMenuDark");
    document.querySelector("#aHabilid").setAttribute("class", "nav-link fontMenuDark");
    document.querySelector("#aResumen").setAttribute("class", "nav-link fontMenuDark");
    document.querySelector("#aPortafolio").setAttribute("class", "nav-link fontMenuDark");
    //carousel
    document.querySelector("#btnDownCV").setAttribute("class", "btn btn-lg botonDark");
    document.querySelector("#circle1").setAttribute("fill", "#f593b3");
    document.querySelector("#nombreCarousel").setAttribute("class", "fontTitulosDark");
    //About me
    document.querySelector("#sub1").setAttribute("class", "fontSubtitulosDark");
    document.querySelector("#line1").setAttribute("class", "disenoLineaSubDark");
    document.querySelector("#cardAbout").setAttribute("class", "card rounded estiloAboutDark");
    document.querySelector("#sectionSM").setAttribute("class", "d-flex justify-content-evenly mt-4 p-1 fondoSMDark");
    document.querySelector("#tituloCard").setAttribute("class", "fontTitulosDark");
    document.querySelector("#tituloCard2").setAttribute("class", "fontTitulosDark");
    document.querySelector("#iconSM1").setAttribute("class", "iconosDark");
    document.querySelector("#iconSM2").setAttribute("class", "iconosDark");
    document.querySelector("#iconSM3").setAttribute("class", "iconosDark");
     //Habilidades
    document.querySelector("#sub2").setAttribute("class", "fontSubtitulosDark");
    document.querySelector("#line2").setAttribute("class", "disenoLineaSubDark");
        //progress bar
        document.querySelector("#progress1").setAttribute("class", "cambiaDark");
        document.querySelector("#progress2").setAttribute("class", "cambiaDark");
        document.querySelector("#progress3").setAttribute("class", "cambiaDark");
        document.querySelector("#progress4").setAttribute("class", "cambiaDark");
        //titulos
        document.querySelector("#progressTitle1").setAttribute("class", "text-uppercase fontSubtitulos2Dark");
        document.querySelector("#progressTitle2").setAttribute("class", "text-uppercase fontSubtitulos2Dark");
        document.querySelector("#progressTitle3").setAttribute("class", "text-uppercase fontSubtitulos2Dark");
        document.querySelector("#progressTitle4").setAttribute("class", "text-uppercase fontSubtitulos2Dark");
    
    //Resumen
    document.querySelector("#sub3").setAttribute("class", "fontSubtitulosDark");
    document.querySelector("#line3").setAttribute("class", "disenoLineaSubDark");

    //Resumen
    document.querySelector("#sub4").setAttribute("class", "fontSubtitulosDark");
    document.querySelector("#line4").setAttribute("class", "disenoLineaSubDark");
    //Footer
    document.querySelector("#footerOlas").setAttribute("fill", "#6284E6");
    document.querySelector("#imagenFooter").setAttribute("src", "./img/iconoDark.png");
    document.querySelector("#footerContent").setAttribute("class", "divFooterDark d-flex justify-content-center align-items-center");
    document.querySelector("#textFooter").setAttribute("class", "textFooterDark");

}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");

    //navbar
    document.querySelector("#dl-icon");
    modeIconTheme.innerHTML = `
    <span class="material-symbols-outlined">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 
        85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 
        0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 
        17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 
        0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 
        0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 
        495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 
        28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 
        12-28 11.5T183-183Zm297-297Z"/></svg>
    </span>
    `;
    document.querySelector("#iconNavbar").setAttribute("src", "./img/iconoLight.png");
    document.querySelector("#myNavbar").setAttribute("class", "background-navbarLight navbar navbar-expand-md fixed-top");
    document.querySelector("#aAcerca").setAttribute("class", "nav-link fontMenuLight");
    document.querySelector("#aHabilid").setAttribute("class", "nav-link fontMenuLight");
    document.querySelector("#aResumen").setAttribute("class", "nav-link fontMenuLight");
    document.querySelector("#aPortafolio").setAttribute("class", "nav-link fontMenuLight");
    //carousel
    document.querySelector("#btnDownCV").setAttribute("class", "btn btn-lg botonPrimario");
    document.querySelector("#circle1").setAttribute("fill", "#6284E6");
    document.querySelector("#nombreCarousel").setAttribute("class", "fontTitulosLight");
    //About me
    document.querySelector("#sub1").setAttribute("class", "fontSubtitulosLight");
    document.querySelector("#line1").setAttribute("class", "disenoLineaSubLight");
    document.querySelector("#cardAbout").setAttribute("class", "card rounded estiloAboutLight");
    document.querySelector("#sectionSM").setAttribute("class", "d-flex justify-content-evenly mt-4 p-1 fondoSMLight");
    document.querySelector("#tituloCard").setAttribute("class", "fontTitulosLight");
    document.querySelector("#tituloCard2").setAttribute("class", "fontTitulosLight");
    document.querySelector("#iconSM1").setAttribute("class", "iconosLight");
    document.querySelector("#iconSM2").setAttribute("class", "iconosLight");
    document.querySelector("#iconSM3").setAttribute("class", "iconosLight");
    //Habilidades
    document.querySelector("#sub2").setAttribute("class", "fontSubtitulosLight");
    document.querySelector("#line2").setAttribute("class", "disenoLineaSubLight");
        //progress 1
        document.querySelector("#progress1").setAttribute("class", " circular-progress");
        document.querySelector("#progress2").setAttribute("class", " circular-progress2");
        document.querySelector("#progress3").setAttribute("class", " circular-progress3");
        document.querySelector("#progress4").setAttribute("class", " circular-progress4");
        //titulos
        document.querySelector("#progressTitle1").setAttribute("class", "text-uppercase fontSubtitulos2");
        document.querySelector("#progressTitle2").setAttribute("class", "text-uppercase fontSubtitulos2");
        document.querySelector("#progressTitle3").setAttribute("class", "text-uppercase fontSubtitulos2");
        document.querySelector("#progressTitle4").setAttribute("class", "text-uppercase fontSubtitulos2");
    
    //Resumen
    document.querySelector("#sub3").setAttribute("class", "fontSubtitulosLight");
    document.querySelector("#line3").setAttribute("class", "disenoLineaSubLight");

    //Resumen
    document.querySelector("#sub4").setAttribute("class", "fontSubtitulosLight");
    document.querySelector("#line4").setAttribute("class", "disenoLineaSubLight");

    //Footer
    document.querySelector("#footerOlas").setAttribute("fill", "#FDCEDE");
    document.querySelector("#imagenFooter").setAttribute("src", "./img/iconoLight.png");
    document.querySelector("#footerContent").setAttribute("class", "divFooterLight d-flex justify-content-center align-items-center");
    document.querySelector("#textFooter").setAttribute("class", "textFooterLight");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") == "light"?
    temaOscuro() : temaClaro(); 
}
