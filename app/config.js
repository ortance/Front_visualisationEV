
 try {
    define({
    root: window.location.pathname.replace(/\/(?:index.html)?$/, ''),
    coreUrl: 'http://127.0.0.1:5000' ,
    dateLabel: 'jj/mm/aaaa hh:mm:ss',
    dateFormats: ['DD/MM/YYYY', 'DD/MM/YYYY HH:mm:ss'],

    language : 'fr',
    mapZoom : 6
 });
}catch(e){
    console.log(e);
}
