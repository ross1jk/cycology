$(document).ready(() => {
    // Getting references to our form and input
    const searchForm = $("form#signup");
    const start_locationInput = $("input#inputStart");
    const end_locationInput = $("input#inputEnd");
  
    // When the signup button is clicked, we validate the email and password are not blank
    searchForm.on("submit", () => {

      const userRoute = {
        start_location: start_locationInput.val().trim(),
        end_location: end_locationInput.val().trim(),
      };
  
      if (
        !userRoute.start_location ||
        !userRoute.end_location 
      ) {
        return false;
      }
    });
  });