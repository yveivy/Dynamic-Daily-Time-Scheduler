$(document).ready(function() {
  const currentTimeElement = $('#current-time');

  setInterval(() => {
    const now = dayjs();
    const nowFormatted = now.format('h:mm:ss A');
    currentTimeElement.text(nowFormatted);
    updateBlockColors(now);
    // highlightCurrentScheduleTime(now);
  }, 1000);

  function updateBlockColors(now) {
    $('.row time-block').each(function(){
    const start = dayjs($(this).data('start'), 'h:mm:ss A');
    const end = dayjs($(this).data('end'), 'h:mm:ss A');

    if (now.isAfter(end)) {
      $(this).removeClass('present future').addClass('past');
    } else if (now.isBetween(start, end, null, '[]')) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  };


  function highlightCurrentScheduleTime(now) {
    $('.schedule-time').each(function(){
      const start = dayjs($(this).data('start'), 'h:mm:ss A');
      const end = dayjs($(this).data('end'), 'h:mm:ss A');
  
      if (now.isBetween(start, end)) {
        $(this).addClass('current');
      } else {
        $(this).removeClass('current');
      }
    });
  }

});

const saveBtns = $('savBtn');
saveBtns.on('click', function(){
  const hourId = $(this).closest('.time-block').attr('id');
  const description = $(this).siblings('.description').val();
  localStorage.setItem(hourId, description);
});






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
