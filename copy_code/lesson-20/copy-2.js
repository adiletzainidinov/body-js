// // const document = index.html

// const totalResult = JSON.parse(localStorage.getItem('total')) || {
//   lose: 0,
//   win: 0,
//   draw: 0,
// };

// showResultFromLocals();

// const result = document.querySelector('.result');

// function playGame(params) {
//   const computerMove = computerSelect();
//   let result = '';

//   const { lose, win, draw } = totalResult;

//   if (params === 'Кайчы') {
//     if (computerMove === 'Кайчы') {
//       result = 'Тен';
//     } else if (computerMove === 'Кагаз') {
//       result = 'Утуш';
//     } else if (computerMove === 'Кудук') {
//       result = 'Женилуу';
//     }
//   }
//   if (params === 'Кудук') {
//     if (computerMove === 'Кудук') {
//       result = 'Тен';
//     } else if (computerMove === 'Кагаз') {
//       result = 'Женилуу';
//     } else if (computerMove === 'Кайчы') {
//       result = 'Утуш';
//     }
//   }
//   if (params === 'Кагаз') {
//     if (computerMove === 'Кагаз') {
//       result = 'Тен';
//     } else if (computerMove === 'Кайчы') {
//       result = 'Женилуу';
//     } else if (computerMove === 'Кудук') {
//       result = 'Утуш';
//     }
//   }
//   if (result === 'Утуш') {
//     totalResult.win = totalResult.win++;
//   } else if (result === 'Женилуу') {
//     totalResult.lose = totalResult++;
//   } else {
//     totalResult.draw = totalResult.draw++;
//   }

//   console.log(`Компютер ${computerMove} ,а сиз ${params}:Жыйынтык ${result}`);

//   resultP.innerHTML = `result: <span style='color: red'>${result}</span>`;

//   document.querySelector(
//     '.moves'
//   ).innerHTML = `Сиз:${params} === Компьютер:${computerMove}`;

//   localStorage.setItem('total', JSON.stringify(totalResult));

//   showResultFromLocals();

//   // document.querySelector('js-13_total').innerHTML = `Результат: W: ${totalResult.win}, l: ${totalResult.lose} , d: ${totalResult.draw}`

//   // console.log(`Утуш ${totalResult.win} , Тен ${totalResult.draw} , Женилуу ${totalResult.lose}`);
// }

// function computerSelect() {
//   const randomNumber = Math.random();

//   let result = '';

//   if (randomNumber >= 0 && randomNumber < 1 / 3) {
//     result = 'Кудук';
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     result = 'Кайчы';
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//     result = 'Кагаз';
//   }
//   return result;
// }

// function showResultFromLocals() {
//   document.querySelector(
//     '.js-13_total'
//   ).innerHTML = `Результат: w: ${totalResult.win}, l: ${totalResult.lose} , d: ${totalResult.draw}`;

//   console.log(
//     `Утуш ${totalResult.win} , Тен ${totalResult.draw} , Женилуу ${totalResult.lose}`
//   );
// }

// ------------------------------new-tema---------------------------------

// localStorage.setItem(`magic`, `1233423`);
// localStorage.setItem('number', 234324334);

// console.log(localStorage.getItem('number'));
// const magic = localStorage.getItem('magic');
// console.log(magic);
// document.body.innerHTML;

// const userTime = localStorage.setItem('time', new Date());

// const students = {
//   name: 'Adilet',
//   age: 24,
//   phone: 996,
// };

// localStorage.clear();

// const perevestiVString = JSON.stringify(students);
// console.log(perevestiVString);
// const obratno = JSON.parse(perevestiVString);
// console.log(obratno);

// localStorage.setItem('student', perevestiVString);
// const studentAdilet = JSON.parse(localStorage.getItem('student'));
// console.log(studentAdilet);
// console.log(localStorage.getItem('student'));
