$(function(){
  $('.btn-lang').click(function(e){
    e.preventDefault();

    link = $('#cityLang').val()   //val:값
    console.log(link);

    window.open(link);  //새창
  });
  //go
    
  $('.sc-slide .slide-content .title').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
  })
//첫번째 슬라이드
  var slideBox = new Swiper(".main", {
   loop:true,  

   autoplay: {                
     delay:1000,
     disableOnInteraction: false,
   },
 
  navigation: {
    nextEl: ".slide-area .next",
    prevEl: ".slide-area .prev",
  },
   pagination: {
      el:".slide-area .pagers",
      type: "fraction",
    },  
  });

  $('.slide-area .play').click(function(e){
    e.preventDefault();

    if($(this).find('.start').css('display') == 'none'){
      slideBox.autoplay.stop();
      $(this).find('.start').css({'display':'block'})
      $(this).find('.stop').hide()
    }else{
      slideBox.autoplay.start();
      $(this).find('.stop').css({'display':'block'})
      $(this).find('.start').hide()
    }
  })
  //두번쨰슬라이드
  var secondSlidebox = new Swiper(".second", {
   loop:true,  

   autoplay: {                
     delay: 1000,
     disableOnInteraction: false,
   },
 
  navigation: {
    nextEl: ".second .next",
    prevEl: ".second .prev",
  },
   pagination: {
      el:".slide-area .pagers",
      type: "fraction",
    },  
  });

  $('.slide-area .play').click(function(e){
    e.preventDefault();

    if($(this).find('.start').css('display') == 'none'){
      secondSlidebox.autoplay.stop();
      $(this).find('.start').css({'display':'block'})
      $(this).find('.stop').hide()
    }else{
      secondSlidebox.autoplay.start();
      $(this).find('.stop').css({'display':'block'})
      $(this).find('.start').hide()
    }
  })



      //banner
      
      var bannerSlide = new Swiper(".banner-slide", {
        slidesPerView:3,
       spaceBetween: 43, //2개사이여백
       loop:true,  //반복
      //  centeredSlides: true,

      //플레이되는시간
       autoplay: {                
         delay: 1000,
         disableOnInteraction: false,
       },
      //  pagination: {
      //    el: ".pagers",
      //    clickable: true,
      //  },
      navigation: {
        nextEl: ".sc-banner .next",
        prevEl: ".sc-banner .prev",
      },
       pagination: {
          el: ".sc-banner .pagers",
          type: "fraction",
        },  
      });

      $('.sc-banner .play').click(function(e){
        e.preventDefault();

        if($(this).find('.start').css('display') == 'none'){
          bannerSlide.autoplay.stop();
          $(this).find('.start').css({'display':'block'})
          $(this).find('.stop').hide()
        }else{
          bannerSlide.autoplay.start();
          $(this).find('.stop').css({'display':'block'})
          $(this).find('.start').hide()
        }
      })
    

      //relate

      $('.btn-relate').click(function(e){
        e.preventDefault();

        
        if ($(this).siblings('.relate-box').css('display') == 'block') {
          
          $('.relate-box').stop().slideUp()
          $('.btn-relate').removeClass('on')
          
        } else {

          $('.relate-box').stop().slideUp()
          $(this).siblings('.relate-box').stop().slideDown()

          $('.btn-relate').removeClass('on')
          $(this).addClass('on')
         
        }
      })

      console.log(1);
})//끝


