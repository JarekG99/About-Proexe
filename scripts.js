// scripts.js

$(function() {
    $("#datepicker").datepicker({
        minDate: new Date(),

        onSelect: function() {
            dateObject= $(this).datepicker('getDate', 'minDate');
        },

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

let email = $("#email").val();

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};


function printValues() {
  let values = JSON.stringify(($(":input").serializeArray()).push(dateObject));
  console.log(values);
};

$(":button").click( printValues );
