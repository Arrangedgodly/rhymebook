import { Api } from "./components/Api";
import { Rhyme } from "./components/Rhyme";
import "./index.css";

function getLastWord(str) {
  return str.split(' ').pop();
}

const api = new Api({url: "https://api.datamuse.com/words"});

const bodyInput = document.querySelector(".form-input-body");
bodyInput.value = "";

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

bodyInput.addEventListener("input", (evt) => {
    evt.preventDefault();
    const input = getLastWord(bodyInput.value);
    api.getRhyme(input)
      .then(words => {
        processApi({
          data: words,
          sectionSelector: ".rhymes-def"
        });
      });
    api.getSoundAlike(input)
      .then(words => {
        processApi({
          data: words,
          sectionSelector: ".rhymes-sound"
        });
      });
    api.getRelatedWords(input)
      .then(words => {
        processApi({
          data: words,
          sectionSelector: ".rhymes-rel"
        });
      });
  });

  const buttons = Array.from(document.querySelectorAll(".fa-eye"));
  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.classList.add("fa-eye-slash");
    });
    button.addEventListener("click", () => {
      const rhymes = button.closest(".rhymes");
      rhymes.classList.add("rhymes-hidden");
    });
  })