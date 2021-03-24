if ('serviceWorker' in navigator) {
    //local
    navigator.serviceWorker.register('/app/sw.js');
    //deployment
    // navigator.serviceWorker.register('sw.js');
}