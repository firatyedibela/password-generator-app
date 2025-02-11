const slider = document.querySelector('#slider');
slider.addEventListener('input', handleSliderInput);

function handleSliderInput() {
  updateLengthValue(this.value);
  updateSliderColor(this.value);
}

function updateLengthValue(value) {
  const valText = document.querySelector('.generator__length-value');
  valText.textContent = value;
}

function updateSliderColor(value) {
  const breakPoint = (value / 20) * 100;
  slider.style.background = `linear-gradient(90deg, #a4ffaf ${breakPoint}%, #18171f ${breakPoint}%)`;
}
