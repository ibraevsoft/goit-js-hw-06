let counterValue  = 0;

const startCounter = document.querySelector('.value');

const decrementFun = () => {
    counter.textContent = counterValue -=1;
}

const incrementFun = () => {
    counter.textContent = counterValue +=1;
}

const dec = document.querySelector('button[data-action="decrement"]');
dec.addEventListener('click', decrementFun)

const inc = document.querySelector('button[data-action="increment"]');
inc.addEventListener('click', incrementFun)