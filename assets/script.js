//Display Current Date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Save to Local Storage and make data persistent
//1. when save button is clicked (or hit enter), then information is saved to local storage
//Does that mean data will remain on page if page is refreshed?

//Does textarea have to by dynamically created or can it just be <textarea> in the HTML page?

//Colour coded to indicate whether in past, present or future
//Get the current time
var currentTime = moment().format("h");

//Apply new class depending on current time
if (moment().isAfter(currentTime)) {
  $(".events").addClass(".future");
} else if (moment() = currentTime) {
    $(".events").addClass(".present");
} else {
    $(".events").addClass(".past");
}
