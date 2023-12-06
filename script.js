jQuery(document).ready(function($) {
  AOS.init();
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 2,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth:400,
      modifier: 1,
      initialSlide: 0,
      slideShadows: false
    },   
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth:0,
          modifier: 1,
          initialSlide: 0,
          slideShadows: false
        },
      },     
      512: {
        slidesPerView: 2,
        spaceBetween: 0,
        coverflowEffect: {
          rotate: 0,
          stretch:100,
          depth:250,
          modifier: 1,
          initialSlide: 0,
          slideShadows: false
        },
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 100,
        coverflowEffect: {
          rotate: 0,
          stretch:100,
          depth:250,
          modifier: 1,
          initialSlide: 0,
          slideShadows: false
        },
      },
      1024:{
        slidesPerView: 2,
        spaceBetween: 100,
        coverflowEffect: {
          rotate: 0,
          stretch:100,
          depth:400,
          modifier: 1,
          initialSlide: 0,
          slideShadows: false
        },
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 2,
        spaceBetween: 100,
        coverflowEffect: {
          rotate: 0,
          stretch:100,
          depth:400,
          modifier: 1,
          initialSlide: 0,
          slideShadows: false
        },
      }
    }
  });  

  $('.hambergur').click(function (e) {
    e.stopPropagation();
    $('.nav-mobile-box').toggleClass('active');
});

$('.btn-close').click(function (e) {
  e.stopPropagation();
  $('.popup-fixed').toggleClass('closee');
});

$('.close-mobile-box').on('click',function () {
  $('.nav-mobile-box').addClass('close-mobile-menu-box');
  $( ".nav-mobile-box" ).removeClass( "active" )
});


let guide = document.querySelectorAll(".guide");

guide.forEach(guide => {
  guide.addEventListener("click", event => {
    const active = document.querySelector(".guide.active");
    if(active && active !== guide ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    guide.classList.toggle("active");
    const answer = guide.nextElementSibling;
    if(guide.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


});



document.querySelectorAll(".filters .item").forEach(function (tab, index) {
  tab.addEventListener("click", function () {
    const filters = document.querySelectorAll(".filters .item");
    const tabs = document.querySelectorAll(".tabs__list .tab");

    filters.forEach(function (tab) {
      tab.classList.remove("active");
    });
    this.classList.add("active");

    tabs.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    tabs[index].classList.add("active");
  });
});


$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".header-main").addClass("header-effect");     
    } else {
      $(".header-main").removeClass("header-effect");     
    }
  });
});