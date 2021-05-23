//Global Variables
var apiKey = "6acff4b460e93cf4b9845b4213e753aa"
var searchBtn = document.getElementById("citySearchButton")
var mainCard = document.getElementById("maincard")
var cardBody = document.getElementById("cardbody")
var userInput = document.querySelector("#citySearchInput")

function callApi() {
    var userSearchItem = userInput.value;
    var cityCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearchItem + "&Appid=" + apiKey;
    var city5Day = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";
    console.log(cityCurrent)

    $.get(cityCurrent, function (apiData) {
        // var userCity = userInput.value.trim()
        var city = apiData.name
        console.log(city)
        document.getElementById("cityList").innerHTML = "<li>" + userSearchItem + "</li>"
    }).then(function (response) {
        console.log(response)
        // newCityList.innerHTML = "<p>" + city + "</p>"
    })
}

callApi();