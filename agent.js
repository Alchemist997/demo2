let p = document.querySelectorAll('p');

//alert(window.navigator.userAgent)

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (!isSafari) {
    console.log('Is not a Safari');
    p[0].textContent = 'Is not a Safari';
} else {
    console.log('Is Safari');
    p[0].textContent = 'Is Safari';
}

let safariAgent = navigator.userAgent.indexOf("Safari") > -1;
//if ((chromeAgent) && (safariAgent)) safariAgent = false;
if (!safariAgent) {
    console.log('Is not a Safari');
    p[1].textContent = 'Is not a Safari';
} else {
    console.log('Is Safari ?!');
    p[1].textContent = 'Is Safari ?!';
}

p[2].textContent = window.navigator.userAgent;