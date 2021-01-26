'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal(){
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	}

for (var i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click',openModal);
}

function closeModals(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModals);
overlay.addEventListener('click',closeModals);

document.addEventListener('keydown',function(e){
	if(e.key ==='Escape' && !modal.classList.contains('hidden'))
		closeModals();
});