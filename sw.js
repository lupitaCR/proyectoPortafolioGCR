const nombreCache = "PWAIDGS10GCR";
const archivosCache = [
"/",
"/index.html",
"/manifest.json",
"/js/index.js",
"/app.js",
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
"/fonts/DancingScript-VariableFont_wght.ttf",
"/fonts/Poppins-Regular.ttf",
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
self.addEventListener("install", (e) => {
    //checa si ya se estuvo guardado
    e.waitUntil(
        caches.open(nombreCache).then((cache) => {
            cache.addAll(archivosCache);
        })
    );
});

/* self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache || fetch(e.request);
        })
    )
}); */
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }

          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              var responseToCache = response.clone();
  
              caches.open(nombreCache)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
    );
  });