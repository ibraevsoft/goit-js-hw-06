const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function writeText(text) {
  outputName.textContent = text.target.value;
}

inputName.addEventListener("input", writeText);

function inputFun() {
  if (outputName.textContent === "") {
    outputName.textContent = "Anonymous";
  }
}

inputName.addEventListener("input", inputFun);