/* 
GCR: SCRIPT PARA AGREGAR EFECTOS DE ANIMACION A LA PAGINA WEB
*/

//CAROUSEL
    ScrollReveal().reveal('#nombreCarousel',{
        delay:100,
        duration:2000,
        distance: '150%',
        origin:'right',
        opacity: null
    });

    ScrollReveal().reveal('#carreraCarousel',{
        duration:2000,
        distance: '150%',
        origin:'right',
        opacity: null
    });

//ABOUT ME
    ScrollReveal().reveal('.estiloAbout',{
        duration:2000,
        distance: '150%',
        origin:'top'
    });
    
//HABILIDADES
    ScrollReveal().reveal('#animadoHability', { afterReveal: ejecutarProgress });

