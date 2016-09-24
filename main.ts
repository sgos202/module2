/// <reference path="./jquery.d.ts" />

'use strict';


function myFunction() {
    alert("Hello this website helps you find nutrional information\nabout your desired products...\nTry searching for an Apple.\nThank you for your time.");
}

function api(searchValue){ //makes dynamic call to get the API data
    var search_input: string = searchValue
    var new_list = document.getElementById('apiData')
    var count;
    

	$(function(){
		var $apiData = $('#apiData');
        $('#NutTable tbody').empty(); //clears the list for next search
		if (search_input == null){
                
		}
		else{
			$.ajax({
			type: 'GET',
			url: 'https://api.nutritionix.com/v1_1/search/' + search_input + '?results=0:20&fields=*&appId=628766d5&appKey=75df820b4273e037da791510dc4d6114',
            
			success: function(apiData) {
                
                for(count = 0; count <20; count ++){ //gets 20 results back from API call 
                    console.log("success1", apiData);
                    
                    $('#NutTable tbody').append('<tr> <td>' + apiData.hits[count].fields.brand_name + '</td> <td>' + apiData.hits[count].fields.item_name + '</td> <td>'
                     + apiData.hits[count].fields.nf_total_carbohydrate + '</td> <td>' + apiData.hits[count].fields.nf_protein + '</td> <td>' 
                       + apiData.hits[count].fields.nf_sugars + '</td> <td>' + apiData.hits[count].fields.nf_calories + '</td> </tr>');
                }
                

			}
            
	});
    
			
		}

	});
};
