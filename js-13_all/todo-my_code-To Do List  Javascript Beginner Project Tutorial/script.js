let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let container = document.querySelector('#div');

btn.addEventListener('click', function () {
  let paragraph = document.createElement('p');
  container.appendChild(paragraph);
  paragraph.innerText = input.value;
  paragraph.classList.add('privet');
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
});
