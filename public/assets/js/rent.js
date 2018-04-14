$(document).ready(function () {

    function next() {

        $("#rent").removeClass();
        $("#rent").addClass("noteNext");
        $("#next").removeClass("rose");
        $("#tres").addClass("rose");
    }

    function tres() {

        $("#rent").removeClass();
        $("#rent").addClass("noteTres");
        $("#tres").removeClass("rose");
        $("#next").addClass("rose");
    }

    $("#next").click(function () {
        next();
    });

    $("#tres").click(function () {
        tres();
    });

});