// Fetch weather data for a given city

function getWeather(city) {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(raw => raw.json())
        .then(result => {
            console.log(result);
        });
}

getWeather("Japan");