"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
  $('.fv__slider').slick({
    autoplay: true,
    autoplaySpeed: 5500,
    vertical: true,
    verticalSwiping: true,
    arrows: false
  });
  $('.about-company__slider').slick({
    autoplay: true,
    // autoplaySpeed: 5500,
    centerMode: true,
    // centerPadding: "30px",
    slidesToShow: 3,
    // speed: 400,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 768,
      // 399px以下のサイズに適用
      settings: {
        slidesToShow: 1.5
      }
    }]
  });
  $(".openbtn").click(function () {
    //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
  });

  $('.service__item--1').hover(function () {
    $(this).children('.service__copy').addClass('service__copy--active');
    $('.service__item--2, .service__item--3').addClass('service__item--black');
    $('.section__btn--box2, .section__btn--box3').addClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("0.jpg", "1.jpg");
    $('.service__wide-img').attr("src", img);
  }, function () {
    $(this).children('.service__copy').removeClass('service__copy--active');
    $('.service__item--2, .service__item--3').removeClass('service__item--black');
    $('.section__btn--box2, .section__btn--box3').removeClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("1.jpg", "0.jpg");
    $('.service__wide-img').attr("src", img);
  });
  $('.service__item--2').hover(function () {
    $(this).children('.service__copy').addClass('service__copy--active');
    $('.service__item--1, .service__item--3').addClass('service__item--black');
    $('.section__btn--box1, .section__btn--box3').addClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("0.jpg", "2.jpg");
    $('.service__wide-img').attr("src", img);
  }, function () {
    $(this).children('.service__copy').removeClass('service__copy--active');
    $('.service__item--1, .service__item--3').removeClass('service__item--black');
    $('.section__btn--box1, .section__btn--box3').removeClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("2.jpg", "0.jpg");
    $('.service__wide-img').attr("src", img);
  });
  //ヘッダーサービスホバー

  $("#gnav-service").hover(function () {
    $(".fv-service").addClass("modal-show");
    $(".body").addClass("body-bg");
  });
  $(".fv-service").hover(function () {}, function () {
    $(".fv-service").removeClass("modal-show");
    $(".body").removeClass("body-bg");
  });
  $('.service__item--3').hover(function () {
    $(this).children('.service__copy').addClass('service__copy--active');
    $('.service__item--1, .service__item--2').addClass('service__item--black');
    $('.section__btn--box1, .section__btn--box2').addClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("0.jpg", "3.jpg");
    $('.service__wide-img').attr("src", img);
  }, function () {
    $(this).children('.service__copy').removeClass('service__copy--active');
    $('.service__item--1, .service__item--2').removeClass('service__item--black');
    $('.section__btn--box1, .section__btn--box2').removeClass('section__btn--active');
    var img = $('.service__wide-img').attr("src").replace("3.jpg", "0.jpg");
    $('.service__wide-img').attr("src", img);
  });
  $(function () {
    $(".news-posts:not('.tabactive + .news-posts')").hide();

    // $ (".news__category").click(function(){
    //         $(".news__category").removeClass("tabactive");
    //         $ (this).addClass("tabactive");
    //         $(".news__tab").removeClass("tabchecked");
    //         $(this).children(".news__tab").addClass("tabchecked");

    //         $(".news-posts:not('.tabactive + .news-posts')").fadeOut();
    // $ (".tabactive + .news-posts").fadeIn();      
    // });
    $(".news__tab").click(function () {
      $(".news__tab").removeClass("tabchecked");
      $(this).addClass("tabchecked");
      // jquery本p160
      var target = $(this).attr("value");
      $(".news-posts").each(function () {
        $(this).animate({
          "opacity": 0
        }, function () {
          $(this).hide();
          if ($(this).hasClass(target)) {
            $(this).show();
            $(this).animate({
              "opacity": 1
            });
          }
        });
      });
    });
  });
});