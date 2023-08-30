
$(document).on('keydown', function(event) {
    $('#thInfo').html('');
    $('.blank4').hide();
});

$('html, body').animate({ scrollTop: 150 }, 1500);

$(window).on('scroll', function(){
    $('.fadein').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},800);
        }
        
    }); 
});

$('.blank4').hide();
$('#reikiBtn').on('click', function(e){
    $('.rowInfo').hide();
    $('#reikiColl').html(''); 
    $.get("/reiki", function(responseHTML, status){
        $('#thInfo').html(responseHTML);
    });
    $('.blank4').show();
    $('.fifth').show();
    $('html, body').animate({
        scrollTop: $("#thInfo").offset().top-100
    }, 800);
});

$('#lomiBtn').on('click', function(e){
    $('.rowInfo').hide();
    $('#lomilomi').html(''); 
    $.get("/lomi", function(responseHTML, status){
        $('#thInfo').html(responseHTML);
    });
    $('.blank4').show();
    $('.fifth').show();
    $('html, body').animate({
        scrollTop: $("#thInfo").offset().top-100
    }, 500);
});

$('#pelvicBtn').on('click', function(e){
    $('.rowInfo').hide();
    $('#pelvic').html(''); 
    $.get("/pelvic", function(responseHTML, status){
        $('#thInfo').html(responseHTML);
    });
    $('.blank4').show();
    $('.fifth').show();   
     $('html, body').animate({
        scrollTop: $("#thInfo").offset().top-100
    }, 100);
});

function getOut(){
    $('#eapps-yelp-reviews-57d90dc3-4205-4628-9493-78672b24c09f > div > a').hide();
    $('#eapps-google-reviews-7c382427-3b8a-4872-be6d-734394653b58 > div > a').hide();
    // $('#eapps-yelp-reviews-57d90dc3-4205-4628-9493-78672b24c09f > div > div > div.WidgetTitle__Container-sc-kd7lmy-0.gGHVJf.es-widget-title-container').hide();
    // $('#eapps-google-reviews-7c382427-3b8a-4872-be6d-734394653b58 > div > div > div.WidgetTitle__Container-sc-kd7lmy-0.gGHVJf.es-widget-title-container').hide();
}

$(window).on('load', function(event) {
    setTimeout(getOut, 1000)
});

