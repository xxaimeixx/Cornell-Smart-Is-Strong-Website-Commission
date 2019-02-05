$(document).ready(function() {
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth();
  d = n.getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  m = months[m];
  document.getElementById("date").innerHTML = m + " " +  d + ", " + y;
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
