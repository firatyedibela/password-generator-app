export const utils = (function () {
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
})();
