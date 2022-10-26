'use strict'

const THUMBNAILS = document.querySelectorAll('.thumbnail input')
const MODAL = document.querySelector('.modal')
const MODAL_IMG = document.querySelector('.modal__img')
const MODAL_CLOSE = document.querySelector('.modal__close')
const MODAL_ARROW_RIGHT = document.querySelector('.modal__arrow-right')
const MODAL_ARROW_LEFT = document.querySelector('.modal__arrow-left')
let currentImgIndex

THUMBNAILS.forEach((img, index) => {
	img.addEventListener('click', e => {
		MODAL_IMG.src = e.target.src
		MODAL.showModal()
		document.body.classList.add('overflow')
		currentImgIndex = index
	})
})

function showNextImg() {
	if (currentImgIndex === THUMBNAILS.length - 1) {
		currentImgIndex = 0
	} else {
		currentImgIndex++
	}
	MODAL_IMG.src = THUMBNAILS[currentImgIndex].src
}

function showPreviousImg() {
	if (currentImgIndex === 0) {
		currentImgIndex = THUMBNAILS.length - 1
	} else {
		currentImgIndex--
	}
	MODAL_IMG.src = THUMBNAILS[currentImgIndex].src
}

MODAL_CLOSE.addEventListener('click', () => {
	MODAL.classList.add('fade-out')

	setTimeout(() => {
		MODAL.close()
		document.body.classList.remove('overflow')
		MODAL.classList.remove('fade-out')
	}, 300)
})

document.addEventListener('keydown', e => {
	if (MODAL.open) {
		if (e.code === 'ArrowRight') {
			showNextImg()
		}

		if (e.code === 'ArrowLeft') {
			showPreviousImg()
		}
	}
})

MODAL_ARROW_RIGHT.addEventListener('click', showNextImg)
MODAL_ARROW_LEFT.addEventListener('click', showPreviousImg)
