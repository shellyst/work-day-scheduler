//Display Current Date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//Save to Local Storage and make data persistent
//Create an "on click" event listener, which listens for the button to be pressed. On button click, the value of the textarea is put into localStorage using .siblings.
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var btnId = $(this).attr("id");
  var task = $(this).siblings("textarea").val();
  localStorage.setItem(btnId, task);
  getTask();
});

//Retrieve data and make data persistent.
//Create a loop, placing the value of i at 9 and not going beyond 18, since the values of our time, using military time, are 9 through 17. The loop goes through each value, from 9 to 18, and retrieves the content from localStorage to keep data on page after refresh occurs. Since id was set as 9 through 17 for each timeblock, the loop will go through and retrieve all data from 9 through 17.
function getTask() {
  for (var i = 9; i < 18; i++) {
    var getTask = localStorage.getItem(i);
    $("#" + i).text(getTask);
  }
}

getTask();

//Colour coded to indicate whether in past, present or future.
//Get the current time.
var currentTime = moment().hours();
console.log(currentTime);

//Apply new class depending on current time.
//Checks for current time, and sets class accordingly. Previous classes are removed and the correct class is applied in order to change the colour based on the current time, retrived in currentTime.
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
