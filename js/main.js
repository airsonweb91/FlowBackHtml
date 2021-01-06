$(document).ready(function () {

    
    // Home Top Story Slider 
    $('.topStorySlider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                margin: 20,
            }
        }
    });
    
    // Mission Featured Slider 
    $('#missionFeatured').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        dots: false,
        responsiveClass: true,
    });
    
    // Message Popup
    $('#fixMsgIcon').click(function(){
        $('#messageList').toggleClass('active');
        //$('.las.la-sms').toggleClass('la-times');
    });
    
    
});





















