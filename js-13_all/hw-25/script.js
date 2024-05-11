const menu = [
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 1,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 2,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 3,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 4,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 5,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
  {
    img: 'img/7729570d29866a51b75c55e91d733364-removebg-preview.png',
    id: 6,
    title: 'Hamburger:',
    price: 80,
    quantity: 1,
  },
];

//
let wrapper = document.querySelector('.wrapper');

function add() {
  let displayMenu = '';

  menu.forEach(function (item) {
    displayMenu += `
<button class="hamburger" onclick="nazmi(${item.id})">
            <img class="foto"
              src="${item.img}"
              alt="img"
            />
            <p>${item.title} <br> <span>${item.price}</span> сом</p>
          </button>
`;
    wrapper.innerHTML = displayMenu;
  });
}
add();

let satypAlyy = document.querySelector('.order-box');

let orderBuy = [];

const nazmi = (param) => {
  //   let existingFood = orderBuy.find(({ id }) => id === param);

  let displayOrder = '';
  const filterTask = menu.find(({ id }) => id === param);
  orderBuy.push(filterTask);

  orderBuy.forEach(function (item) {
    displayOrder += `
    <div class="hamburger_aside">
    <p>
      <span class="food">${item.title}</span>
      <span class="quantity">${item.quantity}</span>
      <span>*</span>
      <span class="prise">${item.price}</span> сом
      <span>+</span>
    </p> </div>
  `;
    satypAlyy.innerHTML = displayOrder;
  });
};
