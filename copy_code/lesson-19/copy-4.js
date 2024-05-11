// let userInfo = {
//   name: 'Max',
//   age: 20,
//   'is Married': false,
//   'for delete': true,
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
//   'is Married': 'yes',
//   city: 'london',
//   sayPrivet: () => {
//     console.log('Helloo from function');
//   },
// };

// userInfo.name = 'Aijan';

// console.log(userInfo);
// userInfo.sayPrivet();

// let promter = +prompt('jaz');

// const checkAtt = () => {
//   if (promter === userInfo.age) {
//     console.log(userInfo['is Married']);
//   } else {
//     userInfo.sayPrivet();
//   }
// };

// checkAtt();

// -------------------------------------------------

// let userName = 'Max';
// let age = 20;

// let user = {
//   name: userName,
//   age,
//   coloryyy: {
//     black: 'black',
//     white: 'white',
//   },
//   color: 'red',
// };

// delete user.coloryyy.black;
// delete user.color;
// user['is turmush'] = false;

// console.log(user);

// -----------------------------------------

// let userName = 'Maxim';
// let age = 42;

// const user = {
//   name: userName,
//   age,
//   svet: 'black',
// };

// for (key in user) {
//     console.log(key);
// }

// for (key in user) {
//      console.log(user[key]);
// }

// -----------------------------------------------

// let userKey = prompt('Your name of keyboard');
// const user = {
//   aty: 'Manas',
//   jashy: 20,
//   sveti: 'kok',
//   'for clg': 'samthing went wrong ',
// };

// function karaKluchtunAtyn() {
//   for (key in user) {
//     if (key === userKey) {
//       console.log(user[key]);
//       break;
//     } else {
//       console.log(user['for clg']);
//     }
//   }
// }

// karaKluchtunAtyn();

// --------------------------------------------------

// let key = prompt('key name');

// const user = {
//   name: 'Max',
//   age: 20,
//   colors: 'blue',
// };

// console.log(user[key]);

// ----------------------------------------------

// let a = 'plivet';
// let b = a;

// console.log(a);
// console.log(b);

// a = 'car';

// console.log(a);
// console.log(b);

// --------------------------------------

// let obj = {
//   aty: 'Mairambek',
// };

// let objfirst = obj;

// obj.aty = 'Altynai';
// obj.age = 33;

// console.log(obj, 'obj');
// console.log(objfirst, 'objfirst');

// ------------------------------------------

// let objectfirst = {};
// let objectSecond = objectfirst;

// objectSecond.name = 'Alex';
// objectfirst.city = 'Bishkek';

// console.log(objectfirst);
// console.log(objectSecond);

// let objectthird = objectSecond;
// objectthird.color = 'red';

// console.log(objectfirst === objectSecond);
// console.log({} === {});
// console.log(objectthird);

// ----------------------------------------------

// let objectFirst = { age: 20 };
// let objectSecond = { age: 33 };

// objectFirst.name = 'Max';

// console.log(objectFirst === objectSecond);
// console.log(objectFirst);
// console.log(objectSecond);

// ------------------------------------------

// const userInfo = {
//   name: 'Max',
//   age: 20,
//   'is turmush': 'turmush ehhh',
//   aiyl: 'kok tash',
//   aitKanday: () => {
//     console.log('kandai funksia jaktan');
//   },
// };

// let user = {
//   age: 34,
//   swet: {
//     jashyl: 'jashyl',
//     kyzyl: 'kyzyl',
//   },
//   kyshtak: 'isfana',
// };

// let objectinAty = {
//   okuit: 'jalgan',
// };

// let userfirst = Object.assign({}, userInfo, user, { salam: 'kanday' });
// user.emne = 'deisin';

// console.log(userfirst);
// console.log(user);

// ------------------------------------------

// let user = {
//   jashy: 45,
//   'baiagy ele sweti': {
//     kyzyl: 'kyzyl',
//     kok: 'kok',
//   },
//   aiyl: 'kol',
// };

// let userfirst = { ...user };
// userfirst['baiagy ele sweti'].kok = 'kooooooooooooook';
// user.jashy = 100;

// console.log(user);
// console.log(userfirst);

// ---------------------------------------------

// // DEEP copy

// let user = {
//   age: 232,
//   sweti: {
//     kyzul: 'kyzul',
//     kok: 'kok',
//     foods: {
//       manty: 'manty',
//     },
//   },
//   ayil: 'osh',
// };

// let copiedObject = JSON.stringify(user);
// let transformedToObject = JSON.parse(copiedObject);

// console.log(user);
// console.log(copiedObject);
// console.log(transformedToObject);

// transformedToObject.sweti.red = 'reeeeeeeeeeeeeeeeed';
// transformedToObject.sweti.foods.manty = 'eeeeeeeeeeeeeeet';

// console.log(user);
// console.log(transformedToObject);
