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

	var appKey = '75df820b4273e037da791510dc4d6114'
	var appId = "628766d5"
	var apiCall = "https://api.nutritionix.com/v1_1/search/" + search_input + "?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appId + "&appKey=" + appKey
	
	$(function(){
		var $apiData = $('#apiData');

		$.ajax({
			type: 'GET',
			url: 'https://api.nutritionix.com/v1_1/search/' + search_input + '?results=0:20&fields=*&appId=628766d5&appKey=75df820b4273e037da791510dc4d6114',
			success: function(apiData) {
				console.log("success", apiData);
				$.each(apiData, function(i, item){
					console.log('callx', i, item, apiData.hits);
					$apiData.append('<li>Brand Name: '+ apiData.hits[1].fields.brand_name + ", Item Name: " + apiData.hits[1].fields.item_name + ", Carbohydrates: " + apiData.hits[0].fields.nf_total_carbohydrate + ", Calories: " + apiData.hits[1].fields.nf_calories + '</li>');
				});

		}
	});
	});
};
