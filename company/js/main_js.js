$(document).on('mouseover', 'nav .nav_01', function () {
     $('.nav_sub_01').slideDown(200);
 });
 $(document).on('mouseover', 'nav', function () {
     if (!$(this).hasClass('nav')) {
         $('.nav_sub_01').slideUp(200);
     }
 });
 
 
