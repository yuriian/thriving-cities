function setListeners() {
  var menu = document.querySelector('#navBar');
  var arrowDownBtn = document.querySelector('#arrowDownBtn');
  var logoImg = document.querySelector('#logoImg');

  menu.addEventListener('click', handleMenuClick);
  arrowDownBtn.addEventListener('click', handleDownBtnClick);

  function handleMenuClick(event) {
    if (event.target.tagName === 'A') {
      var activeClass = 'nav__link--active';
      document.querySelector('.' + activeClass).classList.remove(activeClass);
      event.target.classList.add('nav__link--active');
    }
  }

  function handleDownBtnClick(event) {
    var activeClass = 'nav__link--active';
    document.querySelector('.' + activeClass).classList.remove(activeClass);
    document.querySelector('#menuEvents').classList.add('nav__link--active');
  }

  window.onscroll = function (event) {
    if (window.scrollY > 100) {
      menu.classList.add('nav--fixed');
      logoImg.classList.add('logo__img--small');
    } else {
      menu.classList.remove('nav--fixed');
      logoImg.classList.remove('logo__img--small');
    }
  }
}



setListeners();

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