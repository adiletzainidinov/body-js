// const myFirstArray = [1, 2, 3];
// console.log(myFirstArray);

// const myObj = {
//   0: '1',
//   1: '2',
//   2: '3',
// };

// console.log(myObj);
// console.clear();

// const infoArray = [
//   'Russhia',
//   'Bishkek',
//   144,
//   true,
//   { student: 'Almaz' },
//   [88, 99],
// ];
// console.log(infoArray);
// console.log(infoArray[1]);
// console.log(infoArray[3]);

// const someNumber = 4;
// console.warn(infoArray[someNumber].student);
// infoArray[4].age = 18;
// console.log(infoArray);
// console.clear();

// const nums = [];

// const babay = [10, 20, 30, 40, 'Mirgul'];
// babay[4] = 'Nazgul';
// console.log(babay);
// console.log(babay.length);
// console.log(babay[99]);
// babay.push('summer');
// console.log(babay);
// babay.push(true, false, 'Mamaisakova');
// const isExisting = babay.includes('Nazgul');
// console.log(isExisting);
// console.clear();

// const newArr = [20, 30, 90];
// console.log(newArr);
// newArr.splice(1, 1);
// console.log(newArr);

// ------------------------------------------------------------------------------------------------------------------

// const todoList = ['Mirgul', 'Arsen', 'Aibike'];
// const firstDiv = document.querySelector('.first');
// const secondDiv = document.querySelector('.second');
// const thirdDiv = document.querySelector('.third');

// firstDiv.innerHTML = todoList[0];
// secondDiv.innerHTML = todoList[1];
// thirdDiv.innerHTML = todoList[2];

// function addTodo() {
//   const inputValue = document.querySelector('.js-input');
//   console.log(inputValue);
//   todoList.push(inputValue.value);
//   console.log(todoList, "Массив;");
// }

// ---------------------------------------------------------------------------------------------------------------------
// --------------------------------------while-----------------------------------------------------------------------

// console.log(typeof [2, 3]);
// console.log(Array.isArray(todoList));
// const todoList = ['Mirgul', 'Arsen', 'Aibike'];
// let b = 2;
// console.log(b);
// console.log(todoList[b]);

// let index = 0;

// while (index < todoList.length) {
//     console.log(index);
//     index = index++
//     console.log(todoList[index]);
// }

// --------------------------for--------------------------------------------------

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const todoList = ['Mirgul', 'Arsen', 'Aibike'];

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// const nums = [1, '30', '40', 'Mirgul', 5, 21];
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (typeof nums[i] === 'number') {
//     total = total + nums[i];
//   }
// }
// console.log(total);

// --------------------------------todoList----------------------------

// const student = {};

// const todoList = [
//   { name: 'Mirgul', age: 15 },
//   { name: 'Arsen', age: 43 },
//   { name: 'Aibike', age: 35 },
// ];
// let html = '';

// for (let b = 0; b < todoList.length; b++) {
//   todoList[b];
//   html =
//     html +
//     `<li class="style">name: ${todoList[b].name} age: ${todoList[b].age} <button>Delete</button> <input="checkbox">
//     </li>`;
// }

// console.log(html);
// document.querySelector('.list').innerHTML = html;

// ------------------------------------------------------------------------------------------------------------------------------

const todolist = [
  { name: 'Ira', date: '01.03.24.' },
  { name: 'oleg', date: '01.03.24.' },
];

renderNamesFn();

function renderNamesFn() {
  let htmlNames = '';

  for (let x = 0; x < todoList.length; x++) {
    const names = todolist[x];
    // console.log(names);
    htmlNames =
      htmlNames +
      `<p>${names.name} ${names.date} <button onclick="todolist.splice(${x}, 1) renderNamesFn()
    " >Delete</button>
    </p>`;
  }
  console.log(todolist);
  document.querySelector('.root').innerHTML = htmlNames;
  //   console.log(htmlNames);
}

function addTodo() {
  const input = document.querySelector('.js-input');
  const date = document.querySelector('.js-input-date');
  todolist.push({
    name: input.value,
    date: input.value,
  });
  //   console.log(todolist,'todo');
  renderNamesFn();
  input.value = '';
  date.value;
}

// ----------------------------------------------break-continue---------------------------------------------------------

// for (let i = 0;i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
