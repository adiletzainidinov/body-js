// 1)WORK

// let figure = 1
// while (figure <= 100) {
//   console.log(`figure ${figure}`);

//   figure++;
// }

// for (let figure = 1; figure <= 100; figure++) {
//     console.log(`The figire number${figure}`);
// }

// 2)WORK

// let evenNumbers = 1;

// while (evenNumbers <= 100) {
//   if (evenNumbers % 2 <= 0) {
//     console.log(`even numbers on the screen ${evenNumbers}`);
//   }
//   evenNumbers++;
// }

// for (let evenNumbers = 1; evenNumbers <= 100; evenNumbers++) {
//   if (evenNumbers % 2 <= 0) {
//     console.log(`even numbers on the screen ${evenNumbers}`);
//   }
// }

// 3)WORK

// let evenDigits = 1;
// let sum = 0;

// while (evenDigits <= 100) {
//   if (evenDigits % 2 <= 0) {
//     sum = evenDigits + sum;
//     console.log(sum);
//   }
//   evenDigits++;
// }

// let sum = 0;

// for (evenDigits = 1; evenDigits <= 100; evenDigits++) {
//   if (evenDigits % 2 <= 0) {
//     sum = sum + evenDigits
//     console.log(sum);
//   }
// }

// 4)WORK

// let index = 0
// let string = "Naruto Shipuden"
// const check = prompt('Напишите букву')

// while (index <= string.length ) {
//     const forCheck = string.charAt(index);
//     if (forCheck === check) {
//         console.log(`В этом тексте есть такой такая буква под индексом ${index}`)
//         break;
//     }index++;
// }

// let string = "Naruto Shipuden";
// const check = prompt('Напишите букву');

// for (let index = string.length -1; index >= 0; index--) {
//     const forCheck = string.charAt(index);
//     if (forCheck === check) {
//         console.log(`В этом тексте есть такой такая буква под индексом ${index}`);
//     }
// }

// 5)WORK

// let string = 'Helloo';
// let reverseString = '';
// let index = string.length -1;

// while (index >= 0) {
//     reverseString += string.charAt(index);
//     index--;
// }console.log(reverseString);

// let string = 'Helloo';
// let reverseString = '';

// for (let index = string.length - 1; index >= 0; index--)
//   reverseString += string.charAt(index);
// {
//   console.log(reverseString);
// }

// 5)WORK

// const star = 10;
// let line = '';

// for (let i = 0; i < star; i++) {
//     for (let k = 0; k < star; k++) {
//         if (i === 0 || i === star - 1 || k === 0 || k === star - 1) {
//             line += '*';
//         } else {
//             line += '-';
//         }
//     }
//     line += '\n';
// }

// console.log(line);

// const star = 10;
// let line = '';
// let i = 0;

// while (i < star) {
//   let k = 0;
//   while (k < star) {
//     if (i === 0 || i === star - 1 || k === 0 || k === star - 1) {
//       line += '*';
//     } else {
//       line += '-';
//     }
//     k++;
//   }
//   line += '\n';
//   i++;
// }

// console.log(line);

// let word;

// while (word !== 'Хватит!')
// {
//   console.log('user:', word);
//   word = prompt('напиши ключевое слово');
// } console.log('123');
