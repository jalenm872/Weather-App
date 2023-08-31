let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", updateWeather);

// Function to get the latitude and longitude of the city
function getLatLon() {
    // Get the value of the search input
    let searchInput = document.querySelector(".search-bar").value;
    // API call to get the latitude and longitude of the city
    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q="+searchInput+"&limit=1&appid=b222be32564b5a976119b9aed1c84a8d"
    )
    .then(response => {
        // handle the response
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .catch(error => {
        // handle the error
        console.log(error);
    });
}

function getWeather(lat, lon) {
    // API call to get the weather data
    fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&exclude={part}&appid=b222be32564b5a976119b9aed1c84a8d"
    )
    .then(response => {
        // handle the response
        if(response.ok) {
            console.log("Hello");
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        // handle the data
        //console.log(data);
        let name = data.name;
        let temp = data.current.temp;
        let discription = data.current.weather[0].description;
        let humidity = data.current.humidity;
        let windSpeed = data.current.wind_speed;
        console.log(name, temp, discription, humidity, windSpeed);
        // Update the weather data
    })
    .catch(error => {
        // handle the error
        console.log(error);
    });
}


function updateWeather(){
    // Get the value of the search input
    let searchInput = document.querySelector(".search-bar").value;
    // API call to get the latitude and longitude of the city
    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q="+searchInput+"&limit=1&appid=b222be32564b5a976119b9aed1c84a8d"
    )
    .then(response => {
        // handle the response
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        // handle the data
        let lat = data[0].lat;
        let lon = data[0].lon;
        // console.log(lat);
        // console.log(lon);
        getWeather(lat, lon);
    })
    .catch(error => {
        // handle the error
        console.log(error);
    });
}



