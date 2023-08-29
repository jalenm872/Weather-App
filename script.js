let location = {
    apiKey: "b222be32564b5a976119b9aed1c84a8d",
    fetchLocation: function () {

        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        fetch(
            "http://api.openweathermap.org/geo/1.0/direct?q=Cranston,RI,US&limit={limit}&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.console.log(data));
        // .then((data) => this.displayLocation(data));
    }
};

// let location = {
//     apiKey: "b222be32564b5a976119b9aed1c84a8d",
//     fetchLocation: function (cityName, stateCode, countryCode) {

//         // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//         fetch(
//             "http://api.openweathermap.org/geo/1.0/direct?q="
//             + cityName
//             + ","
//             + stateCode
//             + "," 
//             + countryCode 
//             + "&limit=2&appid="
//             + this.apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => this.console.log(data));
//         // .then((data) => this.displayLocation(data));
//     }
// };

// let weather = {
//     "apiKey": "b222be32564b5a976119b9aed1c84a8d",
//     fetchWeather: function ( lat, lon) {
//         fetch(
//             "https://api.openweathermap.org/data/3.0/onecall?lat="
//             + lat
//             + "&lon=" +
//             + lon +
//             "&exclude={part}&appid="
//             + this.apiKey
//         )
//         }.then((response) => response.json())
//         .then((data) => this.displayWeather(data));
// }