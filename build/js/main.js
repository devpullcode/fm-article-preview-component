const btnData=document.querySelector(".m-preview-card__data-btn");btnData.addEventListener("click",()=>{var e=document.querySelector(".m-preview-card__data-container"),t=document.querySelector(".m-popup-share");console.log(e),console.log(t),e.classList.toggle("m-preview-card__data-container--hidden"),t.classList.toggle("m-popup-share--active")});