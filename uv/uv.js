const form = document.querySelector('form');
const input = document.querySelector('input');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url = urlParams.get('site');
const link = document.getElementById("link");
link.href = "https://extrememath.net";
link.innerHTML = "extrememath.net";
if (!url) {
    document.body.innerHTML = 'NO URL SPECIFIED';
    document.body.style = "color: white; text-align: center; font-size: 4vw; ";
} else if (!isUrl(url)) {
    document.body.innerHTML = 'NOT A VALID URL';
    document.body.style = "color: white; text-align: center; font-size: 4vw; ";
} else if (url.includes('google')) {
    document.body.innerHTML = 'GOOGLE IS NOT ALLOWED';
    document.body.style = "color: white; text-align: center; font-size: 4vw; ";
} else {
    setTimeout(()=>{
        serveRequest(url);
    }
    , 2000);
}
function serveRequest(url) {
    if (url) {
        window.navigator.serviceWorker.register('./uv-sw.js', {
            scope: __uv$config.prefix
        }).then(()=>{
            if (!(url.startsWith('https://') || url.startsWith('http://')))
                url = 'http://' + url;
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
        );
    }
}
function isUrl(val='') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ')
        return true;
    return false;
}
;
