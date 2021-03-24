$(function(){
  //date
  var currentDate = moment().format('l'); 
  
  //Function to call the Weather API & append the temperature to the Results Page
  
    // Getting the Latitude & Longitude from local storage
    let latitude = localStorage.getItem("weatherLat");
    let longtitude = localStorage.getItem("weatherLon");
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longtitude + "&units=imperial&appid=101220419d85ffb610459f1145df78ff"
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
   //current
   let currentWeather = "https://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png";
   $("#currentDate").text(currentDate)
   $("#icon").attr('src', currentWeather); 
   $("#temperature").text(response.current.temp + " Fahrenheit"); 
   //day 1 
   $("#day1").text(moment(currentDate).add('1', 'day').format('l')); 
   $("#icon1").attr("src", "https://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png");
   $("#temp1").text(response.daily[0].temp.day + " Fahrenheit");
   //day 2
   $("#day2").text(moment(currentDate).add('2', 'day').format('l')); 
   $("#icon2").attr("src", "https://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
   $("#temp2").text(response.daily[1].temp.day + " Fahrenheit");
   //day 3
   $("#day3").text(moment(currentDate).add('3', 'day').format('l')); 
   $("#icon3").attr("src", "https://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");
   $("#temp3").text(response.daily[2].temp.day + " Fahrenheit");
   //day4
   $("#day4").text(moment(currentDate).add('4', 'day').format('l')); 
   $("#icon4").attr("src", "https://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png"); 
   $("#temp4").text(response.daily[3].temp.day + " Fahrenheit");
  
  });
  
   
  //   window.onload = displayWeather();
  });