import { generatorDOM } from './dom';

export const handlers = (function () {
  function handleCopy() {
    const passwordNode = document.querySelector('.generator__result');

    // Copy only if a password was generated
    if (passwordNode.classList.contains('generator__result--active')) {
      navigator.clipboard
        .writeText(passwordNode.textContent)
        .then(() => {
          generatorDOM.renderCopiedState();
        })
        .catch((err) => {
          alert('Failed to copy the text: ', err);
        });
    } else {
      alert('No password has been generated yet!');
    }
  }

  return {
    handleCopy,
  };
})();
