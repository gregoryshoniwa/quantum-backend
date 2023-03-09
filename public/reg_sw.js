//Make sure Service Worker are supported
if('serviceWorker' in navigator){
    window.addEventListener('load',() => {
        navigator.serviceWorker
            .register('./sw_main.js')
            .then(reg => console.log('Service Worker : Registerd'))
            .catch(err => console.log(`Service Worker : Error ${err}`))
    })
}