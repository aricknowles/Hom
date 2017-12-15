hide = true;
$('body').on("click", function () {
    if (hide) $('.box').removeClass('active');
    hide = true;
});
$('body').on('click', '.box', function () {

    var self = $(this);

    if (self.hasClass('active')) {
        $('.box').removeClass('active');
        return false;
    }

    $('.box').removeClass('active');

    self.toggleClass('active');
    hide = false;
}); 

$('.box').on('mouseenter', function () {
    $(this).addClass('hover');
});
$('.box').on('mouseleave', function () {
    $(this).removeClass('hover');
});
$('.box').on('click', function () {
    $(this).removeClass('hover');
});

$('.box .imgcontainer a').click(function(){
    return false;
});

var figure = $(".videocont").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}