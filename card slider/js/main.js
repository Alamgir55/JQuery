
$(document).ready(function(){

    var itemLength = $('.cards_container .item').length;
    var current = 1;
    $('.total_slides').text(itemLength);

    $('.cardSlider .btn_prev').on("click", function(){

        if(current > 1){
            current = current - 1;
           showSlider(current);
        }else{
            current = itemLength;
            showSlider(current);
        }
    });

    $('.cardSlider .btn_next').on("click", function(){

        if(current !== itemLength){
            current = current + 1;
            showSlider(current);
        }else{
            current = 1;
            showSlider(current);
        }
    });    

    function showSlider(current){
        $('.cards_container .item').removeClass('active');
        $('div[data-id="' + current + '"]').addClass('active');

        $('.current_slide').text(current);
    }

});