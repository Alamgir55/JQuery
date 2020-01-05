
var osomMovie = {};

osomMovie.database = [];

osomMovie.loadAssets = function(){
    $.getJSON("db/movies.json", function(data){
        osomMovie.database = data;
        osomMovie.init();
    })
}

osomMovie.init = function(){
    osomMovie.filterSlider();
    osomMovie.getType();
    osomMovie.getDirector();
}

osomMovie.filterSlider = function(){
    $('.filter.open').on('click', function(){
        $('.filter_container').slideToggle(300, function(){
            var btn = $(this).prev();

            if(btn.hasClass('active')){
                $('.filter.open').find('.btn_title').text('Filter by');
                btn.removeClass('active');
            }else{
                $('.filter.open').find('.btn_title').text('Close');
                btn.addClass('active');
            }

        });
    });
}


osomMovie.getType = function(){
    var types = [];
    $.each(osomMovie.database, function(index, elem){
        if($.inArray(osomMovie.database[index].type, types)){
            var typeValue = osomMovie.database[index].type;
            types.push(typeValue);
            $('#categories').append('<option value="'+typeValue+'">'+typeValue+'</option>');
        }
    })
}

osomMovie.getDirector = function(){
    var directors = [];
    $.each(osomMovie.database, function(index, elem){
        if($.inArray(osomMovie.database[index].director, directors)){
            var directorValue = osomMovie.database[index].director;
            directors.push(directorValue);
            $('#directors').append('<option value="'+directorValue+'">'+directorValue+'</option>');
        }
    })
}

osomMovie.loadAssets();