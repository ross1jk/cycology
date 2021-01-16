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





//end of start function 
}); 