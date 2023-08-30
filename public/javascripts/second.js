$('.row-clickable').on('click', function() {
    window.location = $(this).data("href");
});
var subTotal = 0;
var timeTotal = 0;
$(".dropdown-item").on('click', function () {
    var x = $(this).find('.duration').text();
    var y = $(this).find('.price').text();
    $(this).closest('.row').find('.select-values').text(x + " and $" + y);
    .card-title
    var yy = parseInt(y);
    var xx = parseInt(x);
    // subTotal = yy;
    var newValue;
    if (subTotal == 0){
        subTotal = yy;
        newValue = yy;
    } else {
        subTotal = subTotal + yy;
        newValue = subTotal;
    }
    $('#subtotal').text(" Subtotal of $" + newValue + "   ");
    var yy = parseInt(y);
    // subTotal = yy;
    var newTime;
    if (timeTotal == 0){
        timeTotal = xx;
        newTime = xx;
    } else {
        timeTotal = timeTotal + xx;
        newTime = timeTotal;
    }

    var hrs = Math.floor(newTime / 60);
    // Getting the minutes.
    var min = newTime % 60;

    $('#appt-dur').text("  " + hrs + " hrs & " + min + " mins  -  ");
    var closeCheckbox = $(this).closest('.row').find('input[type=checkbox]');
    if (closeCheckbox.prop('checked') == false) {
    closeCheckbox.prop('checked', true);
    } else {
        closeCheckbox.prop('checked', false);
    }
    $('#bookingForm').append("<div class='form-group col-sm-8 flex-column d-flex'>" +
    "<label class='form-label' for='exampleFormControlInput1'>Service</label>" +
    "<input class='form-control form-control-lg' id='address' type='text' name='address' placeholder='xxxxx' onblur='validate(5)'/>" +
    "</div>")
});

$(".row input:checkbox").on('change', function() {
    var ischecked= $(this).is(':checked');
    if(!ischecked){
        $(this).closest('.row').find('.select-values').text("");
    }
}); 

$(window).on('load', function(event) {
    var someTabTriggerEl = $('#massageSer-tab')
    var tab = new bootstrap.Tab(someTabTriggerEl)
    
    tab.show()
});