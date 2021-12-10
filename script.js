//   API KEY: 00fa94081906ea02a56463e3f68c7b6f
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00fa94081906ea02a56463e3f68c7b6f`)
  .then(response => response.json())
  .then(function(data){
      const searchBtn = document.querySelector('search-button')
      var city = document.querySelector('user-input').value
      searchBtn.addEventListener('click', function(){
          
      })
console.log(data);
  });
