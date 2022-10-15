const sliderFontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

const changeFontSize = (slider) => {
    textSize.style.fontSize = `${slider.target.value}px`;
}

sliderFontSize.addEventListener('input', changeFontSize)