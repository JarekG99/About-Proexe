// scripts.js

$().ready(function() {
var $notes = $("#notes");
$(".note").each(function(ind, note) {
var $note = $(note);
var text = $note.text();
$note.text("(" + (ind + 1) + ")");
$notes.append($("<li></li>").text(text));
});
})

var blockedDays = [12, 15, 20, 26, 27];

$(function() {
    $("#datepicker").datepicker({
        minDate: new Date(),

        onSelect: function() {
            dateObject= $(this).datepicker('getDate', 'minDate');
            date = dateObject.getFullYear() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getDate()
            let day = dateObject.getDate();
        },

        beforeShowDay: function (date) {
          if (blockedDays.find(function (day) {
            return day == date.getDate()
          }))
           {
            return [false, "blocked ui-state-disabled"];
            }
            return [true];
        },
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



  function validateEmail(email) {
    var email = $("#email").val();
     var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
     if ($.trim(email).length == 0) {
           alert('Please enter valid email address');
      } else

    if (filter.test(email)) {
      return true;
    }
    else {
        return alert("Please check the e-mail");
    }
  }
$().ready(function() {
 $('#email').blur(function() {

   validateEmail()
})
})


function printValues() {
  let values = {date};
  $(":input").each(function() {
    values[$(this).attr("name")] = $(this).val();
  });
  console.log(values);
  console.log(JSON.stringify(values));
};

$(document).on("click", "#button", function() {
    printValues();
});
