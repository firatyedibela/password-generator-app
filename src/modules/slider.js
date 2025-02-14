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
  const breakpoint = (value / 20) * 100;
  slider.style.background = `linear-gradient(90deg, #a4ffaf ${breakpoint}%, #18171f ${breakpoint}%)`;
}
