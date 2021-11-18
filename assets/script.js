//Display Current Date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Save to Local Storage and make data persistent
//1. when save button is clicked (or hit enter), then information is saved to local storage
//Does that mean data will remain on page if page is refreshed?

//Does textarea have to by dynamically created or can it just be <textarea> in the HTML page?
var content = {};
//content is whatever is being added to the daily planner
var loadContent = function () {
    content = JSON.parse(localStorage.getItem("content"));
};

var saveContent = function () {
    localStorage.setItem("content", JSON.stringify(content));
};

//Colour coded to indicate whether in past, present or future
//Get the current time
var currentTime = moment().hours();
console.log(currentTime)

//Apply new class depending on current time
function setColor() {
    $('textarea').each(function () {
        var hour = $(this).attr('id')
        if (currentTime > hour) {
            $(this).addClass('past');
        }
        if (currentTime == hour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        if (currentTime < hour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

setColor()