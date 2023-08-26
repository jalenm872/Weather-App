let weather = {
    "apiKey": "b222be32564b5a976119b9aed1c84a8d",
    fetchWeather: function ( lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat="
            + lat
            + "&lon=" +
            + lon +
            "&exclude={part}&appid="
            + this.apiKey
        )
        }.then((response) => response.json())
        .then((data) => this.displayWeather(data));
}