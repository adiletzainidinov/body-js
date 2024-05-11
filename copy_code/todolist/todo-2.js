window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#task-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = input.value;
  
      if (!task) {
        alert('Please fill out the task');
        return;
      }
  
      const task_el = document.createElement('div');
      task_el.classList.add('task-list');
  
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');
  
      // Создание и настройка элемента input
      const task_input_el = document.createElement('input');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.setAttribute('readonly', 'readonly');
      task_input_el.classList.add('text'); // Добавлен класс 'text'
  
      // Добавление input в контейнер для содержимого задачи
      task_content_el.appendChild(task_input_el);
  
      // Добавление контейнера для содержимого задачи в список
      task_el.appendChild(task_content_el);
  
      // Добавление задачи в список
      list_el.appendChild(task_el);
  
      // Очистка ввода
      input.value = '';
    });
  });
