// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.

$(document).ready(function() {
 //
  // TODO: Add code to display the current date in the header of the page.

  var currentTimeElement = $('#current-time');
  displayTime();
  setInterval(displayTime, 1000);
  
  
  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm:ss A');
    currentTimeElement.text(rightNow);
  };

  var currentHour = dayjs().hour();
  console.log(currentHour)

// Hour 9 Block
  var hourBlock9 = dayjs().set('hour', 9);
  // var hourComponent = hourBlock9.hour();
  console.log(currentHour)
  console.log(hourBlock9)
  var timeBlock9 = $(".time-block9");
  
  if (hourBlock9.isAfter(currentHour)) {
    timeBlock9.removeClass('present future').addClass('past');
  } else if (hourBlock9.isBefore(currentHour)) {
    timeBlock9.removeClass('past present').addClass('future')
  } else {
    timeBlock9.removeClass('past future').addClass('present')};
    
  // Hour 10 Block
  var hourBlock10 = dayjs().hour(10);
  var timeBlock10 = $(".time-block10");

    if (hourBlock10.isAfter(currentHour)) {
      timeBlock10.removeClass('present future').addClass('past');
    } else if (hourBlock10.isBefore(currentHour)) {
      timeBlock10.removeClass('past present').addClass('future')
    } else {
      timeBlock10.removeClass('past future').addClass('present')};

      // Hour 11 Block
  var hourBlock11 = dayjs().set('hour',11);
  var timeBlock11 = $(".time-block11");

    if (hourBlock11.isAfter(currentHour)) {
      timeBlock11.removeClass('present future').addClass('past');
    } else if (hourBlock10.isBefore(currentHour)) {
      timeBlock11.removeClass('past present').addClass('future')
    } else {
      timeBlock11.removeClass('past future').addClass('present')};

          // Hour 12 Block
  var hourBlock12 = dayjs().set('hour',12);
  var timeBlock12 = $(".time-block12");

    if (hourBlock12.isAfter(currentHour)) {
      timeBlock12.removeClass('present future').addClass('past');
    } else if (hourBlock12.isBefore(currentHour)) {
      timeBlock12.removeClass('past present').addClass('future')
    } else {
      timeBlock12.removeClass('past future').addClass('present')};
   
      // Hour 1 Block
  var hourBlock13 = dayjs().set('hour',13);
  var timeBlock13 = $(".time-block13");

    if (hourBlock13.isAfter(currentHour)) {
      timeBlock13.removeClass('present future').addClass('past');
    } else if (hourBlock13.isBefore(currentHour)) {
      timeBlock13.removeClass('past present').addClass('future')
    } else {
      timeBlock13.removeClass('past future').addClass('present')};

       // Hour 2 Block
  var hourBlock14 = dayjs().set('hour',14);
  var timeBlock14 = $(".time-block14");

    if (hourBlock14.isAfter(currentHour)) {
      timeBlock14.removeClass('present future').addClass('past');
    } else if (hourBlock14.isBefore(currentHour)) {
      timeBlock14.removeClass('past present').addClass('future')
    } else {
      timeBlock14.removeClass('past future').addClass('present')};

      // Hour 3 Block
  var hourBlock15 = dayjs().set('hour',15);
  var timeBlock15 = $(".time-block15");

    if (hourBlock15.isAfter(currentHour)) {
      timeBlock15.removeClass('present future').addClass('past');
    } else if (hourBlock15.isBefore(currentHour)) {
      timeBlock15.removeClass('past present').addClass('future')
    } else {
      timeBlock15.removeClass('past future').addClass('present')};

      // Hour 4 Block
  var hourBlock16 = dayjs().set('hour',16);
  var timeBlock16 = $(".time-block16");

    if (hourBlock16.isAfter(currentHour)) {
      timeBlock16.removeClass('present future').addClass('past');
    } else if (hourBlock16.isBefore(currentHour)) {
      timeBlock16.removeClass('past present').addClass('future')
    } else {
      timeBlock16.removeClass('past future').addClass('present')};

      // Hour 5 Block
  var hourBlock17 = dayjs().set('hour',16);
  var timeBlock17 = $(".time-block17");

    if (hourBlock17.isAfter(currentHour)) {
      timeBlock17.removeClass('present future').addClass('past');
    } else if (hourBlock17.isBefore(currentHour)) {
      timeBlock17.removeClass('past present').addClass('future')
    } else {
      timeBlock17.removeClass('past future').addClass('present')};

       // Hour 6 Block
  var hourBlock18 = dayjs().set('hour',18);
  var timeBlock18 = $(".time-block18");

    if (hourBlock18.isAfter(currentHour)) {
      timeBlock18.removeClass('present future').addClass('past');
    } else if (hourBlock18.isBefore(currentHour)) {
      timeBlock18.removeClass('past present').addClass('future')
    } else {
      timeBlock18.removeClass('past future').addClass('present')};
});






 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$('.saveBtn').on('click', function () {

var time = $(this).parent().attr("id");
var text = $(this).siblings(".description").val();

localStorage.setItem(time, text);
console.log(text);
console.log(time);

});

// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);

    
//   }
// });







 
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
// });
