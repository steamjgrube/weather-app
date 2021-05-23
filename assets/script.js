//Global Variables
var apiKey = "6acff4b460e93cf4b9845b4213e753aa"
var searchBtn = $(".citySearchButton")

searchBtn.click(function () {
    var userInput = $('citySearchInput').val();
    var cityCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";
    var city5Day = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";

    
})