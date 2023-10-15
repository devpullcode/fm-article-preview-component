const switchDisableBtn = (status, classElements) => {
  classElements.forEach(classElement => {
    const elements = document.querySelectorAll(`.${classElement}`);
    if (status) elements.forEach(element => element.classList.add('no-hover'));
    if (!status) elements.forEach(element => element.classList.remove('no-hover'));
  });
};

window.addEventListener('load', () => {
  const classNamesDisableBTN = ['m-preview-card__data-btn']; // indicate the classes of the elements to desactivate the hover.
  // const classNamesDisableBTN = []; // indicate the classes of the elements to desactivate the hover.
  if (navigator.maxTouchPoints > 0) {
    switchDisableBtn(true, classNamesDisableBTN);
  } else {
    switchDisableBtn(false, classNamesDisableBTN);
  }
});
