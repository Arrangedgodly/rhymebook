import { Api } from "./components/Api";
import { Rhyme } from "./components/Rhyme";
import "./index.css";

function getLastWord(str) {
  return str.split(' ').pop();
}

const section = document.querySelector(".rhymes");

const api = new Api({url: "https://api.datamuse.com/words"});

const bodyInput = document.querySelector(".form-input-body");

bodyInput.addEventListener("input", (evt) => {
    evt.preventDefault();
    const input = getLastWord(bodyInput.value);
    api.getRhyme(input)
      .then(words => {
        section.innerHTML = "";
        words.forEach(word => {
        const rhyme = new Rhyme({
          word: word.word,
          templateSelector: "#rhyme",
          sectionSelector: ".rhymes"
        });
        rhyme.addRhyme(rhyme.generateRhyme());
      })});
  })