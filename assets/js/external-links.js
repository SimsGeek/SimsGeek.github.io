const isExternalURL = (url) => new URL(url).origin !== location.origin;

var links = document.querySelectorAll('a');

links.forEach(link => {
    if(isExternalURL(link.href)) {
        link.classList.add('external')
    };
});