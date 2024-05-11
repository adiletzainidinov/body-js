// let userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   'for delete': true,
//   city: 'Bishkek',
//   sayHelloo: () => {
//     console.log('Helloo from function');
//   },
// };

// userInfo.favoriteColor = 'red';
// userInfo.phoneNumber = 3423;
// userInfo.favoriteColors = {
//   red: 'red',
//   blue: 'blue',
//   pink: 'pink',
// };

// delete userInfo.favoriteColor;
// delete userInfo['for delete'];
// userInfo.sayHelloo();

// console.log(userInfo['is Married']);
// console.log(userInfo.age);
// console.log(userInfo);

// -------------------------------------------------

// const userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   city: 'Bishkek',
//   sayHelloo: () => {
//     console.log('Helloo from function');
//   },
// };

// userInfo.name = 'Alina';

// console.log(userInfo);

// let promts = prompt('write');

// const checkName = () => {
//   if (promts === userInfo.name) {
//     console.log(userInfo.name);
//   } else {
//     console.log('error');
//   }
// };

// checkName();

// --------------------------------------------------

// let userName = 'Max';
// let age = 20;

// let user = {
//   name: userName,
//   age,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   color: 'red',
// };

// delete user.colors.blue;
// delete user.color;
// user['is Married'] = false;

// console.log(user);

// ---------------------------------------------------

// let userName = 'Max';
// let age = 12;

// const user = {
//   name: userName,
//   age,
//   colors: 'blue',
// };

// for (key in user) {
//   console.log(key);
// }

// for (key in user) {
//   console.log(user[key]);
// }

// ------------------------------------------------------

// let userKey = prompt('Your name of key');

// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// function checkNameOfKey() {
//   for (key in user) {
//     if (key === userKey) {
//       //key: name, user:name
//       console.log(user[key]);
//       break;
//     } else {
//       console.log('smth went wrong');
//     }
//   }
// }

// checkNameOfKey();

// ----------------------------------------------

// let key = prompt('key name');

// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// console.log(user[key]);

// -----------------------------------------------

// let a = 'helloo';
// let b = a;

// console.log(a);
// console.log(b);

// a = 'car';

// console.log(a);
// console.log(b);

// ----------------------------------------------

// let obj = {
//   name: 'Max',
// };

// let obj1 = obj;

// obj.name = 'Alina';
// obj.age = 20;

// console.log(obj, 'obj');
// console.log(obj, 'obj1');

// ---------------------------------------------

// let objeckt1 = {};
// let objeckt2 = objeckt1;
// objeckt2.name = 'Alex';
// objeckt1.city = 'Bishkek';

// console.log(objeckt1);
// console.log(objeckt2);

// let objeckt3 = objeckt2;
// objeckt3.color = 'red';

// console.log(objeckt1 === objeckt2);
// console.log({} === {});

// ----------------------------------------------

// let objeckt1 = { age: 20 };
// let objeckt2 = { age: 30 };

// objeckt1.name = 'Max';

// console.log(objeckt1 === objeckt2);
// console.log(objeckt1);
// console.log(objeckt2);

// --------------------------------------------

// const userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   city: 'Bishkek',
//   satHelloo: () => {
//     console.log('Helloo from function');
//   },
// };

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   city: 'Bishkek',
// };

// let nameObjeckt = {
//   stady: false,
// };

// let user1 = Object.assign({}, user, nameObjeckt, { name: 'Ali' }, userInfo);
// user1.colors.red = 'reeeeeeeeeeeeeeeeeeed';

// console.log(user);
// console.log(user1);

// ----------------------------------------------

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   city: 'Bishkek',
// };

// let user1 = { ...user };
// user1.colors.red = 'lalallaallall'
// user.age = 100;

// console.log(user);
// console.log(user1);

// ----------------------------------------------

// // DEEP copy

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//     foods: {
//       beshbarmak: 'beshbarmak',
//     },
//   },
//   sity: 'Bishkek',
// };

// let copiedObject = JSON.stringify(user);
// let transformedToObjeckt = JSON.parse(copiedObject);

// console.log(user);
// console.log(copiedObject);
// console.log(transformedToObjeckt);

// transformedToObjeckt.colors.red = 'reeeeeeeeeeeeeed';
// transformedToObjeckt.colors.foods.beshbarmak = 'lapshaaaaaaaaaaaaaaaaaaaaaaaaa';

// console.log(user);
// console.log(transformedToObjeckt);
