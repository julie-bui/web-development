const openButton = document.getElementsByClassName('open-modal');
const closeButton = document.getElementsByClassName('close-modal');
const dialog = document.getElementsByClassName('modal');
// Getting the elements by class name creates an array, thus need to reference the index in order to use specific elements.

openButton[0].addEventListener('click', () => {
	dialog[0].showModal();
});

closeButton[0].addEventListener('click', () => {
	dialog[0].close();
});