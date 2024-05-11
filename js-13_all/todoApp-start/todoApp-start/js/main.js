// Находим элементы на странице

const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

let tasks = [];

// Добавление задачи

form.addEventListener('submit', addTask);

// Удаление задачи

taskList.addEventListener('click', deleteTask);

// Отмечаем задачу завершенной

taskList.addEventListener('click', doneTask);

// Проверяем хранится ли наши данные в LocalStorage

// if (localStorage.getItem('tasksHTML')) {
//   taskList.innerHTML = localStorage.getItem('tasksHTML')
// }

// Функция добавления задачи

function addTask(event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода

  const taskText = taskInput.value;

  //Описываем задачу в виде обьекта

  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  // Добавляем задачу в массив с задачами

  tasks.push(newTask);

  // Формируем CSS класс

  const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title';

  // Формируем разметку для новой задачи

  const taskHTML = `<li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
  <span class="${cssClass}">${newTask.text}</span>
  <div class="task-item__buttons">
      <button type="button" data-action="done" class="btn-action">
          <img src="./img/tick.svg" alt="Done" width="18" height="18">
      </button>
      <button type="button" data-action="delete" class="btn-action">
          <img src="./img/cross.svg" alt="Done" width="18" height="18">
      </button>
  </div>
</li>`;

  // Добавляем задачу на страницу

  taskList.insertAdjacentHTML('beforeend', taskHTML);

  // Очищаем поле ввода и возвращаем на него фокус

  taskInput.value = '';
  taskInput.focus();

  // Проверка Если в списке задач более 1-го элемента,скрываем блок

  if (taskList.children.length > 1) {
    emptyList.classList.add('none');
  }

  // saveHTMLtoLS();
}

// Функция Удаление задачи

function deleteTask(event) {
  // Проверям если клик был НЕ по кнопке "Удалить задачу"

  if (event.target.dataset.action !== 'delete') return;

  // Проверяем что клик был по кнопке "удалить задачу"
  if (event.target.dataset.action === 'delete') {
    const parentNode = event.target.closest('.list-group-item');

    // Определяем ID задачи

    const id = Number(parentNode.id);

    // Находим индекс задачи в массиве

    // const index = tasks.findIndex((task) => task.id === id);

    // Удаляем задачу из массива с задачами

    // tasks.splice(index, 1);

    tasks = tasks.filter(function (task) {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    // Удаляем задачу из разметки

    parentNode.remove();

    // Проверка Если в списке задач 1-им элемент,показываем блок "Список дел пуст"

    if (taskList.children.length === 1) {
      emptyList.classList.remove('none');
    }
  }

  // saveHTMLtoLS();
}

// Функция отметки задачи завершенной

function doneTask(event) {
  // Проверяем что клик был НЕ по кнопке "задача выполнено"

  if (event.target.dataset.action !== 'done') return;

  // Проверяем что клик был по кнопке "задача выполнено"

  if (event.target.dataset.action === 'done') {
    const parentNode = event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
  }

  // saveHTMLtoLS();
}

// Сохроняем данные в Localstorage

// function saveHTMLtoLS() {
//   localStorage.setItem('tasksHTML', taskList.innerHTML);
// }
