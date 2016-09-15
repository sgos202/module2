'use strict';

function slidecontrol() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


};

function api(){
	var search_input = document.getElementById("search_bar").value;
    var new_list = document.getElementById('apiData')
    var count;
    

    
	$(function(){
		var $apiData = $('#apiData');
        $('#NutTable tbody').empty();
		if (search_input == []){
			swal("Oops...", "Something went wrong!", "error");
            
            
		}
		else{
			$.ajax({
			type: 'GET',
			url: 'https://api.nutritionix.com/v1_1/search/' + search_input + '?results=0:20&fields=*&appId=628766d5&appKey=75df820b4273e037da791510dc4d6114',
            
			success: function(apiData) {
                
                for(count = 0; count <20; count ++){
                    console.log("success1", apiData);


                    $('#NutTable tbody').append('<tr> <td>' + apiData.hits[count].fields.brand_name + '</td> <td>' + apiData.hits[count].fields.item_name + '</td> <td>'
                     + apiData.hits[count].fields.nf_total_carbohydrate + '</td> <td>' + apiData.hits[count].fields.nf_protein + '</td> <td>' 
                       + apiData.hits[count].fields.nf_sugars + '</td> <td>' + apiData.hits[count].fields.nf_calories + '</td> </tr>');

                new_list = [];
                }
                

			}
            
	});
    
			
		}

	});
};
