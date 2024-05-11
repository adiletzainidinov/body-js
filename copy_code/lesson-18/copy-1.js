// function showExample() {
//   console.log('WORK');
//   console.log(2 + 2);
// }
// showExample();

// function calcNumbers(x, y) {
//   const result = x + y;
//   console.log(result);
// }
// calcNumbers(323, 3443);
// calcNumbers(23, 34);

// function plus(birinchi, ekinchi, hadizha) {
//   console.log(birinchi, 'birinchi');
//   console.log(ekinchi, 'ekinchi');
//   console.log(hadizha, 'uchunchy');
// }

// plus(3, 43, 33);

// function plus(birinchi, ekinchi, hadizha) {
//   if (birinchi) {
//     console.log('is it birinchi');
//   }
//   if (ekinchi) {
//     console.log('is it ekinchi');
//   }
//   if (hadizha) {
//     console.log('is it uchunchy');
//   }
// }

// plus(false, true, 'hadizha');

// const showAlert = function (name) {
//   alert(`Helloo,${name}`);
//   document.body.innerHTML = name;
// };

// let userName = 'Aizat';
// showAlert('Islam');
// showAlert('Mahachev');
// showAlertI(userName);

// Функция, которая принимает два параметра, один из которых имеет значение по умолчанию.

// const showAlert = function (name, surname = 'Usmanova') {
//   console.log(`Helloo, ${name} ${surname}`);
// };
// let userName = 'Aizat'
// showAlert('Islam')
// showAlert('mahachev','islam')
// showAlert(userName)

// Стрелочная функция, которая выводит два переданных ей аргумента.

// const arrowFn = (a, b) => {
//   console.log(a, b);
// };

// arrowFn(200000000, false);

// Функция, которая складывает два числа и возвращает результат.

// function plus(bir, eki) {
//   return bir + eki;
// }

// let matematika = 10 + 15;

// console.log(matematika);
// let bizdin = plus(100, 20);
// console.log(bizdin);
// console.error(plus(9, 9));

// Функция, которая складывает два числа и возвращает строку "Helloo world JS-13".

// function plus (bir,eki){
//     bir + eki;
//     return "Helloo world JS-13"
// }

// let bizdin = plus (100,20)
// console.log(bizdin);
// document.body.innerHTML = `<h1>${plus()}</h1>`

// Функция, которая складывает два числа и возвращает результат, также выводит несколько сообщений на консоль.

// function plus(bir, eki) {
//   let result = bir + eki;

//   console.log('1');
//   console.log('2');
//   console.log('3');
//   return result;
//   console.log('4');
//   console.log('5');
// }

// let bizdin = plus(100, 20);
// console.log(bizdin);
// document.body.innerHTML = bizdin;

// Функция, которая складывает два числа и возвращает false, если результат больше 10, иначе true.

// function plus(bir, eki) {
//   let result = bir + eki;
//   if (result < 10) {
//     return false;
//   }
//   console.log('work');
//   return true;
// }

// let result = Math.random();
// console.log(result);

// Функция, которая генерирует случайное число от 0 до 99.

// function generateNumber() {
//   return Math.floor(Math.random() * 100);
// }

// let randomNumberOfAizat = generateNumber();
// let randomNumberOfHadizha = generateNumber();
// let randomNumberOfAdilet = generateNumber();

// Функция, которая находит наибольшее из трех чисел и возвращает строку с именем и числом.

// function findBiggestNumber(bir, eki, uch) {
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

// const another = findBiggestNumber(10, 20, 30);
// console.log(another, 'Another');
// console.log(lastRes);
