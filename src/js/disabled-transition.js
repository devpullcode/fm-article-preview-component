(() => {
  let timeout;

  const switchDisableTransition = classElements => {
    classElements.forEach(classElement => {
      const element = document.querySelector(`.${classElement}`);
      element.classList.add('no-transition');
    });

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      classElements.forEach(classElement => {
        const element = document.querySelector(`.${classElement}`);
        element.classList.remove('no-transition');
      });
    }, 200);
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) return;
    const classNamesDisableBTN = ['m-popup-share', 'm-preview-card__data-container'];

    switchDisableTransition(classNamesDisableBTN);
  });
})();
