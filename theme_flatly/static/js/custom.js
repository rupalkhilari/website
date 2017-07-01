$(document).ready(function() {
  //$('#img-loader').css("display", "none");
  $('#img-loader').fadeOut();
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

$(window).on('load', function(){
   $('#cover').css("display", "none");
});


function loadBanner() {
    var titleText;
    titleText = $('title').text();
    if (titleText.match("Projects")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/projects.jpg)");
        $('#section_strong_text').text("PROJECTS");
    }
    else if (titleText.match("^Gallery")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/gallery.jpg)");
        $('#section_heading').css("color", "#EEEEEE");
        $('#section_strong_text').text("GALLERY");
    }
    else if (titleText.match("^Blog")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/blog.jpg)");
        $('#section_heading').css("color", "#EEEEEE");
        $('#section_strong_text').text("BLOG");
    }
    else if (titleText.match("^Contact")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/contact3.jpg)");
        $('#section_heading').css("color", "#EEEEEE");
        $('#section_strong_text').text("CONTACT");
    }
    else if (titleText.match("^Resume")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/resume.jpg)");
        $('#section_strong_text').text("RESUME");
    }
    else if (titleText.match("^Search")) {
        $('#section_banner').css("background-image", "url(/static/img/banners/search.jpg)");
        $('#section_heading').css("color", "#EEEEEE");
        $('#section_strong_text').text("SEARCH");
    }
    else {
        $('#section_banner').css("background-image", "url(/static/img/banners/home3.jpg)");       
    }
}

$('#section_banner').ready(function(){
    loadBanner();
});

/*
    $(function(){
        console.log("hover");   
    $(".dropdown").hover(
                
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
               // $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                // $('b', this).toggleClass("caret caret-up");                
            });
    });*/

/*$('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});*/
/*
   // Add slideup & fadein animation to dropdown
   $('.dropdown').on('show.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
         $(this).css({'margin-top':''});
      });
   });
   // Add slidedown & fadeout animation to dropdown
   $('.dropdown').on('hide.bs.dropdown', function(e){
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}, 300, function(){
         $(this).css({'margin-top':'', display:''});
      });
   });*/