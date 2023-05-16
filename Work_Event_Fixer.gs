function ColorEvents() {

  var today = new Date();
  var nextfortnight = new Date();
  nextfortnight.setDate(nextfortnight.getDate() + 14);
  Logger.log(today + " " + nextfortnight);

  var calendars = CalendarApp.getAllOwnedCalendars();
  Logger.log("found number of calendars: " + calendars.length);

  for (var i=0; i<calendars.length; i++) {
    var calendar = calendars[i];
    var events = calendar.getEvents(today, nextfortnight);
    for (var j=0; j<events.length; j++) {
      var e = events[j];
      var title = e.getTitle();
      if (title == "Work") {
        e.setColor(CalendarApp.EventColor.PALE_BLUE);
        e.setLocation(""); // add address here
      }
    }
  }
}