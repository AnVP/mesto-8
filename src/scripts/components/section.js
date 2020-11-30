class Section {
  constructor(
    {
      renderer
   }, 
   sectionSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(sectionSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }
}

export default Section;