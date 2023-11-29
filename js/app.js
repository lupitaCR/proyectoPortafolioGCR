if ('serviceWorker' in navigator) {
    /**
     * PARA FUNCIONALIDAD DE UNA PWA
     * debe estar subido
     * debe ser https el dominio
     * 
     */
    navigator.serviceWorker.register('./sw.js',)
    .then((registrado) => {
        console.log('service registrado', registrado)
    })
    .catch((err) => {
        console.log('no se registro el service', err);
    })

} else {
   console.log('service no compatible');
}