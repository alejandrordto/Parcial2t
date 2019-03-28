var weatherValues;
 var selectedCity;


function searchCityWeather(){
    getCityWeather(Details);
}
 function getCityWeather(callback){
          if(callback) callback();
console.log()
           var url="http://localhost:5000/weather/"+selectedCity.value
            var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
           
                 

    }
    function Details(){
        area =$('#data');
        selectedCity=$('#city');
    }