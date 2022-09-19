export class Rhyme {
  constructor({ word, templateSelector, sectionSelector }) {
    this.word = word;
    this.template = templateSelector;
    this.section = document.querySelector(sectionSelector);
  }

  _getTemplate = () => {
    return document
      .querySelector(this.template)
      .content.querySelector(".rhyme")
      .cloneNode(true);
  }

  generateRhyme = () => {
    this._element = this._getTemplate();
    this._element.textContent = this.word;
    this._element.setAttribute("title", this.word);
    return this._element;
  }

  addRhyme = (element) => {
    this.section.append(element);
  }
}