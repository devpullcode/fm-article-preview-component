const switchDisableBtn = (status, classElements) => {
  classElements.forEach(classElement => {
    const elements = document.querySelectorAll(`.${classElement}`);
    if (status) elements.forEach(element => element.classList.add('no-hover'));
    if (!status) elements.forEach(element => element.classList.remove('no-hover'));
  });
};

window.addEventListener('load', () => {
  const classNamesDisableBTN = ['m-gallery__img', 'm-form__btn-submit', 'l-footer__social-hiperlink', 'l-footer__nav-hiperlink', 'm-meal-card', 'm-btn', 'm-btn--act']; // indicate the classes of the elements to deactivate the hover.
  // const classNamesDisableBTN = []; // indicate the classes of the elements to deactivate the hover.
  if (navigator.maxTouchPoints > 0) {
    switchDisableBtn(true, classNamesDisableBTN);
  } else {
    switchDisableBtn(false, classNamesDisableBTN);
  }
});
