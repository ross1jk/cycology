$(document).ready(() => {
    $.ajax({
        url: "/api/routes",
        type: "GET",
        dataType: "json",
      }).then(function(response){
          
          for (var i = 0; i < response.length; i++) {
              let card = `
            <div class="callout" id=` + response[i].id +`>
            <p id="start">` + response[i].start_location +` </p>
            <p id="end">` + response[i].end_location +` </p>
            <p id="rating">` + response[i].route_rating +`</p>
            <p id="comments">` + response[i].comments +`</p>
             </div>
            `
            console.log(card)
            $("#push").append(card);
          }
      })
});