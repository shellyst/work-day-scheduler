//Display Current Date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//Save to Local Storage and make data persistent
//1. when save button is clicked (or hit enter), then information is saved to local storage
//Does that mean data will remain on page if page is refreshed?

//Does textarea have to by dynamically created or can it just be <textarea> in the HTML page?

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var btnId = $(this).attr("id");
  var task = $(this).siblings("textarea").val();
  localStorage.setItem(btnId, task);
  getTask();
});

function getTask() {
  for (var i = 9; i < 18; i++) {
    var getTask = localStorage.getItem(i);
    $("#" + i).text(getTask);
  }
}

getTask();

//Colour coded to indicate whether in past, present or future
//Get the current time
var currentTime = moment().hours();
console.log(currentTime);

//Apply new class depending on current time
function setColor() {
  $("textarea").each(function () {
    var hour = $(this).attr("id");
    if (currentTime > hour) {
      $(this).addClass("past");
    }
    if (currentTime == hour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    if (currentTime < hour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

setColor();
