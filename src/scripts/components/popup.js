import { ESC_KEYCODE } from '../utils.js/constants.js';

class Popup {
  constructor(popupSelector, cb) {
    this._container = document.querySelector(popupSelector);
  }

  open() {
    this._container.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose.bind(this));
  }

  close() {
    this._container.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this._container.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('popup') || target.classList.contains('popup__close')) {
        this.close()
      }
    });
  }

  if (cb) {
    cb();
  }
}

export default Popup;