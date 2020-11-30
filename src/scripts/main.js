// Data
import { initialCards } from '../scripts/utils.js/data.js';

import {
  cardSelector,
  placesWrapSelector,
  profileTitleSelector,
  profileDescriptionSelector,
  defaultFormConfig,
  openEditFormButton,
  openCardFormButton,
  imageModalWindowSelector,
  editFormModalWindowSelector,
  cardFormModalWindowSelector,
  titleInputValue,
  descriptionInputValue
} from '../scripts/utils.js/constants.js';

import Card from '../scripts/components/card.js'
import FormValidator from '../scripts/components/form-validator.js';
import PopupWhithForm from '../scripts/components/popup-with-form.js';
import PopupWhithImage from '../scripts/components/popup-with-image.js';
import Section from '../scripts/components/section.js';
import UserInfo from '../scripts/components/user-info.js';

// Functions
function addProfileUser () {
  const profileUser = user.getUserInfo();
  titleInputValue.value = profileUser.name;
  descriptionInputValue.value = profileUser.description;
}

function renderCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.open(data);
      }
    }, cardSelector);

    return card;
}

// Class
const cardsList = new Section({
  renderer: (data) => {
    const card = renderCard(data);

      cardsList.addItem(card.getView());
  },
}, placesWrapSelector);

const user = new UserInfo({
  nameSelector: profileTitleSelector,
  descriptionSelector: profileDescriptionSelector
});

const profilePopup = new PopupWhithForm({
  popupSelector: editFormModalWindowSelector,
  formSubmitHandler: (data) => {
    user.setUserInfo(data);
  },
  popupInitBtn: openEditFormButton,
  cb: addProfileUser()
});

const cardPopup = new PopupWhithForm({
  popupSelector: cardFormModalWindowSelector,
  formSubmitHandler: (data) => {
    const card = renderCard(data);

    cardsList.addNewItem(card.getView());
  },
  popupInitBtn: openCardFormButton
});

const imagePopup = new PopupWhithImage(imageModalWindowSelector);

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindowSelector);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindowSelector);

// Render
cardsList.renderItems(initialCards);
profilePopup.setEventListeners();
cardPopup.setEventListeners();
imagePopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// Other
openEditFormButton.addEventListener('click', () => {
  addProfileUser();
  profilePopup.removeDisabledButton();
});

openCardFormButton.addEventListener('click', () => {
  cardPopup.addDisabledButton();
});
