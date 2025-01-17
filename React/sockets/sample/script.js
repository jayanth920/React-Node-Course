document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector("#myBtn");
    let numberOfClicks = 500; // Change this to the desired number of clicks
  
    function clickButton() {
      if (numberOfClicks > 0) {
        btn?.click(); // Simulate a click on the button
        numberOfClicks--;
        setTimeout(clickButton, 0); // Click again after 1 second
      }
    }
  
    // Call the clickButton function when the page is loaded
    clickButton();
    
    // Add an event listener to the button
    btn.addEventListener('click', function() {
      console.log("Button clicked!");
    });
  });
  