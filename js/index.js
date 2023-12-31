/* 
GCR: SCRIPT PRINCIPAL DE LA PAGINA WEB
*/
//Scroll restaurado
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
} 
//ABOUT ME
function redSocialMedia(socialM) {
    switch (socialM) {
        case "linkedin":
            window.open("https://www.linkedin.com/in/guadalupe-cruz-ramirez-9244a8234/");
            break;
        case "whatsapp":
            window.open("https://api.whatsapp.com/send?phone=5214496481567");
            break;
        case "instagram":
            window.open("https://instagram.com/lupita_cr18?igshid=M2RkZGJiMzhjOQ==");
            break;
    }
}


//HABILIDADES
//Animacion de progress bar
let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');
let progressStartValue = 0;
let progressEndValue = 85;
let speed = 50;

let circularProgress2 = document.querySelector('.circular-progress2');
let progressValue2 = document.querySelector('.progress-value2');
let progressEndValue2 = 40;
let speed2 = 50;
let progressStartValue2 = 0;

let circularProgress3 = document.querySelector('.circular-progress3');
let progressValue3 = document.querySelector('.progress-value3');
let progressEndValue3 = 80;
let speed3 = 50;
let progressStartValue3 = 0;

let circularProgress4 = document.querySelector('.circular-progress4');
let progressValue4 = document.querySelector('.progress-value4');
let progressEndValue4 = 45;
let speed4 = 50;
let progressStartValue4 = 0;

function ejecutarProgress() {
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#6284E6 ${progressStartValue * 3.9}deg , #99b2fb 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
    
    
    let progress2 = setInterval(() => {
        progressStartValue2++;
        progressValue2.textContent = `${progressStartValue2}%`;
        circularProgress2.style.background = `conic-gradient(#6284E6 ${progressStartValue2 * 3.9}deg , #99b2fb 0deg)`;
        if (progressStartValue2 == progressEndValue2) {
            clearInterval(progress2);
        }
    }, speed2);
    
    let progress3 = setInterval(() => {
        progressStartValue3++;
        progressValue3.textContent = `${progressStartValue3}%`;
        circularProgress3.style.background = `conic-gradient(#6284E6 ${progressStartValue3 * 3.9}deg , #99b2fb 0deg)`;
        if (progressStartValue3 == progressEndValue3) {
            clearInterval(progress3);
        }
    }, speed3);
    
    let progress4 = setInterval(() => {
        progressStartValue4++;
        progressValue4.textContent = `${progressStartValue4}%`;
        circularProgress4.style.background = `conic-gradient(#6284E6 ${progressStartValue4 * 3.9}deg , #99b2fb 0deg)`;
        if (progressStartValue4 == progressEndValue4) {
            clearInterval(progress4);
        }
    }, speed4);
}

//PORTAFOLIO: filtrado de imagenes
$(window).on("load" ,function() {
     
    var $contenedorPortafolio = $('.portafolioContainer');
    $contenedorPortafolio.isotope({
        filter:'*',
        animationOptions: {
            queue: true
        }
    });
    $('.portafolio-nav li').click(function () {
        $('.portafolio-nav .current').removeClass('current');
        $(this).addClass('current');
        var selector =  $(this).attr('data-filter');
        $contenedorPortafolio.isotope({
            filter: selector,
            animationOptions: {
                queue: true
            }
        });
        return false;

    });
})



  