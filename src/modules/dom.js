export const generatorDOM = (function () {
  const passwordNode = document.querySelector('.generator__result');
  const strengthText = document.querySelector('.generator__strength-text');
  const copiedText = document.querySelector('.generator__copied-text');
  const copyBtn = document.querySelector('.generator__copy-btn');

  function updateStrengthDisplay(strength) {
    updateStrengthText(strength.text);
    updateStrengthBars(strength.level);
  }

  function updateStrengthText(text) {
    strengthText.textContent = text;
  }

  function updateStrengthBars(level) {
    const allBars = document.querySelectorAll('.bar');
    const barsToUpdate = document.querySelectorAll(
      `.bar:nth-child(-n+${level})`
    );

    allBars.forEach((bar) => (bar.dataset.level = 0));
    barsToUpdate.forEach((bar) => (bar.dataset.level = level));
  }

  function updatePassword(password) {
    passwordNode.textContent = password;
    passwordNode.classList.add('generator__result--active');
    removeCopiedState();
    adjustPasswordFontSize(password.length);
  }

  function renderCopiedState() {
    copiedText.classList.remove('generator__copied-text--hidden');
    copyBtn.classList.add('generator__copy-btn--disabled');
  }

  function removeCopiedState() {
    copiedText.classList.add('generator__copied-text--hidden');
    copyBtn.classList.remove('generator__copy-btn--disabled');
  }

  function resetResult() {
    passwordNode.textContent = 'P4$5W0rD!';
    passwordNode.classList.remove('generator__result--active');
  }

  function adjustPasswordFontSize(length) {
    const password = document.querySelector('.generator__result');
    password.classList.remove('medium');
    password.classList.remove('small');
    password.classList.remove('very-small');
    password.classList.remove('extra-small');

    if (document.documentElement.clientWidth > 550) {
      if (length > 18) password.classList.add('medium');
    } else if (document.documentElement.clientWidth > 410) {
      if (length > 16) password.classList.add('small');
    } else if (document.documentElement.clientWidth >= 375) {
      if (length > 14) password.classList.add('very-small');
    } else {
      if (length > 11 && length <= 14) password.classList.add('small');
      if (length > 14) password.classList.add('extra-small');
    }
  }

  return {
    updateStrengthDisplay,
    updatePassword,
    renderCopiedState,
    resetResult,
  };
})();
