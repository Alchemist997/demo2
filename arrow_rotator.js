window.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll("select"),t=document.querySelectorAll(".jqselect"),o=document.querySelectorAll(".jq-selectbox__trigger-arrow");for(let n=0;n<o.length;n++)t[n].onclick=function(){t[n].classList.contains("opened")?o[n].style.transform="translateY(4px) rotate(-135deg)":o[n].style.transform="rotate(45deg)"},e[n].onblur=function(){o[n].style.transform="rotate(45deg)"}}));