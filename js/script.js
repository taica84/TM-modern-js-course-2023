//  ---------------Dropdown menu  ----------

const dropdowns = document.querySelectorAll('.dropdowns');
const select = document.querySelectorAll('.select');
const menu = document.querySelector('.menu');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const menu = dropdown.querySelector('.menu');
  const caret = dropdown.querySelector('.caret');

  //Add Event Listener for each element
  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('active');
  });
});

//-----------------  Modal ---------------

const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const video = document.querySelector('.video');

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click',closeModal);

function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
  video.pause();
  video.currentTime = 0;
}
