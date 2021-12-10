//   API KEY: 00fa94081906ea02a56463e3f68c7b6f

//Declared Variables Here
var userInput = document.getElementById("user-city-input");
const searchBtnEl = document.getElementById("search-button-el");
const cityEl = document.getElementById("city-name");

searchBtnEl.addEventListener("click", function () {
  const trimmedUserInputValue = userInput.value.trim(); //Gets the city that the user types in
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedUserInputValue}&appid=00fa94081906ea02a56463e3f68c7b6f`;
  // Fetches the url with the city
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
