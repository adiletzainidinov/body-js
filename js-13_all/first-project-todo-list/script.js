// извлеч данные из localStorage
let main = JSON.parse(localStorage.getItem('todo')) || [];
let todoInput = document.querySelector('#papa');
let todoList = document.querySelector('#todoList');
let addButton = document.querySelector('#btn-plus');
let deleteButton = document.querySelector('#btn-delete');

// Инициализируем проект

document.addEventListener('DOMContentLoaded', function () {
  addButton.addEventListener('click', addTask);
  todoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });
  deleteButton.addEventListener('click', deleteTask);
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== '') {
    main.push({
      text: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    todoInput.value = '';
    displayTasks();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('todo', JSON.stringify(main));
}

function deleteTask() {
  main = [];
  saveToLocalStorage();
  displayTasks();
}


function displayTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Очищаем содержимое списка
    main.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('li'); // Добавляем класс для основного стиля задачи
  
      // Создаем элемент чекбокса
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.disabled; // Устанавливаем состояние чекбокса в зависимости от выполненности задачи
      checkbox.addEventListener('change', () => toggleTask(index)); // Добавляем обработчик изменения состояния чекбокса
      li.appendChild(checkbox); // Добавляем чекбокс в элемент списка
  
      // Создаем элемент текста задачи
      const taskText = document.createElement('span');
      taskText.textContent = item.text;
      li.appendChild(taskText); // Добавляем текст задачи в элемент списка
  
      // Создаем элемент иконки
      const icon = document.createElement('div');
      icon.classList.add('galochka');
      const img = document.createElement('img');
      img.src = './icons8-галочка.svg';
      img.alt = 'img';
      icon.appendChild(img); // Добавляем изображение в элемент иконки
      icon.style.display = item.disabled ? 'block' : 'none'; // Устанавливаем стиль отображения в зависимости от выполненности задачи
      icon.addEventListener('click', () => toggleTask(index)); // Добавляем обработчик нажатия на иконку
      li.appendChild(icon); // Добавляем элемент иконки в элемент списка
  
      // Добавляем элемент списка в список
      todoList.appendChild(li);
    });
  }
  
