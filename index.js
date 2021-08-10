const modal = document.querySelector('.modal');
const buttonSpidey = document.querySelector('#button-spidey');
const buttonBatman = document.querySelector('#button-batman');
const buttonRobin = document.querySelector('#button-robin');
const closeButton = document.querySelector('.modal__content--close');

buttonBatman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
buttonRobin.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
buttonSpidey.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});
closeButton.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});