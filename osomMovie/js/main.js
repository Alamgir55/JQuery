
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
    osomMovie.generateMarkup();
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

osomMovie.generateMarkup = function(){
    var template = '';

    $.each(osomMovie.database, function(index){
        var db = osomMovie.database;

        template += '<div class="movie_item" data-id='+db[index].id+'>';
		template +=	'<div class="header">';
		template +=		'<div class="left">';
		template +=			'<img src="images/'+db[index].img+'" alt="">';
		template +=		'</div>';
		template +=		'<div class="right">';
		template +=			'<h3>'+db[index].title+'</h3>';
		template +=			'<div class="node">';
		template +=				'<span>Year:</span> '+db[index].year+'';
		template +=			'</div>';
		template +=			'<div class="node">';
		template +=				'<span>Director:</span>'+db[index].director;
		template +=			'</div>';
		template +=			'<div class="node">';
		template +=				'<span>Type:</span>'+db[index].type;
		template +=			'</div>';
		template +=			'<div class="show_desc">See Description</div>';
		template +=		'</div>';
        
		template +=		'<div class="description">';
		template +=			'<strong>Description:</strong>'+db[index].desc;
		template +=		'</div>';
		template +=	'</div>';
		template += '</div>';
    });

    $('.movies_content').append(template);
    osomMovie.showDescription();
    osomMovie.startFilter();
}

osomMovie.showDescription = function(){
    $('.show_desc').on('click', function(){
        var $this = $(this);
        var parent = $(this).parents().eq(2);
        var element = parent.find('.description');

        element.slideToggle(300, function(){
            if($this.hasClass('active')){
                $this.text('See Description').removeClass('active');
            }else{
                $this.text('Hide Description').addClass('active');
            }
        })
    })
}

osomMovie.startFilter = function(){
    $('select').on('change', function(){
        var db = osomMovie.database;
        var type = $('#categories').val();
        var director = $('#directors').val();
        var results = [];

        $.each(db, function(index){
            if(db[index].type === type){
                results.push(db[index].id);
            }
            if(db[index].director === director){
                results.push(db[index].id)
            }
        });
        
        if(results.length < 1){
            $('.movie_item').show();
        }else{
            var uniqueArray = [];

            $.each(results, function(i, e){
                if($.inArray(e,uniqueArray) == -1) uniqueArray.push(e);
            })
            $('.movie_item').hide();
            $.each(uniqueArray,function(i,e){
                $('div[data-id="'+e+'"]').show();
            })
        }

    })
}

osomMovie.loadAssets();