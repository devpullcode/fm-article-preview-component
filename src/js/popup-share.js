const btnData = document.querySelector(".m-preview-card__data-btn");

btnData.addEventListener("click", () => {
  const elDataContainer = document.querySelector(".m-preview-card__data-container");
  const elPopupShare = document.querySelector(".m-popup-share");
  console.log(elDataContainer);
  console.log(elPopupShare);

  elDataContainer.classList.toggle("m-preview-card__data-container--hidden");
  elPopupShare.classList.toggle("m-popup-share--active");
});
