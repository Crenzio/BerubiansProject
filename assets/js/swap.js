$(document).ready(function () {

    // define Switchbaord function
    function switchboard() {

        // function generates a number between 0 and 9 each time it is called
        let switchboard = Math.floor(Math.random() * 10);
        console.log(switchboard);

        // remove classes before selecting
        // this will prevent any accidental overlap
        $("#banner").removeClass();
        $("#ping").removeClass();
        $("#extra").removeClass();

        // musical (Dark Side of the Moon) images at 0
        if (switchboard == 0) {
            // target the Banner div by ID (Banner holds the tile background image)
            $("#banner").addClass("banner");
            // target the Ping div by ID (Ping holds the foreground image, and also doubles as a clickable to re-select the images)
            $("#ping").addClass("ping");
            // do NOT target the Extra div by ID (no Extra art for this one)
        }

    }

    // call the function when the page launches
    switchboard();

});