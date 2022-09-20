import { Api } from "./components/Api";
import { Rhyme } from "./components/Rhyme";
import "./index.css";

function getLastWord(str) {
  return str.split(' ').pop();
}

const api = new Api({url: "https://api.datamuse.com/words"});

const themeInput = document.querySelector(".form-input-title");
const bodyInput = document.querySelector(".form-input-body");
bodyInput.value = "";

const spaceKeyCode = 32;
const enterKeyCode = 13;

function processApi({data, sectionSelector}) {
  const section = document.querySelector(sectionSelector);
  section.innerHTML = "";
  data.forEach(word => {
    const rhyme = new Rhyme({
      word: word.word,
      templateSelector: "#rhyme",
      sectionSelector: sectionSelector
    });
    rhyme.addRhyme(rhyme.generateRhyme());
  })
}

bodyInput.addEventListener("keydown", (evt) => {
    if (evt.keyCode === spaceKeyCode || evt.keyCode === enterKeyCode) {
      const input = getLastWord(bodyInput.value);
      const theme = themeInput.value;
      api.getRhyme(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-def"
          });
        });
      api.getSoundAlike(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-sound"
          });
        });
      api.getRelatedNouns(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-rel-noun"
          });
        });
        api.getRelatedAdjectives(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-rel-adj"
          });
        });
        api.getSynonyms(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-syn"
          });
        });
      api.getAntonyms(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-ant"
          });
        });
      api.getRelatedWords(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-rel"
          });
        });
      api.getFrequentFollowers(input, theme)
        .then(words => {
          processApi({
            data: words,
            sectionSelector: ".rhymes-follow"
          });
        });
      }
  });

  const buttons = Array.from(document.querySelectorAll(".eye"));
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const rhymes = button.closest(".rhymes-wrapper");
      rhymes.classList.add("rhymes-hidden");
    });
  });

  const maxRange = document.querySelector(".form-input-max");
  const maxRangeLabel = document.querySelector(".form-label-max");
  maxRangeLabel.textContent = `${maxRange.value}`;

  maxRange.oninput = function() {
    maxRangeLabel.textContent = `${maxRange.value}`;
    api.setMax(maxRange.value);
  }

  const engineRadios = document.querySelectorAll('[name="engine"]');
  engineRadios.forEach(radio => {
    radio.onclick = function () {
      api.changeEngine(this.value);
    };
  });