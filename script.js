const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const button = document.getElementById("button");
const apiUrl = "https://api.adviceslip.com/advice";

button.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      let obtainedResponse = response.slip;
      console.log(obtainedResponse);
      adviceId.innerHTML = obtainedResponse.id;
      adviceText.innerHTML = obtainedResponse.advice;
    })
    .catch((error) => console.log(error));
});
