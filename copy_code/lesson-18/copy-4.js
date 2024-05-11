// if (5 + 5 === 10) {
//   console.log('Туура');
// } else {
//   console.log('Туура эмес');
// }

// 5 + 5 === 10 ? console.log('Туура') : console.log('Туура эмес');

// console.log('Start');

// let heading = '';

// let time = 17;

// if (time > 11) {
//   console.log('if');
//   heading = 'Have a good day';
// } else {
//   console.log('else');
//   heading = 'Have a good evening';
// }

// console.log('end');
// console.log(heading);

// let start = false;
// let user = 'Start'

// if (user !== 'Start'){
//     start = true;
//     document.body.innerHTML = `<p>Game of Starts</p>`
// }else {
//     document.body.innerHTML = `<p>weiting to start game</p>`
// }

// console.log(start);

// -----------------------------------------------------------------------------------------

// let start = false;
// let user = 'Start';

// console.log(start);

// let userAge = 18;
// let month = 12;

// if (month >= 12){
//     userAge = userAge + 1;
//     // userAge +=1
//     // userAge = userAge - 10 === userAge -=10
//     // userAge = userAge * 1000 === userAge *=1000
//     // userAge = userAge / 10000 === userAge /=10000
//     // userAge = userAge + 1 === userAge++
//     // userAge = userAge - 1 === userAge--
// }

// console.log(userAge);

// ----------------------------------------------------------------------------------------------

// let month = 11;
// let userAge = 17;

// userAge = month >= 12 ? ++userAge : userAge;
// console.log(userAge);

// const gradus = 5;
// const pogoda = gradus < 0 ? 'winter' : 'vesna';

// console.log(pogoda);

// const userAnswer = confirm('Are you student')

// const isStudent =  userAnswer ? 'wery good' : 'oh no'

// console.log(isStudent);

// --------------------------------------------------------------------------------------------------

// const userAnswer = prompt('Are you teacher');

// let isTeacher = '';

// if (userAnswer == 33) {
//     isTeacher = "Wery good"
//     console.log(isTeacher);
// }else {
//     isTeacher = 'Why'
//     console.log(isTeacher);
// }

// ------------------------------------------------------------------------------------------------------

// function showExample() {
//   console.log('jumush');
//   console.log(3 * 3);
// }

// showExample();

// function calcNumbers(x, y) {
//   const result = x / y;
//   console.log(result);
// }

// calcNumbers(100, 10);
// calcNumbers(32324, 322);

// function plus(birinchi, ekinchi) {
//   console.log(birinchi);
//   console.log(ekinchi);
// }

// plus('Peacsoft', 123434);

// function plus(first, second, third) {
//   console.log(first, 'first');
//   console.log(second, 'second');
//   console.log(third, 'third');
// }

// plus (323,3434,3434)

// function plasses(first,second,third){
//     if (first){
//         console.log('is it first');
//     }
//     if (second){
//         console.log('is it second');
//     }
//     if (third){
//         console.log('is it third');
//     }
// }

// plasses(false,true,'Adilet')

// -------------------------------------------------------------------------------------

// const showAlert = function (name) {
//   alert(`Assalamy alaikum ${name}`);
//   document.body.innerHTML = `Assalamy alaikum ${name}`;
// };

// let userName = 'Adilet'
// showAlert('Beckjan')
// showAlert('Kamchy')
// showAlert(userName)

// ----------------------------------------------------------------------------------------

// const showAlert = function (name, surname = 'Zainidinov') {
//   console.log(`Helloo ${name} ${surname}`);
// };

// let userName = 'Adilet';
// showAlert('kairat');
// showAlert('Madina', 'Zainidinova');
// showAlert(userName);

// const arrowFn = (a, b) => {
//   console.log(a, b);
// };
// arrowFn(100000, false);

// function plus(bir, eki) {
//   return bir + eki;
// }

// console.log(plus(22, 21));

// let math = 12 - 3;

// console.log(math);
// let our = plus(23,33)
// console.log(our);
// console.error(plus(9,1));

// ----------------------------------------------------------------------------------------------

// function plus(first, second) {
//   first + second;
//   return 'Helloo group JS-13';
// }

// let our = plus(3233, 323);
// console.log(our);
// document.body.innerHTML = `<h1>${plus()}</h1>`;

// function plasses(first, second) {
//   let result = first / second;
//   return result;
// }

// let ours = plasses(23, 32);
// console.log(ours + ' bollyy');
// document.body.innerHTML = ours + ' bollyy';

// function plusExtra(first, second) {
//   let result = first * second;

//   console.log('1');
//   console.log('2');
//   console.log('3');
//   return result;
//   console.log('4');
//   console.log('5');
// }

// console.log(plusExtra(23, 33));
// document.body.innerHTML = plusExtra(343, 33);

// ----------------------------------------------------------------------------------------------------

// function plus(first, second) {
//   let result = first + second;
//   if (result > 10) {
//     return 'bolshe';
//   }
//   console.log('menshe');
//   return true;
// }

// let all = plus(2, 4);
// console.log(all);
// document.body.innerHTML = all;

// ---------------------------------------------------------------------------

// function plus(first, second) {
//   let result = first + second;
//   if (result > 150) {
//     return false;
//   }
//   console.log('Hi');
//   return true;
// }

// plus(23, 3);

// if (plus(3, 2)) {
//   alert('privet');
// }

// function plus(first, second) {
//   let result = first + second;
//   if (result > 3034) {
//     return false;
//   }
//   console.log('CANT WORK');
//   return true;
// }

// plus(21153, 53);

// let result = Math.random();
// console.log(result);

// function plus(first,second){
// let result = first * second;
// return result;
// }

// let results = plus(23,33)
// console.log(results);

// function hi(user) {
//     return 'Plivet ' + user;
//   }
  
//   document.body.innerHTML = hi('Adilet');

// --------------------------------------------------------------------

// function generateNumber() {
//   return Math.floor(Math.random() * 100);
// }

// let randomNumberOfAizat = generateNumber();
// let randomNumberOfHadizha = generateNumber();
// let randomNumberOfAdielt = generateNumber();

// function findBiggestNumber(first, second, third) {
//   console.log(first, 'Adilet');
//   console.log(second, 'Aizat');
//   console.log(third, 'Hadizha');

//   let result = null;

//   if (first > second && first > third) {
//     result = first + 'Adilet';
//   }
//   if (second > first && second > third) {
//     result = second + 'Aizat';
//   }
//   if (third > first && third > second) {
//     result = second + 'Hadizha';
//   }
//   return result;
// }

// const lastRes = findBiggestNumber(
//   randomNumberOfAdielt,
//   randomNumberOfAizat,
//   randomNumberOfHadizha
// );

// const another = findBiggestNumber(323, 3434, 232);
// console.log(another, 'Another');
// console.log(lastRes);
