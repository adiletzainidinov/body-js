// if (5 + 5 === 10) {
//   console.log('Туура');
// } else {
//   console.log('Туура эмес');
// }

// 5 + 5 === 10 ? console.log('Туура') : console.log('Туура эмес');

// console.log('start');

// let heading = '';

// let time = 9;

// if (time > 11) {
//   console.log('if');
//   heading = 'Добрый день';
// } else {
//   console.log('else');
//   heading = 'Доброе утро';
// }

// console.log('end');
// console.log(heading);

// let start  = false;
// let user = 'Start';

// if (user !== 'Start') {
//     start = true;
//     document.body.innerHTML = `<p>Игра начата</p>`
// }else {
//     document.body.innerHTML = `<p>Игра не начата</p>`
// }

// console.log(start);

// ------------------------------------------------------------------------------

// let start = false;
// let user = 'Start';

// console.log(start);

// let userAge = 18;
// let month = 12;

// if (month >= 12) {
//   userAge = userAge + 1;
//   // userAge += 1
//   // userAge = userAge  - 10 === userAge -= 10
//   // userAge = userAge * 100 === userAge *= 100
//   // userAge = userAge / 100 === userAge /= 100
//   // userAge = userAge + 1 === userAge++
//   // userAge = userAge - 1 === userAge--
// }

// console.log(userAge);

// ----------------------------------------------------------------------------------

// let month = 12;
// let userAge = 12;
// userAge = month >= 12 ? ++userAge : userAge;
// console.log(userAge);

// const gradus = -5;
// const pogoda = gradus < 0 ? 'winter' : 'vesna';

// console.log(pogoda);

// const userAnswer = confirm('Are you student');

// const isStudent = userAnswer ? 'wery good' : 'oh no';

// console.log(isStudent);

// ---------------------------------------------------------------------------------------

// const userAnswer = prompt('Are you student?');

// let isStudent = '';

// if (userAnswer == 55) {
//   isStudent = 'how are you';
//   console.log(isStudent);
// } else {
//   isStudent = 'Kandai brat';
//   console.log(isStudent);
// }

// -------------------------------------function---------------------------------------------

// ----------------------------------------function---------------------------------------------

// function showExample() {
//   console.log('WORK');
//   console.log(2 + 2);
// }

// showExample();
// showExample();
// showExample();

// function calcNumbers(x, y) {
//   const result = x + y;
//   console.log(result);
// }

// calcNumbers(232, 234);
// calcNumbers(2333, 233);

// function plus(birinchi, ekinchi) {
//   console.log(birinchi);
//   console.log(ekinchi);
// }

// plus('Peacksoft', 1234);

// function pluss(birinchii, ekinchii, hadiza) {
//   if (birinchii) {
//     console.log('is it birinchi');
//   }
//   if (ekinchii) {
//     console.log('is it ekinchi');
//   }
//   if (hadiza) {
//     console.log('is it hadizha');
//   }
// }

// pluss(false, true, 'hadizha');

// -----------------------------------------------------------------------------------

// const showAlert = function (name) {
//   alert(`Helloo,${name}`);
//   document.body.innerHTML = name
// };

// let userName = 'Aizat'
// showAlert('Islam')
// showAlert('mahachev')
// showAlert(userName)

// ----------------------------------------------------------------------------------------

// const showAlert = function (name, surname = 'Usmanova') {
//   console.log(`Helloo,${name} ${surname}`);
// };

// let useraName = 'Aizat';
// showAlert('Islam');
// showAlert('mahachev', 'islam');
// showAlert(useraName);

// const arrowFn = (a, b) =>{
//     console.log(a,b);
// }
// arrowFn(10000,false)

// function plus(bir,eki) {
//     return bir + eki;
// }

// let matematika = 10 + 15;

// console.log(matematika);

// let bizdin = plus(100,20)
// console.log(bizdin);
// console.error(plus(9,9));

// --------------------------------------------------------------------------------------------

// function plus(bir, eki) {
//   bir + eki;
//   return 'Helloo world JS-13';
// }

// let bizdin = plus(100, 20);
// console.log(bizdin);
// document.body.innerHTML = `<h1>${plus()}</h1>`;

// function plusses(bir, eki) {
//   let result = bir + eki;
//   return result;
// }

// let bizden = plusses(200, 20);
// console.log(bizden);
// document.body.innerHTML = bizden;

// function plusExtra(bir, eki) {
//   let result = bir + eki;

//   console.log('1');
//   console.log('2');
//   console.log('3');
//   return result;
//   console.log('4');
//   console.log('5');
// }

// console.log(plusExtra(12, 12));

// let bizdin = plusExtra(100, 50);
// console.log(bizdin);
// document.body.innerHTML = bizdin;

// -------------------------------------------------------------------------------------------

// function plus(bir, eki) {
//   let result = (bir = eki);
//   if (result > 10) {
//     return 'bolshe';
//   }
//   console.log('work');
//   return true;
// }

// let bizdin = plus(130, 30);
// console.log(bizdin);
// document.body.innerHTML = bizdin;

// -----------------------------------------------------------------------------------------------

// function plus(bir,eki) {
//     let result = bir + eki;
//     if (result > 10) {
//         return false;
//     }
//     console.log('work');
//     return true;
// }

// plus(1,20)

// if (plus(1,2)) {
// alert('Helloo World')
// }

// function plusses (bir,eki) {
//     let result = bir + eki;
//     if (result > 10) {
//         return false;
//     }
//     console.log('job');
//     return true;
// }

// plusses(2,2)

// let result = Math.random()
// console.log(result);

// function plusExtra(bir,eki) {
//     let result = bir + eki;
//     return result;
// }

// let resulter = plusExtra(1, 3)
// console.log(resulter);

// function hi(user) {
//     return 'Helloo' + ' ' + user;
//   }
  
//   document.body.innerHTML = hi('Asan');

// ---------------------------------------------------------------------------------------

// function generateNumber() {
//   return Math.floor(Math.random() * 100);
// }

// let randomNumberOfAizat = generateNumber();
// let randomNumberOfHadizha = generateNumber();
// let randomNumberOfAdilet = generateNumber();

// function findBiggestNumber(bir, eki, uch) {
//   console.log(bir, 'Adilet');
//   console.log(eki, 'Aizat');
//   console.log(uch, 'Hadizha');

//   let result = null;

//   if (bir > eki && bir > uch) {
//     result = bir + 'Adilet';
//   }
//   if (eki > bir && eki > uch) {
//     result = eki + 'Aizat';
//   }
//   if (uch > eki && uch > bir) {
//     result = uch + 'Hadizha';
//   }
//   return result;
// }

// const lastRes = findBiggestNumber(
//   randomNumberOfAdilet,
//   randomNumberOfAizat,
//   randomNumberOfHadizha
// );

// const another = findBiggestNumber(10,20,30)
// console.log(another, 'Another');
// console.log(lastRes);