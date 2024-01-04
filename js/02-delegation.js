const cont = document.querySelector('.js-container');

cont.addEventListener('click', onContClick);

function onContClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.textContent);
}

// код додавання кнопок

const addBtn = document.querySelector('.js-add-btn');

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick(e) {
  const newBtn = document.createElement('button');
  newBtn.type = 'button';

  const num = document.querySelectorAll('.js-container button').length + 1;
  newBtn.textContent = `Кнопка ${num}`;

  cont.insertAdjacentElement('beforeend', newBtn);
}
