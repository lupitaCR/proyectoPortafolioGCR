const nombreCache = "PWAIDGS10GCR";
//especificar todos los archivos incluso imagenes, las de iconos son solo para pwa. no son necesarias
const archivosCache = [
"/",
"/index.html",
"/js/index.js",
"/js/app.js",
"/js/jquery-3.7.0.js",
"/js/scrollreveal.js",
"/js/isotope.pkgd.min.js",
"/js/cv_guadalupecr.pdf",
"/js/changeTheme.js",
"/js/bootstrap.bundle.min.js.map",
"/js/bootstrap.bundle.min.js",
"/js/animacionScroll.js",
"/css/bootstrap.min.css",
"/css/index.css",
"/css/bootstrap.min.css.map",
"/fonts/poppins-light.woff2",
"/fonts/dancingscript.woff2",
"/img/imgGCR.jpg",
"/img/imgLogo/icono512.png",
"/img/imgCarousel2.jpg",
"/img/imgCarousel.jpg",
"/img/iconoPage.ico",
"/img/iconoLight.png",
"/img/iconoDark.png",
"/img/portafolio/movil1.png",
"/img/portafolio/movil2.jpeg",
"/img/portafolio/movil3.jpeg",
"/img/portafolio/otros1.PNG",
"/img/portafolio/otros2.jpeg",
"/img/portafolio/otros3.PNG",
"/img/portafolio/otros4.jpeg",
"/img/portafolio/otros5.jpeg",
"/img/portafolio/otros6.jpg",
"/img/portafolio/otros7.JPG",
"/img/portafolio/web1.PNG",
"/img/portafolio/web2.jpeg",
"/img/portafolio/web3.PNG"

];
//  "/js/", "/img/",
self.addEventListener('install', (e) => {
    console.log("service se instalo", e);
    //checa si ya se estuvo guardado
    e.waitUntil(
        caches.open(nombreCache).then((cache) => {
            console.log("cache guardada"),
            cache.addAll(archivosCache);
        })
    );
});

self.addEventListener('activate',(e) => {
    console.log('serviceactivo',e);
});

self.addEventListener('fetch', (e) => {
    console.log("fetch", e);
    e.respondWith(
        caches.match(e.request)
        .then((respuestaCache) => {
            return respuestaCache;
        })
    )
});