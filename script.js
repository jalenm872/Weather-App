let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", getLatLon);

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

