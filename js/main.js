$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        arrows : true, 
        dots : true, 
        autoplay : true,
        autoplaySpeed : 3000, 
        pauseOnHover : true,
        swipe : true
      });//slick

      $(window).scroll(function(){

    if ($(document).scrollTop() >= 200 && $(document).scrollTop() < 400) {
        $('#nav').addClass('fix');
         $('#nav').removeClass('fix2');

    } else if($(document).scrollTop() >= 400){
       $('#nav').addClass('fix2');
        }

      else {

      $('#nav').removeClass('fix');
      $('#nav').removeClass('fix2');

         }//scroll-else

      })//.scroll

      var wd = $(window);
      $('.paral').each(function(){
        var bg = $(this);
        wd.scroll(function(){
          var yPos = -(bg.scrollTop() / 2); 
            //나눠지는 숫자가 작을 수록 속도가 빠름
          var coords = '0' + yPos + 'px';
          bg.css({backgroundPosition:coords});
        });
      });

      $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a'); // a .tabs a 중 하나 
        var anchor_on = $(this).find('.tabs a.on'); // b) a중 .on
        /* find는 하위요소 중에 찾음. 손주/자식 모두 다 찾을 수 있음 */
        var href_on = anchor_on.attr('href'); //c) b의 href
        var panel = $(this).find('.panel'); // #panel1-1 
        
        $(href_on).show(); 
        anchor.each(function(){
          var href_this = $(this).attr('href');
          $(this).click(function(){
            panel.hide();
            anchor.removeClass('on')
            $(this).addClass('on');
            $(href_this).show();
            })
          })//each2
        })//each
  })//ready
  