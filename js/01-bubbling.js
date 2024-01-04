const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(e) {
  console.log('onChildClick');
  console.log(`onParentCLick - e.target -->`, e.target);
  console.log(`onParentCLick - e.currentTarget -->`, e.currentTarget);
}

function onChildClick(e) {
  console.log('onChildClick');
  console.log(`onChildClick - e.target -->`, e.target);
  console.log(`onChildClick - e.currentTarget -->`, e.currentTarget);
}

function onInnerChildClick(e) {
  console.log('onInnerChildClick');
  console.log(`onInnerChildClick - e.target -->`, e.target);
  console.log(`onInnerChildClick - e.currentTarget -->`, e.currentTarget);
}
