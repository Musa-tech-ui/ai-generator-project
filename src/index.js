function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Enchanting smile , anyone would be under your spell",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);