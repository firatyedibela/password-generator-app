import { Password } from './password';
import { generatorDOM } from './dom';

export const form = (function () {
  function handleInput(e) {
    generatorDOM.resetResult();

    const formData = extractData(e.currentTarget);

    if (
      formData.uppercase ||
      formData.lowercase ||
      formData.numbers ||
      formData.symbols
    ) {
      const strength = Password.evaluatePasswordStrength(
        formData.length,
        formData.uppercase,
        formData.lowercase,
        formData.numbers,
        formData.symbols
      );
      generatorDOM.updateStrengthDisplay(strength);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = extractData(e.target);

    if (
      formData.uppercase ||
      formData.lowercase ||
      formData.numbers ||
      formData.symbols
    ) {
      const passwordObject = new Password(
        Number(formData.length),
        formData.uppercase,
        formData.lowercase,
        formData.numbers,
        formData.symbols
      );

      const password = passwordObject.generatePassword();
      generatorDOM.updatePassword(password);
    }
  }

  function extractData(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }

  return {
    handleInput,
    handleSubmit,
  };
})();
