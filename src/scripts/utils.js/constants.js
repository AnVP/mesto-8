export const ESC_KEYCODE = 27;

// Врапперы
export const imageModalWindowSelector = '.popup_type_image';
export const imageModalWindow = document.querySelector('.popup_type_image');
export const imageElement = imageModalWindow.querySelector('.popup__image');
export const imageCaption = imageModalWindow.querySelector('.popup__caption');
export const placesWrap = document.querySelector('.places__list');
export const placesWrapSelector = '.places__list';
export const editFormModalWindowSelector = '.popup_type_edit';
export const cardFormModalWindowSelector = '.popup_type_new-card';
export const editFormModalWindow = document.querySelector('.popup_type_edit');
export const cardFormModalWindow = document.querySelector('.popup_type_new-card');

// Кнопки и прочие дом узлы
export const openEditFormButton = document.querySelector('.profile__edit-button');
export const openCardFormButton = document.querySelector('.profile__add-button');

// DOM узлы профиля
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');
export const profileTitleSelector = '.profile__title';
export const profileDescriptionSelector = '.profile__description';

// Данные форм и элементы форм
export const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_name');
export const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
export const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
export const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');

export const cardSelector = '.card-template';
export const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
