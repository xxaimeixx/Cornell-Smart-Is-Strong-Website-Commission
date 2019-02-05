$(document).ready(function(){

// toggles the mobile navigation
  $(".mobilenav-button").click(function (){

  // Adds animation toggle to menu on click
    if($(this).hasClass("open")){
      $(this).addClass("closed");
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
      $(this).removeClass("closed");
    }

    // Shows/hides mobile nav menu
    if($(".mobilenav").hasClass("mobilenav100")){
      $(".mobilenavdisplay").addClass("hidden");
      $(".mobilenav").removeClass("mobilenav100");
    } else {
      $(".mobilenavdisplay").removeClass("hidden");
      $(".mobilenav").addClass("mobilenav100");
    }
  });

// toggles dropdown content on click
  $("#what-we-do").click(function(){
    if($("#what-we-do-content").hasClass("hidden")){
      // console.log("test");
      // $("#what-we-do-content").addClass("block");
      $("#what-we-do-content").removeClass("hidden");
    } else {
      // console.log("test2");
      $("#what-we-do-content").addClass("hidden");
    }
  });

  $("#join-us").click(function(){
    if($("#join-us-content").hasClass("hidden")){
      // console.log("test");
      // $("#what-we-do-content").addClass("block");
      $("#join-us-content").removeClass("hidden");
    } else {
      // console.log("test2");
      $("#join-us-content").addClass("hidden");
    }
  });
  $("#what-we-do").click(function(){
    // Adds animation to dropdown carat on click
      if($(".grthan-what").hasClass("reg")){
        $(".grthan-what").addClass("spin");
        $(".grthan-what").removeClass("reg");
      } else {
        $(".grthan-what").addClass("reg");
        $(".grthan-what").removeClass("spin");
      }
  })

    $("#join-us").click(function(){
      if($(".grthan-join").hasClass("reg")){
        $(".grthan-join").addClass("spin");
        $(".grthan-join").removeClass("reg");
      } else {
        $(".grthan-join").addClass("reg");
        $(".grthan-join").removeClass("spin");
      }
  })
});
