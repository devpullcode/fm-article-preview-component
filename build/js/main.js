const switchDisableBtn=(t,a)=>{a.forEach(a=>{a=document.querySelectorAll("."+a);t&&a.forEach(a=>a.classList.add("no-hover")),t||a.forEach(a=>a.classList.remove("no-hover"))})};window.addEventListener("load",()=>{var a=["m-preview-card__data-btn"];0<navigator.maxTouchPoints?switchDisableBtn(!0,a):switchDisableBtn(!1,a)});
(()=>{let t;window.addEventListener("resize",()=>{var e;768<window.innerWidth||((e=["m-popup-share","m-preview-card__data-container"]).forEach(e=>{document.querySelector("."+e).classList.add("no-transition")}),clearTimeout(t),t=setTimeout(()=>{e.forEach(e=>{document.querySelector("."+e).classList.remove("no-transition")})},200))})})();
const btnData=document.querySelector(".m-preview-card__data-btn");btnData.addEventListener("click",()=>{var e=document.querySelector(".m-preview-card__data-container"),t=document.querySelector(".m-popup-share");console.log(e),console.log(t),e.classList.toggle("m-preview-card__data-container--hidden"),t.classList.toggle("m-popup-share--active")});