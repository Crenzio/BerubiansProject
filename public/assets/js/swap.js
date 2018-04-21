$(document).ready(function () {

    //  define SWITCHBOARD
    function switchboard() {

        //  SWITCHBOARD creates a complex banner image by targeting the BANNER, PING, and EXTRA divs (by ID)
        //  SWITCHBOARD then assigns these divs CSS classes which define background properties 
        //      BANNER appears below PING and PING appears below EXTRA (EXTRA > PING > BANNER) 
        //      All 3 divs are 150px x 100% (MIN-WIDTH: 380px), so the images will overlap correctly, and appear to be 1 single image
        //      PING resets the function ON.CLICK (hence the name PING) 

        //  generate a number between 0 and 9 each time SWITCHBOARD is called
        let switchboard = Math.floor(Math.random() * 7);
        console.log(switchboard);

        //  prevent overlap by removing existing CSS
        $("#banner").removeClass();
        $("#ping").removeClass();
        $("#extra").removeClass();

        //  swithboard = 0 | musicals/dances
        if (switchboard == 0) {
            $("#banner").addClass("bannerMusic");
            $("#ping").addClass("pingMusic");
            $("#extra").addClass("extraMusic");
        }
        //  swithboard = 1 | drama
        if (switchboard == 1) {
            $("#banner").addClass("bannerDrama");
            $("#ping").addClass("pingDrama");
            $("#extra").addClass("extraDrama");
        }
        //  swithboard = 2 | comedy
        if (switchboard == 2) {
            $("#banner").addClass("bannerComedy");
            $("#ping").addClass("pingComedy");
            $("#extra").addClass("extraComedy");
        }
        //  swithboard = 3 | horror
        if (switchboard == 3) {
            $("#banner").addClass("bannerHorror");
            $("#ping").addClass("pingHorror");
            $("#extra").addClass("extraHorror");
        }
        //  swithboard = 4 | action
        if (switchboard == 4) {
            $("#banner").addClass("bannerAction");
            $("#ping").addClass("pingAction");
            $("#extra").addClass("extraAction");
        }
        //  swithboard = 5 | scifi
        if (switchboard == 5) {
            $("#banner").addClass("bannerScifi");
            $("#ping").addClass("pingScifi");
            $("#extra").addClass("extraScifi");
        }
        //  swithboard = 6 | fantasy
        if (switchboard == 6) {
            $("#banner").addClass("bannerFantasy");
            $("#ping").addClass("pingFantasy");
            $("#extra").addClass("extraFantasy");
        }
    }

    // call the function when the page launches
    switchboard();

    $("#ping").click(function () {
        switchboard();
    });

});