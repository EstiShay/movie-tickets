//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 15;
}

Ticket.prototype.movieRequest = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}

Ticket.prototype.calcPrice = function() {
  if (this.movie === "casablanca") {
    this.price = this.price - 12;
  } else if (this.age === "adult" && this.time > 4) {
    this.price = this.price;
  } else if (this.age === "child" && this.time > 4) {
    this.price = this.price - 7;
  } else if (this.age === "senior" && this.time > 4) {
    this.price = this.price - 7;
  } else if (this.age === "adult" && this.time <= 4) {
    this.price = this.price - 7;
  } else if (this.age === "child" && this.time <= 4) {
    this.price = this.price - 10;
  } else if (this.age === "senior" && this.time <= 4) {
    this.price = this.price - 10;
  }
}

//UI logic
$(document).ready(function() {
  $("#get-movie-prices").submit(function(event) {
    var showInput = $("#movie-titles").val();
    var timeInput = parseInt($("#showtimes").val());
    var ageInput = $("input:radio[name=ageGroup]:checked").val();

    var newTicket = new Ticket(showInput, timeInput, ageInput);

    newTicket.calcPrice();

    $(".show-price").text("$" + newTicket.price);
    $(".prices").show();

    event.preventDefault();
  });
});
