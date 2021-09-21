const popupButton = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__input--name');
const popupClose = document.querySelector('.popup__close');
const page = document.querySelector('.page');
const username = document.querySelector('.popup__input--name')

popupButton.addEventListener('click', () => {
  if (popup.classList.contains('popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
    page.classList.add('page--popup');
    username.focus();
  }
})

popupClose.addEventListener('click', () => {
  if (popup.classList.contains('popup--closed') === false) {
    popup.classList.add('popup--closed')
    popup.classList.remove('popup--opened');
    page.classList.remove('page--popup')
  }
})

document.addEventListener('keydown', (event) => {
  if (event.keycode === 27) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      page.classList.remove('page--popup')
    }
  }
})

