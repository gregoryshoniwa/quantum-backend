const cacheName = Date.now()
// Call the install events
self.addEventListener('install',e =>{
    console.log('Service Worker : Installed')
})

//Call Active Event
self.addEventListener('activate',e =>{
    console.log('Service Worker : Activated')
    //Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cache =>{
                    if(cache != cacheName){
                        console.log('Service Worker : Clear Old Cache')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )

})
// Call fetch Event
self.addEventListener('fetch',e =>{
    console.log('Service Worker : Fetching')
    e.respondWith(
        fetch(e.request)
            .then(res =>{
                //Make copy/clone of response
                const resClose = res.clone()
                // Open catch
                caches
                    .open(cacheName)
                    .then(cache =>{
                        cache.put(e.request,resClose)
                    })
                    return res;
            }).catch(err => caches.match(e.request).then(res => res))
    )
})