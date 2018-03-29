$(document).ready(
    function(){
        $( "#draggable" ).draggable();
    
        $( "#bye" ).click(function(){
            document.getElementById("bye").contentEditable=true;
        });

    });


function myFunc() {
    document.getElementById("bye").contentEditable=true;
}
