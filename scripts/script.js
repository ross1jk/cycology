$(function(){

/*ids needed for getting local storage:
searchBtn
inputStart
inputEnd
weather
*/

// $("#searchBtn").click(function() {
//    let start= $("#inputStart").val().trim();
//    let end= $("#inputEnd").val().trim();
//    let weather= $("#weather").val().trim()
//    localStorage.setItem("start", start); 
//    localStorage.setItem("end", end); 
//    localStorage.setItem("weater", weather)
//  });

//geocode to get longitutde and latitude 
//function findCoordinates(){
let getstart = "Gardenia Ave, Royal Oak MI" //localStorage.getItem("start");
let getend =  "Main St., Royal Oak MI" //localStorage.getItem("end")
let startCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getstart + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
let endCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getend + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"

 $.ajax({
   url: startCord, 
   method: "GET"
 }).then(function(response){
    //I believe this is the right order for lat and lon? 
   let startlon = response.features[0].geometry.coordinates[0];
   let startlat = response.features[0].geometry.coordinates[1]; 
   console.log("Start" + startlon + "," + startlat);
   localStorage.setItem("startCord", startlon + "," + startlat); 
 });

$.ajax({
  url: endCord, 
  method: "GET"
}).then(function(response){
  let endlon = response.features[0].geometry.coordinates[0];
  let endlat = response.features[0].geometry.coordinates[1];
  console.log("end: " + endlon + " , " + endlat); 
  localStorage.setItem("endCord", endlon + "," + endlat); 
});

//mapbox api
//function currentRoute(){
let startCordLS = localStorage.getItem("startCord"); 
let endCordLS = localStorage.getItem("endCord"); 
console.log(startCordLS + " " + endCordLS);
routeURL = "https://api.mapbox.com/directions/v5/mapbox/cycling/" + startCordLS + ";" + endCordLS + "?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
$.ajax({
  url: routeURL, 
  method: "GET"
}).then(function(response){
//displaycode here
console.log(response); 
}); 

//}
//end of start function 
}); 