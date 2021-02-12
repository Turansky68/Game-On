"use strict";

$(document).ready(function () {
  $('.burger').click(function () {
    $('header').toggleClass('clicked');
  });
  $('nav ul li').click(function () {
    $('nav ul li').removeClass('selected');
    $('nav ul li').addClass('notselected');
    $(this).toggleClass('selected');
    $(this).removeClass('notselected');
  });
});
$(document).ready(function () {
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function () {
    if (isOpen == false) {
      searchBox.addClass('searchbox-open');
      inputBox.focus();
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function () {
    return false;
  });
  searchBox.mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $('.searchbox-icon').css('display', 'block');
      submitIcon.click();
    }
  });
});

(function () {
  "use strict";

  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");

  if (!cookieAlert) {
    return;
  }

  cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)
  // Show the alert if we cant find the "acceptCookies" cookie

  if (!getCookie("acceptCookies")) {
    cookieAlert.classList.add("show");
  } // When clicking on the agree button, create a 1 year
  // cookie to remember user's choice and close the banner


  acceptCookies.addEventListener("click", function () {
    setCookie("acceptCookies", true, 365);
    cookieAlert.classList.remove("show"); // dispatch the accept event

    window.dispatchEvent(new Event("cookieAlertAccept"));
  }); // Cookie functions from w3schools

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }
})();