$(function(){

/*ids needed for getting local storage:
searchBtn
inputStart
inputEnd
weather
*/

//$("#searchBtn").click(function() {
   let start= $("#inputStart").val().trim();
   let end= $("#inputEnd").val().trim();
   let weather= $("#weather").val().trim()
   localStorage.setItem("start", start); 
   localStorage.setItem("end", end); 
   localStorage.setItem("weater", weather)
 // });

//geocode to get longitutde and latitude 
//function findCoordinates(){
let getstart = localStorage.getItem("start");
let getend =  localStorage.getItem("end")
let startCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getstart + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
let endCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getend + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"

 $.ajax({
   url: startCord, 
   method: "GET"
 }).then(function(response){
    //I believe this is the right order for lat and lon? 
   let startlat = response.features[0].geometry.coordinates[0];
   let startlon = response.features[0].geometry.coordinates[1]; 
   console.log(start + ": " + startlat + " , " + startlon);
   localStorage.setItem("endCord", startlat + ";" + startlon); 
 });

$.ajax({
  url: endCord, 
  method: "GET"
}).then(function(response){
  let endlat = response.features[0].geometry.coordinates[0];
  let endlon = response.features[0].geometry.coordinates[0];
  console.log(end + ": " + endlat + " , " + endlon); 
  localStorage.setItem("startCord", endlat + ";" + endlon); 
});


//end of start function 
}); 