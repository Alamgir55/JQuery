
$(document).ready(function(){
    //$('form, p').css('fontSize', '30px');

    //$("#list, .text").css('fontSize', '30px');

   // $("input:text").css("background", "red")

   // $("li:even").css("background","red")

   //$("li:odd").css("background","red")

   //$('.parent p:first-child').css("background", "red");

   //$(".parent").find("#text").css("background", "red");

   //$(".parent").children("p").css("background","red");

   //$('.user').parent().css("background","red");

   //$('.second').next().css("background", 'blue');

   //$(".list li:eq(2)").css("background", "red");

   //$(".list").parents().eq(1).css("background", "red");

   //$('div').filter('.midd').css("background", "red");

    // $('.parent').append('<div class="newDiv">Mi New Div</div>');

   // $('<div class="newDiv">Mi New Div</div>').appendTo('.parent');

    // $('.parent').prepend('<div class="newDiv">Mi New Div</div>');

    //$('.element').before('<div>After</div>');

   // $('.element').after('<div>After</div>');

  // $('.replaceMe').replaceWith('<div>Replaced</div>');

  //$('<div>Replace</div>').replaceAll('.replaceMe,.replaceMeAG');

  //$('.removeMe').remove();

 // $('a').text('something');

 // console.log($('a').attr('href'));

  //console.log($('input').prop('checked'));

  // let classes = $('div').attr('class');

  // console.log(classes);

  // console.log($('.element').hasClass('anotherClass'));

  // $('.element').addClass('button');

  // $('.element').toggleClass('anotherClass soem');

  // let element = $('.element');

  // console.log(element.css('width'));
  // console.log(element.css('fontSize'));

  // // element.css("background", "blue");
  // // element.css("width", "-=50px");

  // element.css({
  //   "background": "red",
  //   "color": "blue",
  //   "width": "+=50px"
  // })

  // console.log($('.element').data('name'));
  // console.log($('.element').data('hobbies'));

  // console.log($('.element').data());

  // $('.element').on("click mouseleave mouseover", function(){
  //   console.log('Click !!');
  // });

  // $('.element').mouseenter(function(){
  //   console.log('mouse enter');
  // });

  // $('.element').mouseleave(function(){
  //   console.log('mouse leave');
  // });

  // $('.element').hover(function(){
  //   console.log('mouse enter');
  // }, function(){
  //   console.log('mouse leave');
  // });

  // $('.element').mousedown(function(){
  //   console.log('click down');
  // });
  // $('.element').mouseup(function(){
  //   console.log('click release');
  // })

  // $('.element').mousemove(function(e){
    
  //   let pagecoords = "{" + e.pagex + ", " + e.pageY + "}";
  //   console.log("coords:"+ pagecoords);
  
  // });


  $(document).keydown(function(e){
    console.log(e.which);
  })

});