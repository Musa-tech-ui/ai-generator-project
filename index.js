function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let commandInput = document.querySelector("#user-command");
  let apiKey = "9740eaf6c27b799fafb4c0tfffa37e8o";
  let context =
    "You are a fantasy Poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. please follow the user command. Do not include a title to the poem.";
  let prompt = `User command: Generate a fantasy poem about ${commandInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a fantasy poem about ${commandInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);