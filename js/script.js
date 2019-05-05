$(document).ready(function(){

    $(".hover-effect").hover(handleHoverIn,handleHoverOut);
});

function handleHoverIn(evnt){
    $(this).children("div.overlay").css({
        "opacity": 0.6,
        "width": "100%"
    });
    
};
function handleHoverOut(evnt){
    $(this).children("div.overlay").css({
        "opacity": 0,
        "width": 0
    });
}