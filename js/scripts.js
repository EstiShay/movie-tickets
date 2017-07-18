//business logic


//UI logic
$(document).ready(function() {
  $("#get-movie-prices").submit(function(event) {

    var showInput = $("#movie-titles").val();
    var timeInput = $("#showtimes").val();
    var ageInput = $("input:radio[name=age-group]:checked").val();

    $("ul").append("<li>" + showInput + "</li>");
    $("ul").append("<li>" + timeInput + "</li>");
    $("ul").append("<li>" + ageInput + "</li>");
    $(".prices").show();

    event.preventDefault();
  });
});
