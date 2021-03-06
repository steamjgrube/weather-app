
var apiKey = "6acff4b460e93cf4b9845b4213e753aa";
var searchButton = $(".searchButton");
var keyCount = 0;


searchButton.click(function () {

    var userInput = $(".userInput").val();
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";


    if (userInput == "") {
        console.log(userInput);
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function (response) {
            var currentCard = $(".currentCard").append("<div>").addClass("card-body");
            currentCard.empty();
            var cityName = currentCard.append("<p>");
            // .addClass("card-text");
            currentCard.append(cityName);

            var timeUTC = new Date(response.dt * 1000);
            cityName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
            cityName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            var temperature = cityName.append("<p>");
            cityName.append(temperature);
            temperature.append("<p>" + "Temperature: " + response.main.temp + "</p>");
            temperature.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
            temperature.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");

            var urlUV = `https://api.openweathermap.org/data/2.5/uvi?appid=b8ecb570e32c2e5042581abd004b71bb&lat=${response.coord.lat}&lon=${response.coord.lon}`;

            $.ajax({
                url: urlUV,
                method: "GET"
            }).then(function (response) {

                var currentUV = temperature.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                currentUV.addClass("UV");
                temperature.append(currentUV);
            });

        });

        // 5 Day Forecast
        $.ajax({
            url: urlFiveDay,
            method: "GET"
        }).then(function (response) {
            var day = [0, 8, 16, 24, 32];
            // var fiveDayCard = $(".fiveDayCard").addClass("card-body");
            var fiveDayDiv = $(".fiveDayOne").addClass("card-text");
            fiveDayDiv.empty();
            day.forEach(function (i) {
                var FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
                FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

                fiveDayDiv.append("<div class=fiveDayColor>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");


            })

        });
    }
});