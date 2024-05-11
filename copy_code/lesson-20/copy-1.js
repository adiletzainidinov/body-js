// const totalResult = JSON.parse(localStorage.getItem('total')) || {
//   lose: 0,
//   win: 0,
//   draw: 0,
// };

// showResultFromLocalS();

// const resultP = document.querySelector('.result');

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
//     totalResult.lose = totalResult.lose++;
//   } else {
//     totalResult.draw = totalResult.draw++;
//   }

//   console.log(`Компютер ${computerMove} ,a сиз ${params}:Жыйынтык ${result}`);

//   resultP.innerHTML = `result: <span style='color: red'>${result}</span>`;

//   document.querySelector(
//     '.moves'
//   ).innerHTML = `Сиз:${params} === Компютер:${computerMove}`;

//   localStorage.setItem('total', JSON.stringify(totalResult));

//   showResultFromLocalS();

//   // document.querySelector('.js-13_total').inner.HTML = `Результат: w ${totalResult.win}, l: ${totalResult.lose} , d: ${totalResult.draw}`

//   //console.log(`Утуш ${totalResult.win}, Тен ${totalResult.draw} ,Женилуу ${totalResult.lose}`)
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

// function showResultFromLocalS() {
//   document.querySelector(
//     '.js-13_total'
//   ).innerHTML = `Результат: w: ${totalResult.win}, l: ${totalResult.lose}, d: ${totalResult.draw}`;

//   console.log(
//     `Утуш ${totalResult.win} , Тен ${totalResult.draw} , Женилуу ${totalResult.lose}`
//   );
// }

// -------------------------------new-tema--------------------------------------------------------------

// localStorage.setItem('magic', '23432423');
// localStorage.setItem('number', 232432424);

// console.log(localStorage.getItem('number'));
// const magic = localStorage.getItem('magic');
// console.log(magic);
// document.body.innerHTML;

// const userTime = localStorage.setItem('time', new Date());

// const students = {
//   name: 'Adilet',
//   age: 19,
//   phone: 996,
// };

// localStorage.clear();

// const perevestiVString = JSON.stringify(students);
// console.log(perevestiVString);
// const obratno = JSON.parse(perevestiVString);
// console.log(obratno);

// localStorage.setItem('student', perevestiVString);
// const studentAdilet = JSON.parse(localStorage.getItem('Student'));
// console.log(studentAdilet);
// console.log(localStorage.getItem('student'));
