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
// userInfo.phonNumber = 32323;
// userInfo.favoriteColor = {
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

// ---------------------------------------------------

// const userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   city: 'Bishkek',
//   sayHello: () => {
//     console.log('Helloo from function');
//   },
// };

// userInfo.name = 'Alina';

// console.log(userInfo);

// let promts = promt('write');

// const checkName = () => {
//   if (promts === userInfo.name) {
//     console.log(userInfo.age);
//   } else {
//     console.log('error');
//   }
// };

// checkName();

// ---------------------------------------------

// let userName = 'Max';
// let age = 20;

// let user = {
//   name: userName,
//   age,
//   collors: {
//     red: 'red',
//     blue: 'blue',
//   },
//   color: 'red',
// };

// delete user.collors.blue;
// delete user.color;
// user['is Married'] = false;

// console.log(user);

// -------------------------------------------

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

// -------------------------------------------------

// let userKey = prompt('Your name of key');

// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// function checkNameOfKey() {
//   for (key in user) {
//     if (key === userKey) {
//       console.log(user[key]);
//     } else {
//       console.log('samthing went wrong');
//     }
//   }
// }

// checkNameOfKey();

// --------------------------------------------

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

// -----------------------------------------------

// let obj = {
//   name: 'Max',
// };

// let obj1 = obj;

// obj.name = 'Alina';
// obj.age = 20;

// console.log(obj, 'obj');
// console.log(obj1, 'obj1');

// ----------------------------------------------------

// let object1 = {};
// let object2 = object1;

// object1.name = 'Alex';
// object2.city = 'Bishkek';

// console.log(object1);
// console.log(object2);

// let object3 = object2;
// object3.color = 'red';

// console.log(object1 === object2);
// console.log({} === {});

// -----------------------------------------------

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
// user1.colors.red = 'reeeeeeeeeeeeeed';

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

// let user1 = { ...user };
// user1.colors.red = 'lslsllsllsll';

// console.log(user);
// console.log(user1);

// --------------------------------------------

// let user = {
//   age: 30,
//   colors: {
//     red: 'red',
//     blue: 'blue',
//     foods: {
//       beshbarmak: 'beshbarmak',
//     },
//   },
//   city: 'Bishkek',
// };

// let copiedObject = JSON.stringify(user);
// let transformedToObject = JSON.parse(copiedObject);

// console.log(user);
// console.log(copiedObject);
// console.log(transformedToObject);

// transformedToObject.colors.red = 'reeeeeeeeeeeeeeeeeeeeed';
// transformedToObject.colors.foods.beshbarmak = 'lapshaaaaaaa';

// console.log(user);
// console.log(transformedToObject);
