export class Api {
  constructor({ url }) {
    this.url = url;
  }

  getRhyme(word) {
    return fetch(`${this.url}?rel_rhy=${word}`)
      .then(res => res.json())
  }

  getSoundAlike(word) {
    return fetch(`${this.url}?sl=${word}`)
      .then(res => res.json())
  }
}