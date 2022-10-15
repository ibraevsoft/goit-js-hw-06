const amountCat = document.querySelectorAll('#categories');

amountCat.forEach(result => console.log(`Number of categories: ${result.children.length}`));

const amountItems = document.querySelectorAll('.item');

amountItems.forEach(result => console.log(`Category: ${result.firstElementChild.textContent}
Elements: ${ result.querySelector('ul').children.length }`));