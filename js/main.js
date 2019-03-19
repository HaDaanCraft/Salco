$(document).ready(() => {

  // Navigation bar

  $('#header').load('/salco/files/header.html');
  $('#nav').load('/salco/files/nav.html');
  $('#navResponsive').load('/salco/files/navresponsive.html')

  // LoggedIn Checking

  var loggedCookie = Cookies.get('loggedInUserType');
  if (loggedCookie == null && $(location).attr('pathname') == '/salco/games/blokken.html') {
    var pin = prompt("WIP: Pin?");
    if (pin == "8973") {
      Cookies.set('loggedInUserType', '1', {
        expires: 1
      });
    } else {
      alert("Wrong Code!");
      $(location).attr("href", "/salco/games.html");
    }
  }

  var loggedUserCookie = Cookies.get('user');
  if (loggedUserCookie == null && $(location).attr('pathname') != '/salco/login.php') {
    localStorage.link = $(location).attr('pathname');
    $(location).attr('href', 'login.php');
  } else if (loggedUserCookie != null && $(location).attr('pathname') == '/salco/login.php') {
    $(location).attr('href', localStorage.link);
  }

  setTimeout(function () {


    // Animations

    $("h1").addClass("animated fadeIn");

    // Smooth Scrolling

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    // Responsive Nav
    $(".open").click(function () {
      $(this).css("display", "none");
      $(".navResponsive").css("width", "100%");
    });

    $(".close").click(function () {
      $(".navResponsive").css("width", "0");
      $(".open").css("display", "block");
    });

    // Sticky nav bar

    var num = 2; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
        $('.nav').addClass('sticky');
        $('.storys').addClass('storyss');
        $('.games').addClass('gamess');
        $('.profile').addClass('profiless');
        $('.headerWrapper h1').addClass('heads');
        $('.headerWrapper h1').css({
          'margin-top': '100px'
        });
      } else {
        $('.nav').removeClass('sticky');
        $('.storys').removeClass('storyss');
        $('.games').removeClass('gamess');
        $('.profile').removeClass('profiless');
        $('.headerWrapper h1').removeClass('heads');
        $('.headerWrapper h1').css({
          'margin-top': ''
        });
      }
    });

    // End File

  }, 1000);


});