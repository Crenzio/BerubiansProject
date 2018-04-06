$(document).ready(function () {

    //  define SWITCHBOARD
    function switchboard() {

        //  SWITCHBOARD creates a complex banner image by targeting the BANNER, PING, and EXTRA divs (by ID)
        //  SWITCHBOARD then assigns these divs CSS classes which define background properties 
        //      BANNER appears below PING and PING appears below EXTRA 
        //      All 3 divs are 150px x 100% (MIN-WIDTH: 380px), so the images will overlap correctly, and appear to be 1 single image
        //      PING resets the function ON.CLICK (hence the name PING) 

        //  generate a number between 0 and 9 each time SWITCHBOARD is called
        let switchboard = Math.floor(Math.random() * 10);
        console.log(switchboard);

        //  prevent overlap by removing existing CSS
        $("#banner").removeClass();
        $("#ping").removeClass();
        $("#extra").removeClass();

        //  swithboard = 0 | musicals/dances
        if (switchboard == 0) {
            $("#banner").addClass("bannerMusic");
            $("#ping").addClass("pingMusic");
            $("#ping").addClass("extraMusic");
        }

    }

    // call the function when the page launches
    switchboard();

});