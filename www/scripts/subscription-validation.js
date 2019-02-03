// When the document has loaded
$(document).ready(function() {
  $("#sub-form").on("submit", function() {
    // this variable is true when the form is valid
    var formValid = true;

    var nameIsValid = $("#name").prop("validity").valid;

    // if the name is valid
    if(nameIsValid) {
      // hide the error
      $("#name-feedback").addClass("hidden");
    } else {
      // the form is invalid
      formValid = false;
      // show the error
      $("#name-feedback").removeClass("hidden");
    }

    // if the form is valid, we allow the user to submit (return true)
    // if the form is invalid, we prevent submission (return false)
    return formValid;
  });

  $("#sub-form").on("submit", function() {
    // this variable is true when the form is valid
    var formValid = true;

    var emailIsValid = $("#email").prop("validity").valid;

    if(emailIsValid) {
      $("#email-feedback").addClass("hidden");
    } else {
      formValid = false;
      $("#email-feedback").removeClass("hidden");
    }

    // if the form is valid, we allow the user to submit (return true)
    // if the form is invalid, we prevent submission (return false)
    return formValid;
  });
});
