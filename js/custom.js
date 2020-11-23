
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$(document).ready(function() {

   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1500);
      })

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();


  /* change style css button
  -------------------------------*/
  $('#yellowscale').click(function (){
     $('link[href="css/style-new.css"]').attr('href','css/style.css');
  });
  $('#redscale').click(function (){
     $('link[href="css/style.css"]').attr('href','css/style-new.css');
  });

});


function copyText(obj){
		var el = obj;
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		document.execCommand('copy');
		return false;
}
