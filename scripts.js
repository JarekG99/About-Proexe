// scripts.js

$(function() {
    $("#datepicker").datepicker({
        minDate: new Date(),
        nextText: "&gt",
        prevText: "&lt"
    });


var cityHotels = { "Warsaw": ["Europejski", "Bristol", "Hilton"], "Paris": ["Ritz", "President", "Eiffel"], "Bergen": ["Scandic", "Mariott"] };

var $city = $('#city'),
    $hotel = $('#hotel');

$.each(cityHotels, function(city) {
    $city.append($("<option></option>").text(city));
})
$city.on('change', function() {
    var city = $('#city').val();
    var hotels = cityHotels[city];
    $hotel.empty();
    $.each(hotels, function(i, hotel) {
        $hotel.append($("<option></option>").text(hotel));
    })
}).trigger('change');

});
