$(function(){

/*ids needed for getting local storage:
searchBtn
inputStart
inputEnd
weather
*/
var currentsearch = localStorage.getItem("currentsearch");
console.log(currentsearch); 

$("#searchBtn").click(function() {
   let search = [{
       start: $("#inputStart").val().trim(),
       end: $("#inputEnd").val().trim(),
       weather: $("#weather").val().trim()
   }];

   localStorage.setItem("currentsearch", JSON.stringify(search)); 

  });

//geocode to get longitutde and latitude 
//function findCoordinates(){
let start = "Detroit" //localStorage.getItem()
let end = "Flint" //localStorage.getItem()
startCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + start + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
endCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + end + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"

$.ajax({
  url: startCord, 
  method: "GET"
}).then(function(response){
  //I believe this is the right order for lat and lon? 
  let startlat = response.features[0].geometry.coordinates[0];
  let startlon = response.features[0].geometry.coordinates[1]; 
  console.log(start + ": " + startlat + " , " + startlon);
});

$.ajax({
  url: endCord, 
  method: "GET"
}).then(function(response){
  let endlat = response.features[0].geometry.coordinates[0];
  let endlon = response.features[0].geometry.coordinates[0];
  console.log(end + ": " + endlat + " , " + endlon); 
});


//end of start function 
}); 