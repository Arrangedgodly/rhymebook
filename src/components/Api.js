export class Api {
  constructor({ url }) {
    this.url = url;
    this.max = 150;
  }

  setMax(val) {
    this.max = val;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getRhyme(word, topic) {
    return fetch(`${this.url}?rel_rhy=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getSoundAlike(word, topic) {
    return fetch(`${this.url}?rel_nry=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedAdjectives(word, topic) {
    return fetch(`${this.url}?rel_jja=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedNouns(word, topic) {
    return fetch(`${this.url}?rel_jjb=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedWords(word, topic) {
    return fetch(`${this.url}?rel_trg=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getSynonyms(word, topic) {
    return fetch(`${this.url}?rel_syn=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getAntonyms(word, topic) {
    return fetch(`${this.url}?rel_ant=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getFrequentFollowers(word, topic) {
    return fetch(`${this.url}?rel_bga=${word}&topic=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }
}