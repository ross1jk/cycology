$(function(){

/*ids needed for getting local storage:
searchBtn
inputStart
inputEnd
weather
*/

$("#searchBtn").click(function() {
   let start =  $("#inputStart").val().trim();
   let end = $("#inputEnd").val().trim();
 //  let weather= $("#weather").val().trim()
   localStorage.setItem("start", start); 
   localStorage.setItem("end", end); 
//    localStorage.setItem("weater", weather)
  });

//geocode to get longitutde and latitude 
//function findCoordinates(){
let getstart =  localStorage.getItem("start");
let getend =  localStorage.getItem("end")
let startCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getstart + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
let endCord = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + getend + ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"

 $.ajax({
   url: startCord, 
   method: "GET"
 }).then(function(response){
    //lon goes before lat for mapbox 
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

//mapbox api instructions 
//function currentRoute(){
let startCordLS = localStorage.getItem("startCord"); 
let endCordLS = localStorage.getItem("endCord"); 
console.log(startCordLS + " " + endCordLS);
routeURL = "https://api.mapbox.com/directions/v5/mapbox/cycling/" + startCordLS + ";" + endCordLS + "?steps=true&access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
$.ajax({
  url: routeURL, 
  method: "GET"
}).then(function(response){
 var steps = response.routes[0].legs[0].steps
 var tripInstructions = []; 
 tripInstructions.push(steps); 
 var loopInstructions = tripInstructions[0]; 
 let pos = 0; 
 console.log(loopInstructions); 
 for (var i = 0; i < loopInstructions.length; i++){
  let number = i + 1; 
  let routeInstructions = "<ul>" + number + ": " + loopInstructions[pos].maneuver.instruction + "</ul>"
  pos++; 
  $("#routeInstructions").append(routeInstructions);
 }
}); 

//creating the map 

let mapurl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(" + localStorage.getItem("startCord") + "),pin-s-b+000(" + localStorage.getItem("endCord") + ")/auto/500x300?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A"
console.log(mapurl); 
let displaymap = "<img src='" + mapurl+"' alt='routeInstructions'>"
$("#map").append(displaymap); 

//end of start function 
}); 

