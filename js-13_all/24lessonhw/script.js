let obj = {
  name: 1,
  quantity: 1,
  prise: 12222,
  total: 1,
  id: 1,
};
const add = document.querySelector('.add');
const secondBox = document.querySelector('.second-box');

add.addEventListener('click', add);

function add() {
  let vse;
  event.preventDefault();
  obj.forEach(function (item) {
    vse += `   <div class="vse">
  <p>${item.name}</p>
  <h3>${item.quantity}</h3>
  <h4>${item.prise}</h4>
  <h5>${item.total}</h5>
  <button>delete</button>
</div>`;
    secondBox.innerHTML = vse;
  });
}

