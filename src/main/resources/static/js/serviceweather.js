var weatherValues;
 var selectedCity;


function searchCityWeather(){
    getCityWeather();
}
 function getCityWeather(){
         
    area =$('#data');
        selectedCity=$('#city').val();
    
           var url="https://rodriguez-arsw-t2.herokuapp.com/weather/"+selectedCity
            var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
lista=JSON.parse(lista);
var up= getVals(lista)
area.val(up)

           
                 

    }
    function getVals(lista){
        var answer='';
        answer=answer+'Temperatura '+lista['main']['temp']
        answer= answer +' Precion atmosferica ' + lista;
        return answer;
    }