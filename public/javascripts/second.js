$('.row-clickable').on('click', function() {
    window.location = $(this).data("href");
});
var subTotal = 0;
var timeTotal = 0;
var itemNum = 0;
$(".dropdown-item").on('click', function () {
    var x = $(this).find('.duration').text();
    var y = $(this).find('.price').text();
    var serviceTitel = $(this).closest('.card-body').find('.card-title').text();
    var yy = parseInt(y);
    var xx = parseInt(x);
    var newValue;
    if (subTotal == 0){
        subTotal = yy;
        newValue = yy;
    } else {
        subTotal = subTotal + yy;
        newValue = subTotal;
    }
    itemNum = itemNum +1;
    $('#subtotal').text(" Subtotal of $" + newValue + "   ");
    var yy = parseInt(y);
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
    $('#table-cart > tbody tr:last').before('<tr>'
        + '<td>' + itemNum + '</td>' 
        + '<td>' + serviceTitel + '</td>' 
        + '<td>' + x + 'mins'
        + '<td> $' + y + '</td>'
    + '</tr>');
    if ($('#table-cart > tbody tr').length >= 2){
        $('#table-cart > tbody tr:last').remove();
    }
    $('#table-cart > tbody:last').append('<tr>'
    + '<td> Appt Duration: <td>' + hrs + ' hrs & ' + min + ' mins </td>'
    + '<td> Subtotal Amount: </td>'
    + '<td> $' + newValue + '</td>'
    + '</tr>');
    $('#table-cart > tbody tr:last :eq(0)').css({"color":"white", "background-color":"black", "textAlign": "right"});
    $('#table-cart > tbody tr:last :eq(1)').css({"color":"white", "background-color":"black"});
    $('#table-cart > tbody tr:last :eq(2)').css({"color":"white", "background-color":"black", "textAlign": "right"});
    $('#table-cart > tbody tr:last :eq(3)').css({"color":"white", "background-color":"black"});
    $('#table-cart').show();
    var closeCheckbox = $(this).closest('.row').find('input[type=checkbox]');
    if (closeCheckbox.prop('checked') == false) {
    closeCheckbox.prop('checked', true);
    } else {
        closeCheckbox.prop('checked', false);
    }
    $('#marker').before("<div class='form-group col-sm-8 add-on-input flex-column d-flex'><p>" + 
    "<label class='form-label' for='exampleFormControlInput1'>Service</label>" +
    "<input class='form-control form-control-lg' id='address' type='text' name='address' onblur='validate(5)' value='" + serviceTitel + "'/></p></div>")
});

$(".dropdown-toggle").on('hidden.bs.dropdown', function () {
    $(this).closest('.card-body').find('.dropdown-toggle').prop("disabled", true);
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

$('.clearFields').on('click', function(){
    $('input[type=checkbox]').each(
        function (index, checkbox) {
            checkbox.checked = false;
    });
    $('#table-cart tbody').find("tr:gt(0)").remove();
    $('#table-cart > tbody tr:last').empty();
    subTotal = 0;
    timeTotal = 0;
    itemNum = 0;
    $('#bookingForm').find('.add-on-input').remove();
    $('#table-cart').hide();
    $('.dropdown-toggle').prop("disabled", false);
});

$('.more-info').on('click', function(){
    var wc = $(this).attr('prop');
    $.get("/services", function(responseHTML, status){
        var eaItem = $(responseHTML).filter(wc)
        $('#ser-details').html(eaItem);
    });
});