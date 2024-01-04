// один з багатьох

// const tagsCont = document.querySelector('.js-tags');
// let selectedTag = null;
// tagsCont.addEventListener('click', onTagsContClick);

// function onTagsContClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--active');

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// багато з багатьох

const tagsCont = document.querySelector('.js-tags');
let selectedTags = new Set();
tagsCont.addEventListener('click', onTagsContClick);

function onTagsContClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = e.target;
  const tag = btn.dataset.value;
  btn.classList.toggle('tags__btn--active');

  selectedTags.has(tag) ? selectedTags.delete(tag) : selectedTags.add(tag);

  console.log(selectedTags);
}
