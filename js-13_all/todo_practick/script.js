const input = document.querySelector('#input-box');
const list = document.querySelector('#list-container');

function addTask() {
  if (input.value === '') {
    alert('bir nerse jaz');
  } else {
    let li = document.createElement('LI');
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement('SPAN');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  input.value = '';
  set();
}

list.addEventListener('click', function create(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    set();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    set();
  }
});

function set() {
  localStorage.setItem('k', list.innerHTML);
}

function get() {
  list.innerHTML = localStorage.getItem('k');
}

get();
