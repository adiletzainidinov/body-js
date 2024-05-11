const wrapper = document.querySelector('.wrapper');
const menuBtn = document.querySelector('.menu-btn');
const backBtn = document.querySelector('.back-btn');

const showCategory = () => {
  wrapper.classList.toggle('show-category');
  menuBtn.classList.toggle('show-category');
  backBtn.classList.toggle('show-category');
};

menuBtn.addEventListener('click', showCategory);
backBtn.addEventListener('click', showCategory);

const addTask = document.querySelector('.add-task');
const addTaskBtn = document.querySelector('.add-task-btn');
const blackBackdrop = document.querySelector('.black-backdrop');

const addTasks = () => {
  addTask.classList.toggle('active');
  addTaskBtn.classList.toggle('active');
  blackBackdrop.classList.toggle('active');
};

addTaskBtn.addEventListener('click', addTasks);
blackBackdrop.addEventListener('click', addTasks);

//-------------start js code------------------

let categories = [
  {
    title: 'Personal',
    img: 'boy.png',
  },
  {
    title: 'Work',
    img: 'briefcase.png',
  },
  {
    title: 'Shopping',
    img: 'shopping.png',
  },
  {
    title: 'Coding',
    img: 'web-design.png',
  },
  {
    title: 'Health',
    img: 'healthcare.png',
  },
  {
    title: 'Fitness',
    img: 'dumbbell.png',
  },
  {
    title: 'Education',
    img: 'education.png',
  },
  {
    title: 'Finance',
    img: 'saving.png',
  },
];

let tasks = [
  {
    id: 1,
    task: 'Go to market',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 2,
    task: 'Read a chapter of a book',
    category: 'Personal',
    completed: false,
  },

  {
    id: 3,
    task: 'Prepare presentation for meeting',
    category: 'Work',
    completed: false,
  },
  {
    id: 4,
    task: 'Complete coding challenge',
    category: 'Coding',
    completed: false,
  },
  {
    id: 5,
    task: 'Take a 30-minute walk',
    category: 'Health',
    completed: false,
  },
  {
    id: 6,
    task: 'Do a 20-minute HIIT workout',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 7,
    task: 'Watch an educational video online',
    category: 'Education',
    completed: false,
  },
  {
    id: 8,
    task: 'Review monthly budget',
    category: 'Finance',
    completed: false,
  },
  {
    id: 9,
    task: 'Buy groceries for the week',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 10,
    task: 'Write in a journal',
    category: 'Personal',
    completed: false,
  },
  {
    id: 11,
    task: 'Send follow-up emails',
    category: 'Work',
    completed: false,
  },
  {
    id: 12,
    task: 'Work on a coding side project',
    category: 'Coding',
    completed: false,
  },
  {
    id: 13,
    task: 'Try a new healthy recipe',
    category: 'Health',
    completed: false,
  },
  {
    id: 14,
    task: 'Attend a yoga class',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 15,
    task: 'Read an article about a new topic',
    category: 'Education',
    completed: false,
  },
  {
    id: 16,
    task: 'Set up automatic bill payments',
    category: 'Finance',
    completed: false,
  },
  // Additional tasks for each category
  {
    id: 17,
    task: 'Buy new clothes',
    category: 'Shopping',
    completed: false,
  },
  {
    id: 18,
    task: 'Meditate for 10 minutes',
    category: 'Personal',
    completed: false,
  },
  {
    id: 19,
    task: 'Prepare agenda for team meeting',
    category: 'Work',
    completed: false,
  },
  {
    id: 20,
    task: 'Debug a software issue',
    category: 'Coding',
    completed: false,
  },
  {
    id: 21,
    task: 'Try a new recipe for lunch',
    category: 'Health',
    completed: false,
  },
  {
    id: 22,
    task: 'Go for a run',
    category: 'Fitness',
    completed: false,
  },
  {
    id: 23,
    task: 'Learn a new language online',
    category: 'Education',
    completed: false,
  },
  {
    id: 24,
    task: 'Read about history',
    category: 'Education',
    completed: false,
  },
  {
    id: 25,
    task: 'Review investment portfolio',
    category: 'Finance',
    completed: false,
  },
  // Add more tasks for each category as desired
];

let selectCategories = categories[0];

const categoriesContainer = document.querySelector('.categories');
const titleCategory = document.querySelector('.title-category');
const imgCategory = document.querySelector('#category-img');
const tasksCategory = document.querySelector('.tasks-category');
const totalTaskCategory = document.querySelector('.total-task');

const calculateCategory = () => {
  const taskFilter = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectCategories.title.toLowerCase()
  );
  tasksCategory.innerHTML = `${taskFilter.length} Tasks`;
  totalTaskCategory.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = '';

  categories.forEach((category) => {
    const taskFilter = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement('div');
    div.classList.add('category');
    div.addEventListener('click', () => {
      wrapper.classList.add('show-category');
      titleCategory.innerHTML = category.title;
      imgCategory.src = `images/${category.img}`;
      selectCategories = category;
      calculateCategory();
    });
    div.innerHTML = `
    <div class="left">
    <img src="images/${category.img}" alt="${category.title}" />
    <div class="content">
      <h1>${category.title}</h1>
      <p>${taskFilter.length} Tasks</p>
    </div>
  </div>
  <div class="options">
    <div class="toggle-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </div>
  </div>
    `;
    categoriesContainer.appendChild(div);
  });
};

const taskContainer = document.querySelector('.tasks');

const renderTask = () => {
  taskContainer.innerHTML = '';

  const taskFilter = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectCategories.title.toLowerCase()
  );
  if (taskFilter.length === 0) {
    taskContainer.innerHTML = `<p class="no-task">No task for this category</p>`;
  } else {
    taskFilter.forEach((task) => {
      const div = document.createElement('div');
      div.classList.add('task-wrapper');
      const label = document.createElement('label');
      label.classList.add('task');
      label.setAttribute('for', task.id);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = task.id;
      div.innerHTML = `
      <div class="delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
      `;
      label.innerHTML = `
    <span class="checkmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
              </label>
    `;
      label.prepend(checkbox);
      div.prepend(label);
      taskContainer.appendChild(div);
    });
  }
};

calculateCategory();
renderCategories();
renderTask();