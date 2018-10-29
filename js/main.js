/**
 * Thay đổi class active 
 * ID: Portfolio
*/
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("por");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[i].className = current[i].className.replace(" active", "");
    //this.className += " active";
  });
}

/**
 * Thay đổi class của nav
 * Scroll chuột 
 * ID: Header
 */
var x = window.matchMedia("(max-width: 768px)");
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10 || x.matches)  {
    	$('nav').addClass('nav-color');
    }
    else {
    $('nav').removeClass('nav-color');
    }
  });
});

$(document).ready(function() {
	$(window).ready(function() {
  	if(x.matches)  {
        $('.navbar-nav').addClass('.pull-left');
        $('.navbar-nav').removeClass('.pull-right');
    }
    else {
    $('.navbar-nav').removeClass('.pull-left');
    $('.navbar-nav').addClass('.pull-right');
    }
  });
});
/**
 * Tạo carousel có responsive
 * ID: Client
 */
$(document).ready(function() {
    $("#owl-example").owlCarousel();
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:6
          }
      }
  })
    $('.portfolio').mixIpUp();
  });
  
  /**
   * Tạo animation khi click vào các id
   */
$(document).ready(function(){
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();
        var target=this.hash;
        var $target=$(target);

        $('html,body').animate({
            'scrollTop':$target.offset().top
        },1000,'swing');
    });
});
        

   //Khi người dùng cuộn chuột thì gọi hàm scrollFunction
   window.onscroll = function() {scrollFunction()};
   // khai báo hàm scrollFunction
   function scrollFunction() {
       // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           //nếu lớn hơn 20px thì hiện button
           document.getElementById("myBtn").style.display = "block";
       } else {
            //nếu nhỏ hơn 20px thì ẩn button
           document.getElementById("myBtn").style.display = "none";
       }
   }
   //gán sự kiện click cho button
   document.getElementById('myBtn').addEventListener("click", function(){
       //Nếu button được click thì nhảy về đầu trang
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
       
   });
