$(function () {
  "use strict";
  //calc height
  var winh = $(window).height(),
    navh = $(".navbar").innerHeight();
  $(".img-page , .imgs , .overlay").height(winh - navh - 200);

  //calc height modern
  $(".modern").height(winh - 50);

  //slider calculate
  var imagesH = $(".images").height(),
    imagesW = $(".images").width();
  $(".images img").height(imagesH).width(imagesW);

  var imgarray = [
    $(".thumbnails img.selected").attr("src"),
    $(".thumbnails img.selecte").attr("src"),
    $(".thumbnails img.select").attr("src"),
    $(".thumbnails img.selec").attr("src"),
    $(".thumbnails img.sele").attr("src"),
  ];
  var i = 0;
  var x = 0;
  setInterval(function () {
    if (i <= imgarray.length) {
      $(".selected-img img").hide().attr("src", imgarray[i]).fadeIn(1000);
      i++;
    } else {
      i = 0;
    }
    if (x <= $(".thumbnails img").length) {
      $(".thumbnails img")
        .eq(x)
        .addClass("active")
        .siblings()
        .removeClass("active");
      x++;
    } else {
      x = 0;
    }
  }, 3000);
});
