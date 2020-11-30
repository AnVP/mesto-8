class Card {
  constructor(
    {
      data,
      handleCardClick
    }, cardSelector) {
    this._text = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button')
      .addEventListener('click', () => this._handleLikeIcon());

    this._element.querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCard());

    this._element.querySelector('.card__image')
      .addEventListener('click', () => this._handleCardClick({
        name: this._text,
        link: this._link
      }));
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').
      classList.toggle('card__like-button_is-active');
  }

  _handleDeleteCard() {
    this._element.remove();

    // Посоветовать занулять элемент
    this._element = null;
  }

  getView() {
    // Публичный метод, возвращащий представление карточки;
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.card__title').textContent = this._text;

    return this._element;
  }
}

export default Card;
