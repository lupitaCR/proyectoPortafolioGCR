if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((registrado) => {
        console.log('service registrado', registrado)
    })
    .catch((err) => {
        console.log('no se registro el service', err);
    })

} else {
   console.log('service no compatible');
}