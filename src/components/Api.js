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
    return fetch(`${this.url}?rel_nry=${word}`)
      .then(this._checkResponse)
  }

  getRelatedAdjectives(word) {
    return fetch(`${this.url}?rel_jja=${word}`)
      .then(this._checkResponse)
  }

  getRelatedNouns(word) {
    return fetch(`${this.url}?rel_jjb=${word}`)
      .then(this._checkResponse)
  }

  getRelatedWords(word) {
    return fetch(`${this.url}?rel_trg=${word}`)
      .then(this._checkResponse)
  }

  getSynonyms(word) {
    return fetch(`${this.url}?rel_syn=${word}`)
      .then(this._checkResponse)
  }

  getAntonyms(word) {
    return fetch(`${this.url}?rel_ant=${word}`)
      .then(this._checkResponse)
  }

  getFrequentFollowers(word) {
    return fetch(`${this.url}?rel_bga=${word}`)
      .then(this._checkResponse)
  }
}