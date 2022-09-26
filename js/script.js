new WOW().init();

{
  const body = $("body");
  const $home = $(".home");
  const $banner = $(".cont>.article_1");
  const $atc2 = $(".cont>.article_2");
  const $atc2_container = $(".cont>.article_2>.container");
  const $atc2_imgBox = $(
    ".cont>.article_2>.container>.cont-box>.box>a>.img-box"
  );
  const $atc3 = $(".cont>.article_3>.vdo-box");
  const $atc4 = $(".cont>.article_4>.container");
  const $atc4_imgBox = $(".cont>.article_4>.container>.cont-box>a>.img-box");

  const $burger = $("header>.burger");
  const $nav = $("header>nav");
  const $gnb = $("header>nav>.gnb");
  const $cls = $("header>nav>.close");
  const $sns = $(".home>.sns-ico");

  const hideFn = () => {
    $gnb.fadeOut(150);
    $cls.fadeOut(150);
    $sns.fadeOut(150);
  };

  let fullscreen;

  //화면 사이징
  $(window).on("load resize", function () {
    const height = window.innerHeight;
    const width = window.innerWidth;
    $home.height(height - 80);
    $atc2_imgBox.height($atc2_imgBox.width());

    if (width > 1200) {
      fullscreen = true;

      $nav.show();
      $gnb.css({ display: "flex" });
      $sns.css({ display: "flex" });
      body.css({ overflow: "initial" });
      $atc3.height($atc3.width() / 1.8);
    } else {
      fullscreen = false;

      hideFn();
      $nav.hide(150);
      $atc3.height($atc3.width() / 2.5);
    }

    if (width > 640) {
      $banner.height(width / 2.2);
      $atc2.height($atc2.width());
      $atc4.height($atc4.width() * 1.4);
      $atc4_imgBox.height($atc4_imgBox.width() * 1.2);
    } else {
      $banner.height(width * 1.2);
      $atc2.height($atc2.width() * 2.8);
      $atc4.height($atc4.width() * 2.8);
      $atc4_imgBox.height($atc4_imgBox.width() * 0.7);
    }

    $atc2_container.css({
      margin: ($atc2.height() - $atc2_container.height()) / 2 + "px auto",
    });
  });

  $(window).on("scroll", function () {
    if (!fullscreen) {
      $atc4_imgBox.css({ borderRadius: 0 });
      return;
    }

    $atc4_imgBox.each(function (idx) {
      const $this = $atc4_imgBox.eq(idx);
      if (
        Math.floor($this.offset().top) - 10 <
        window.scrollY + window.innerHeight
      ) {
        $this.css({ borderRadius: 280 });
      }
    });
  });

  //햄버거버튼 클릭시 팝업메뉴 호출
  $burger.on("click", function (evt) {
    evt.preventDefault();
    $burger.hide(500);

    $nav.fadeIn(800, function () {
      $gnb.fadeIn(500);
      $cls.show();
      $sns.css({ display: "flex" });
    });

    body.css({ overflow: "hidden" });

    setTimeout(function () {
      $burger.show();
    }, 1000);
  });

  $cls.on("click", function (evt) {
    evt.preventDefault();
    hideFn();
    $nav.fadeOut(150);
    body.css({ overflow: "initial" });
  });
}
