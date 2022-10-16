let counterValue = 0;

const сounter = document.querySelector("#value");

const decrementFun = () => {
  сounter.textContent = counterValue -= 1;
};

const incrementFun = () => {
  сounter.textContent = counterValue += 1;
};

const dec = document.querySelector('button[data-action="decrement"]');
dec.addEventListener("click", decrementFun);

const inc = document.querySelector('button[data-action="increment"]');
inc.addEventListener("click", incrementFun);
