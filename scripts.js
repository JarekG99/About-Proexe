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


$(function() {
    $("#datepicker").datepicker({
        minDate: new Date(),
        
        onSelect: function() {
            dateObject= $(this).datepicker('getDate', 'minDate');
            date = dateObject.getFullYear() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getDate()
            let day = dateObject.getDate();
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

var blockedDays = [12, 15, 20, 26, 27];

// $().ready(function() {
//   $.each(blockedDays, function() {
//     $day = $().datepicker('getDate');
//     console.log($day)
//       if($(this) === $day) {
//         $day.addClass("blocked ui-state-disabled")
//     };
//   });
// })

  let email = $("#email").val();

  function validateEmail(email) {
    // var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let filter = /[^@]+@[^@]+/
    if (filter.test(email)) {
      return true;
    }
    else {
        return alert("Pls enter the valid e-mail");
    }
  }

  $('#email').blur(function() {
       if ($.trim(email).length == 0) {
           alert('Please enter valid email address');
           e.preventDefault();
       }
       if (validateEmail(email)) {
           alert('Email is valid');
           e.preventDefault();
       }
   });



function printValues() {
  let values = {date};
  $(":input").each(function() {
    values[$(this).attr("name")] = $(this).val();
  });
  console.log(values);
  console.log(JSON.stringify(values));
};
$("#email").on()
$(document).on("click", "#button", function() {
    validateEmail();
    printValues();
});
