const root = document.querySelector('#root');

// 1
const pOutside = document.createElement('p');
pOutside.style.color = 'red';
pOutside.textContent = "Hey I'm red!";

root.appendChild(pOutside);

// 2
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

root.appendChild(h3);

// 3
const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink';

// 3.1
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

// 3.2
const pInside = document.createElement('p');
pInside.textContent = 'ME TOO!';

// 3.3
div.appendChild(h1);
div.appendChild(pInside);

root.appendChild(div)
