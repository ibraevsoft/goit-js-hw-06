const inputArea = document.querySelector("#validation-input");

const outputText = (text) => {
  let inputText = text.target.value.length;

  inputText === Number(inputArea.dataset.length)
    ? (inputArea.classList = "valid")
    : (inputArea.classList = "invalid");
}

inputArea.addEventListener("blur", outputText);