$(document).ready(function(){
    $(".hover-effect").hover(handleHoverIn,handleHoverOut);
    $(".what-we-do").click(handleClick);
    $("form").keypress(keypressHandler);
    $("form").submit(submitHandler);
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
};
function handleClick(evnt){
    $(this).children("img").toggle();
    $(this).children("div.more-details").toggle()
  
};
function keypressHandler(evt){
    if(evt.which === 13){
        $(this).submit();
    }
}
function submitHandler(evt){
    evt.preventDefault();
    var name = $("input[type=text]").val(),
        email= $("input[type=email]").val();
    alert(`${name}, we have received your message. Thank you for reaching out to us`);
}; 