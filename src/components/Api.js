export class Api {
  constructor({ url }) {
    this.url = url;
    this.max = 150;
    this.engine = "topic";
  }

  setMax(val) {
    this.max = val;
  }

  changeEngine(val) {
    this.engine = val;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getRhyme(word, topic) {
    return fetch(`${this.url}?rel_rhy=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getSoundAlike(word, topic) {
    return fetch(`${this.url}?rel_nry=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedAdjectives(word, topic) {
    return fetch(`${this.url}?rel_jja=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedNouns(word, topic) {
    return fetch(`${this.url}?rel_jjb=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getRelatedWords(word, topic) {
    return fetch(`${this.url}?rel_trg=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getSynonyms(word, topic) {
    return fetch(`${this.url}?rel_syn=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getAntonyms(word, topic) {
    return fetch(`${this.url}?rel_ant=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }

  getFrequentFollowers(word, topic) {
    return fetch(`${this.url}?rel_bga=${word}&${this.engine}=${topic}&max=${this.max}`)
      .then(this._checkResponse)
  }
}