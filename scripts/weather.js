// Getting the Latitude & Longitude from local storage
let getLat = localStorage.getItem("weatherLat");
let getLon = localStorage.getItem("weatherLong");

//Function to call the Weather API & append the temperature to the Results Page
function displayWeather(latitude, longtitude) {
  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longtitude + "&exclude=current,minutely,hourly,alerts&units=imperial&appid=5c129ef837e1ef5705b4d65b13979ba1"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var temp = response.daily;
    //document.getElementById("#WeatherDisplay").append(temp);
    $("#WeatherDisplay").append(temp);
  }

  )
};

window.onload = displayWeather(getLat, getLon);