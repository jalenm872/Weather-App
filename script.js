let weather = {
    "apiKey": "b222be32564b5a976119b9aed1c84a8d",
    fetchWeather: function ( lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat=
            + lat
            + "&lon=" +
            + lon +
            "&exclude={part}&appid="
            + this.apiKey
        )
        }.then((response) => response.json())
        .then((data) => this.displayWeather(data));

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
}