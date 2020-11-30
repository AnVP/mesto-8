import Popup from '../components/popup.js';

class PopupWhithForm extends Popup {
  constructor(
    {
      popupSelector,
      formSubmitHandler,
      popupInitBtn
    }) {
    super(popupSelector, popupInitBtn);
    this._form = this._container.querySelector('.popup__form');
    this._formSubmitHandler = formSubmitHandler;
    this._initBtn = popupInitBtn;
    this._buttonElement = this._form.querySelector('.popup__button');
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    if (errorElement) {
      inputElement.classList.remove('popup__input_type_error');
      errorElement.textContent = '';
      errorElement.classList.remove('popup__error_visible');
    }
  }

  _resetForm() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
    });
    this._form.reset();
  }

  addDisabledButton() {
    this._buttonElement.classList.add('popup__button_disabled');
    this._buttonElement.disabled = true;
  }

  removeDisabledButton() {
    this._buttonElement.classList.remove('popup__button_disabled');
    this._buttonElement.disabled = false;
  }

  close() {
    this._resetForm();
    super.close();
  }

  setEventListeners() {
    this._form.addEventListener('submit', () => {
      this._formSubmitHandler(this._getInputValues());
      this.close();
    });

    this._initBtn.addEventListener('click', () => {
      this.open();
    });

    super.setEventListeners();
  }
}

export default PopupWhithForm;