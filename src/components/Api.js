export class Api {
  constructor({ url }) {
    this.url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getRhyme(word) {
    return fetch(`${this.url}?rel_rhy=${word}`)
      .then(this._checkResponse)
  }

  getSoundAlike(word) {
    return fetch(`${this.url}?sl=${word}`)
      .then(this._checkResponse)
  }

  getRelatedWords(word) {
    return fetch(`${this.url}?rel_jjb=${word}`)
      .then(this._checkResponse)
  }
}