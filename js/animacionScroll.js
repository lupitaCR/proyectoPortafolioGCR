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
    ScrollReveal().reveal('#cardAbout',{
        duration:2000,
        distance: '150%',
        origin:'top'
    });
    
//HABILIDADES
    ScrollReveal().reveal('#animadoHability', { afterReveal: ejecutarProgress });

//RESUMEN
ScrollReveal().reveal('#resumen1',{
    duration:2000,
    distance: '100%',
    origin:'left'
}); 
ScrollReveal().reveal('#resumen2',{
    duration:2000,
    distance: '100%',
    origin:'right'
});
ScrollReveal().reveal('#resumen3',{
    duration:2000,
    distance: '100%',
    origin:'left'
});
ScrollReveal().reveal('#resumen4',{
    duration:2000,
    distance: '100%',
    origin:'right'
});
ScrollReveal().reveal('#resumen5',{
    duration:2000,
    distance: '100%',
    origin:'left'
}); 
    
//PORTAFOLIO

ScrollReveal().reveal('#proyectGaleria',{
    distance: '0px',
    opacity: 0.8
});

