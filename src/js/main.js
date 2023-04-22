document.addEventListener("DOMContentLoaded", () => {

   var accordeonButtons = document.getElementsByClassName("accordeon__button");

   //пишем событие при клике на кнопки - вызов функции toggle
   for (var i = 0; i < accordeonButtons.length; i++) {
      var accordeonButton = accordeonButtons[i];

      accordeonButton.addEventListener("click", toggleItems, false);
   }

   //пишем функцию
   function toggleItems() {

      // переменная кнопки(актульная) с классом
      var itemClass = this.className;

      // добавляем всем кнопкам класс close
      for (var i = 0; i < accordeonButtons.length; i++) {
         accordeonButtons[i].className = "accordeon__button closed";
      }

      // закрываем все открытые панели с текстом
      var pannels = document.getElementsByClassName("accordeon__panel");
      for (var z = 0; z < pannels.length; z++) {
         pannels[z].style.maxHeight = 0;
      }

      // проверка. если кнопка имеет класс close при нажатии
      // к актуальной(нажатой) кнопке добававляем активный класс
      // а панели - которая находится рядом задаем высоту
      if (itemClass == "accordeon__button closed") {
         this.className = "accordeon__button active";
         var panel = this.nextElementSibling;
         panel.style.maxHeight = panel.scrollHeight + "px";
      }

   }
});
document.addEventListener('DOMContentLoaded', function () {
   $(window).on('load', function () {
      // $(".calc__btn_one").prop('disabled', !$("input[name='formKitchen']:checked").length);
      // $("input[name='formKitchen']").on('change', function () {
      //    $(".calc__btn_one").prop('disabled', !$("input[name='formKitchen']:checked").length);
      // });
      // $(".calc__btn_two").prop('disabled', !$("input[name='typeFacade']:checked").length);
      // $("input[name='typeFacade']").on('change', function () {
      //   $(".calc__btn_two").prop('disabled', !$("input[name='typeFacade']:checked").length);
      // });
      // $(".calc__btn_three").prop('disabled', !$("input[name='model']:checked").length);
      // $("input[name='model']").on('change', function () {
      //   $(".calc__btn_three").prop('disabled', !$("input[name='model']:checked").length);
      // });
      // $(".calc__btn_four").prop('disabled', !$("input[name='typePanel']:checked").length);
      // $("input[name='typePanel']").on('change', function () {
      //    $(".calc__btn_four").prop('disabled', !$("input[name='typePanel']:checked").length);
      // });
      $(".calc__btn_five").prop('disabled', !$("input[name='typeWash']:checked").length);
      $("input[name='typeWash']").on('change', function () {
         $(".calc__btn_five").prop('disabled', !$("input[name='typeWash']:checked").length);
      });
      $(".calc__btn_six").prop('disabled', !$("input[name='classFurniture']:checked").length);
      $("input[name='classFurniture']").on('change', function () {
         $(".calc__btn_six").prop('disabled', !$("input[name='classFurniture']:checked").length);
      });
      $(".calc__btn_seven").prop('disabled', !$("input[name='classF']:checked").length);
      $("input[name='classF']").on('change', function () {
         $(".calc__btn_seven").prop('disabled', !$("input[name='classF']:checked").length);
      });
   });
   $('.calc__btn_one').click(function (event) {
      $('.calc__one').css('display', 'none');
      $('.calc__two').fadeIn();
      return false;
   });
   $('.calc__btn_two').click(function (event) {
      $('.calc__two').css('display', 'none');
      $('.calc__three').fadeIn();
      return false;
   });
   $('.calc__btn_three').click(function (event) {
      $('.calc__three').css('display', 'none');
      $('.calc__four').fadeIn();
      return false;
   });
   $('.calc__btn_four').click(function (event) {
      $('.calc__four').css('display', 'none');
      $('.calc__five').fadeIn();
      return false;
   });
   $('.calc__btn_five').click(function (event) {
      $('.calc__five').css('display', 'none');
      $('.calc__six').fadeIn();
      return false;
   });
   $('.calc__btn_six').click(function (event) {
      $('.calc__six').css('display', 'none');
      $('.calc__seven').fadeIn();
      return false;
   });
   $('.calc__btn_seven').click(function (event) {
      $('.calc__seven').css('display', 'none');
      $('.calc__eight').fadeIn();
      return false;
   });

   $('.calc__two .calc__prev').click(function (event) {
      $('.calc__two').css('display', 'none');
      $('.calc__one').fadeIn();
      return false;
   });

   $('.calc__three .calc__prev').click(function (event) {
      $('.calc__three').css('display', 'none');
      $('.calc__two').fadeIn();
      return false;
   });

   $('.calc__four .calc__prev').click(function (event) {
      $('.calc__four').css('display', 'none');
      $('.calc__three').fadeIn();
      return false;
   });

   $('.calc__five .calc__prev').click(function (event) {
      $('.calc__five').css('display', 'none');
      $('.calc__four').fadeIn();
      return false;
   });

   $('.calc__six .calc__prev').click(function (event) {
      $('.calc__six').css('display', 'none');
      $('.calc__five').fadeIn();
      return false;
   });

   $('.calc__seven .calc__prev').click(function (event) {
      $('.calc__seven').css('display', 'none');
      $('.calc__six').fadeIn();
      return false;
   });
});
document.addEventListener("DOMContentLoaded", () => {
   $(document).mouseup(function (e) {
      var container = $(".menu2");
      if (container.has(e.target).length === 0) {
         container.removeClass('active');
      }
   });
});
document.addEventListener("DOMContentLoaded", () => {
   $(document).mouseup(function (e) {
      var container = $(".menu3");
      if (container.has(e.target).length === 0) {
         container.removeClass('active');
      }
   });
});
document.addEventListener("DOMContentLoaded", () => {
   $('.back').click(function (event) {
      event.preventDefault();
      $('.main-left').toggleClass('on');
   });
});
document.addEventListener("DOMContentLoaded", () => {
   $('.back').click(function (event) {
      event.preventDefault();
      $('.back').toggleClass('back2');
   });
});
document.addEventListener("DOMContentLoaded", () => {
   let menuBtn = document.querySelector('.menu-btn');
   let menu = document.querySelector('.menu');
   menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
   });
});
document.addEventListener("DOMContentLoaded", () => {
   let menuBtn2 = document.querySelector('.menu-btn2');
   let menu2 = document.querySelector('.menu2');
   menuBtn2.addEventListener('click', function () {
      menuBtn2.classList.toggle('active');
      menu2.classList.toggle('active');
   });
});
document.addEventListener("DOMContentLoaded", () => {
   let menuBtn3 = document.querySelector('.menu-btn3');
   let menu3 = document.querySelector('.menu3');
   menuBtn3.addEventListener('click', function () {
      menuBtn3.classList.toggle('active');
      menu3.classList.toggle('active');
   });
});
document.addEventListener("DOMContentLoaded", () => {
   jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
         // Get the SVG tag, ignore the rest
         var $svg = jQuery(data).find('svg');

         // Add replaced image ID to the new SVG
         if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
         }
         // Add replaced image classes to the new SVG
         if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
         }

         // Remove any invalid XML tags as per http://validator.w3.org
         $svg = $svg.removeAttr('xmlns:a');

         // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
         if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
         }

         // Replace image with new SVG
         $img.replaceWith($svg);

      }, 'xml');

   });
});

