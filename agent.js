let pm = document.querySelector('.mw p');
let type = document.querySelectorAll('.type p');
let data = document.querySelectorAll('.data p');

//alert(window.navigator.userAgent)

pm.textContent = window.navigator.userAgent;

let isSafari = /^((?!chrome|android|edg).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    data[0].textContent = 'Is Safari';
} else {
    data[0].textContent = 'No';
}

// Get the user-agent string
let usAgStr = navigator.userAgent;

// Detect Chrome
let mobile =
usAgStr.toLowerCase().indexOf('mobile') > -1;

// Detect Chrome
let chromeAgent =
usAgStr.indexOf('Chrome') > -1;

// Detect Firefox
let firefoxAgent =
usAgStr.indexOf('Firefox') > -1;

// Detect Edge
let edgeAgent =
usAgStr.indexOf('Edg') > -1;

// Detect Internet Explorer
let ieAgent =
usAgStr.indexOf('MSIE') > -1 ||
usAgStr.indexOf('rv:') > -1;
// Discard IE in Firefox
if ((ieAgent) && (firefoxAgent))
ieAgent = false;

// Detect Safari
let safariAgent =
usAgStr.indexOf('Safari') > -1;
// Discard Safari in Chrome or Edge
if ((safariAgent) && (chromeAgent) || (edgeAgent))
safariAgent = false;

// Detect Opera
let operaAgent =
usAgStr.indexOf('OP') > -1;
// Discard Chrome in Opera or Edge
if ((chromeAgent) && (operaAgent) || (edgeAgent))
chromeAgent = false;

data[1].textContent = mobile;
data[2].textContent = safariAgent;
data[3].textContent = chromeAgent;
data[4].textContent = firefoxAgent;
data[5].textContent = ieAgent;
data[6].textContent = operaAgent;
data[7].textContent = edgeAgent;

for (let i = 0; i < data.length; i++) {
    if (data[i].textContent == 'true') {
        data[i].style.color = '#00ff00';
        type[i].style.color = '#f7f7f7';
    }
}