const input = document.querySelector('.input-top');
const buttonAdd = document.querySelector('.add');
const bottom = document.querySelector('.bottom');
const main = document.querySelector('.main');
const deleted = document.querySelector('.delete');
const text = document.querySelector('.text');

const AddTask = () => {
  const taskText = input.value;
  if (taskText.trim() === '') return;
  renderBottom(taskText);
  input.value = '';
};

const renderBottom = (taskText) => {
  const div = document.createElement('div');
  div.classList.add('bottom');
  div.innerHTML = `
    <p class="text">${taskText}</p>
    <button class="complate">Uncomplated</button>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    `;
  main.appendChild(div);
};

const deletedBtn = (e) => {
  const click = e.target;
  if (click.classList.contains('delete')) {
    const taskContainer = click.parentElement;
    taskContainer.remove();
  }
};

const edit = (e) => {
  const element = e.target;
  if (element.classList.contains('edit')) {
    const container = element.parentElement;
    const text = container.querySelector('.text');
    const currentText = text.textContent;
    const inputTop = document.querySelector('.input-top');
    inputTop.value = currentText;
  }
};

const uncomplated = () => {
  const complate = document.querySelector('.complate');
  const bottom = document.querySelector('.bottom');

  complate.addEventListener('click', () => {
    bottom.classList.toggle('throw');
  });
};

buttonAdd.addEventListener('click', AddTask);
main.addEventListener('click', deletedBtn);
main.addEventListener('click', edit);
main.addEventListener('click', uncomplated);
