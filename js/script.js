$(function() {
  // drawer.js
  $( '.drawer' ).drawer()

  // smoothscroll
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定(ミリ秒)
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップに戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $( '#js-header' ).outerHeight()
      },
      speed
    );
    return false;
  });

  // wowjs
  new WOW().init()
})








