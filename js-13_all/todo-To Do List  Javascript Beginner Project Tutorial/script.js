let addToDoButton = document.querySelector('#addTodo');
let toDoContainer = document.querySelector('#toDo-Container');
let inputField = document.querySelector('#inputField');

addToDoButton.addEventListener('click', function () {
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = '';
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
  });
});
