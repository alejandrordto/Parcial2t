var weatherValues;
 var selectedCity;


function searchCityWeather(){
    getCityWeather();
}
 function getCityWeather(){
         
    area =$('#data');
        selectedCity=$('#city').val();
    
           var url="http://localhost:8080/weather/"+selectedCity
            var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
console.log(lista)
           
                 

    }
    function Details(){
        
    }