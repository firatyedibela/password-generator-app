import './modules/slider';
import { form } from './modules/form';
import { handlers } from './modules/handler';

const passwordForm = document.querySelector('.generator__form');
passwordForm.addEventListener('submit', form.handleSubmit);
passwordForm.addEventListener('input', form.handleInput);

const copyBtn = document.querySelector('.generator__copy-btn');
copyBtn.addEventListener('click', handlers.handleCopy);
