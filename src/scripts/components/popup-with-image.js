import Popup from '../components/popup.js';

class PopupWhithImage extends Popup {

  open({ name, link }) {
    this._container.querySelector('.popup__caption').textContent = name;
    const img = this._container.querySelector('.popup__image');
    img.src = link;
    super.open();
  }
}

export default PopupWhithImage;