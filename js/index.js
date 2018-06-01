setListeners();

function setListeners() {
  var menu = document.querySelector('#navBar');
  var arrowDownBtn = document.querySelector('#arrowDownBtn');
  var header = document.querySelector('#header');

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
    if (window.scrollY > 100 && !menu.classList.contains('nav--fixed')) {
      menu.classList.add('nav--fixed');
    }
    if (window.scrollY <= 100 && menu.classList.contains('nav--fixed')) {
      menu.classList.remove('nav--fixed');
    }
  };


  var sliderImg = document.querySelector('#sliderImg');
  var changeEffectContainer = document.querySelector('#changeEffectDiv');

  var sliderCaption = document.querySelector('#sliderCaption');
  var sliderTitle = document.querySelector('#sliderTitle');
  var sliderSubtitle = document.querySelector('#sliderSubtitle');

  var sliderImgs = [{
      path: 'Beale_St.jpg',
      title: 'Beale St.',
      subTitle: 'Memphis, TN',
    },
    {
      path: 'Belz_Museum.jpg',
      title: 'Belz Museum',
      subTitle: 'Some St., Memphis, TN',
    },
    {
      path: 'Billboard.jpg',
      title: 'Billboard',
      subTitle: '',
    },
    {
      path: 'Butler_Park.jpg',
      title: 'Butler Park',
      subTitle: '',
    },
    {
      path: 'Diorama_of_Lunch_Counter_Sit-Down_Protests_-_National_Civil_Rights_Museum.jpg',
      title: 'Sit-Down Protests',
      subTitle: 'National Civil Rights Museum',
    },
    {
      path: 'Elvis-nixon.jpg',
      title: 'Elvis and Nixon',
      subTitle: 'Where did it happen?',
    },
    {
      path: 'Elvis_Presleys_house.jpg ',
      title: 'The Front Gates at Graceland',
      subTitle: 'Elvis Presley Blvd',
    },
    {
      path: 'Graceland.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Graceland_sign.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Island_Queen_from_Tom_Lee_Park.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'MemphisTrolley.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'MemphisZooentrance.JPG',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Memphis_Brooks_Museum_of_Art.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Memphis_Pyramid.JPG',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'memphis_tennessee_scenery_tom_lee_park-896764.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Mississippi_River_Park_Memphis_TN_003.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'night-bridge_1920.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Rosa_parks_human_rights_museum.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Slave_Haven_-_Underground_Railroad_Museum.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Statues_of_Protesters_with_Signage_-_National_Civil_Rights_Museum.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Sun_Studio,_Memphis.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'The_New_Daisy_Theatre.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'The_Orpheum_Theatre.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Three_Bridges.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Tom_Lee_Park2.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },
    {
      path: 'Visitor_Center_Elvis_Presley_Blvd.jpg',
      title: 'Lorem Ipsum',
      subTitle: 'Sent Dolor, Mempis, TN',
    },

  ];
  var imgIndex = 0;

  function changeSlide(event) {
    changeEffectContainer.classList.add('move-bg-gradient');

    imgIndex++;

    if (imgIndex === sliderImgs.length) {
      imgIndex = 0;
    }
  }

  changeSliderCaption();
  setInterval(changeSlide, 5000);

  header.addEventListener('animationiteration', function (event) {
    if (event.animationName === 'moveBgGradient') {
      sliderImg.style.background = 'url(./img/slides/' + sliderImgs[imgIndex].path + ') center/cover no-repeat';
      sliderImg.classList.remove('move-bg-img');

      sliderCaption.classList.remove('animate-growing');

      sliderTitle.classList.remove('animate-moving-right');
      sliderSubtitle.classList.remove('animate-delayed-moving-right');

      sliderTitle.classList.remove('animate-moving-right');
      sliderSubtitle.classList.remove('animate-delayed-moving-right');

      changeSliderCaption();
    }
  });

  function changeSliderCaption() {
    sliderTitle.textContent = sliderImgs[imgIndex].title;
    sliderSubtitle.textContent = sliderImgs[imgIndex].subTitle;
  }

  header.addEventListener('animationend', function (event) {
    if (event.animationName === 'moveBgGradient') {
      changeEffectContainer.classList.remove('move-bg-gradient');

      sliderCaption.classList.add('animate-growing');
      sliderTitle.classList.add('animate-moving-right');
      sliderSubtitle.classList.add('animate-delayed-moving-right');
    }

  });
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
      this.pathname.replace(/^\//, '') &&
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
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });