import { Api } from "./components/Api";
import { Rhyme } from "./components/Rhyme";
import "./index.css";

function getLastWord(str) {
  return str.split(' ').pop();
}

const rhymesSection = document.querySelector(".rhymes");
const soundalikeSection = document.querySelector(".rhymes-alt");

const api = new Api({url: "https://api.datamuse.com/words"});

const bodyInput = document.querySelector(".form-input-body");
bodyInput.value = "";

bodyInput.addEventListener("input", (evt) => {
    evt.preventDefault();
    const input = getLastWord(bodyInput.value);
    api.getRhyme(input)
      .then(words => {
        rhymesSection.innerHTML = "";
        words.forEach(word => {
        const rhyme = new Rhyme({
          word: word.word,
          templateSelector: "#rhyme",
          sectionSelector: ".rhymes"
        });
        rhyme.addRhyme(rhyme.generateRhyme());
      })});
    api.getSoundAlike(input)
      .then(words => {
        soundalikeSection.innerHTML = "";
        words.forEach(word => {
          const rhyme = new Rhyme({
            word: word.word,
            templateSelector: "#rhyme",
            sectionSelector: ".rhymes-alt"
          });
          rhyme.addRhyme(rhyme.generateRhyme());
        })
      });
    
  })