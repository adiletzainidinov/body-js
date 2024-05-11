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

// userInfo.error = 'error';
// userInfo.favoriteColor = 'red';
// userInfo.phoneNumber = 32423;
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
// console.log(userInfo.favoriteColors.blue);
// document.body.innerHTML = userInfo.city;

// let userage = userInfo.age;
// let promt = +prompt('Write');

// const promtFn = () => {
//   if (promt === userInfo.age) {
//     console.log(userInfo.age);
//   }
//   if (promt === userInfo.age) {
//     console.log(userInfo.name);
//   }
//   if (promt === userInfo.age) {
//     document.body.innerHTML = userInfo.favoriteColors.red;
//   } else {
//     document.body.innerHTML = userInfo.error;
//     console.log(userInfo.error);
//   }
// };
// promtFn();

// ----------------------------------------------

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

// let prompts = prompt('write');

// const checkName = () => {
//   if (prompts === userInfo.name) {
//     console.log(userInfo.age);
//   } else {
//     console.log('error');
//   }
// };

// checkName();
// userInfo.sayHelloo();

// ------------------------------------------------

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

// ----------------------------------------------------

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

// -----------------------------------------------

// let userKey = prompt('Your name of key');
// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// function checkName() {
//   for (key in user) {
//     if (key === userKey) {
//       console.log(user[key]);
//       break;
//     } else {
//       console.log('Samthing went wrong');
//     }
//   }
// }

// checkName();

// ------------------------------------------

// let key = prompt('key name');

// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// console.log(user[key]);

// --------------------------------------------

// let a = 'helloo';
// let b = a;

// console.log(a);
// console.log(b);

// a = 'car';

// console.log(a);
// console.log(b);

// --------------------------------------------

// let obj = {
//   name: 'Max',
// };

// let obj1 = obj;

// obj.name = 'Alina';
// obj.age = 20;

// console.log(obj, 'obj');
// console.log(obj1, 'obj1');

// ----------------------------------------------

// let object1 = {};
// let object2 = object1;

// object2.name = 'Alex';
// object1.city = 'Bishkek';

// console.log(object1);
// console.log(object2);

// ---------------------------------------------

// let object1 = { age: 20 };
// let object2 = { age: 30 };

// object1.name = 'Max';

// console.log(object1 === object2);
// console.log(object1);
// console.log(object2);

// -----------------------------------------------

// const userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   city: 'Bishkek',
//   sayHelloo: () => {
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

// let nameObject = {
//   study: false,
// };

// let user1 = Object.assign({}, user, nameObject, { name: 'Ali' }, userInfo);
// user1.colors.red = 'reeeeeeeeeed';

// console.log(user);
// console.log(user1);

// -------------------------------------------

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   city: 'Bishkek',
// };

// let anotherUser = {
//   userName: 'Adilet',
//   userSurname: 'Zainidinov',
//   city: 'Batken',
// };

// let user1 = { ...user, anotherUser };
// user1.colors.red = 'sdlfjdslfdslfjsl';
// user1.age = 100;

// console.log(user);
// console.log(user1);

// ----------------------------------------------

// // DEEP copy

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   foods: {
//     beshbarmak: 'beshbarmak',
//   },
//   city: 'Bishkek',
// };

// let copiedObject = JSON.stringify(user);
// let transformedToObject = JSON.parse(copiedObject);

// console.log(user);
// console.log(copiedObject);
// console.log(transformedToObject);

// transformedToObject.colors.red = 'reeeeeeeeeeeeeeed';
// transformedToObject.foods.beshbarmak = 'lapshaaaaaaaaaaaaaaaaaaaaaaaa'

// console.log(user);
// console.log(transformedToObject);
