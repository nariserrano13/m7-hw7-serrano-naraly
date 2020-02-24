//variables that will store the html location. will be used to append text
var cityTextContainer = document.querySelectorAll('header h2 span');
var descriptionTextContainer = document.querySelectorAll('main h3 span');

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        //This is your response
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here.
        //var cityName creates a text node
        var cityName = document.createTextNode(apiResult.name);
        cityTextContainer[0].appendChild(cityName);

        var weatherDescription = document.createTextNode(apiResult.weather[0].description);
        descriptionTextContainer[0].appendChild(weatherDescription);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=30324,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();