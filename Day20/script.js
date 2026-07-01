// Fetch weather data for a given city

// 1st way to fetch data using fetch API
function getWeather(city) {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(raw => raw.json())
        .then(result => {
            console.log(result);
        });
}

getWeather("Japan");


// 2nd way to fetch data using async await
async function getWeather(city) {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );

    let realdata = await raw.json();
    console.log(realdata);
}

getWeather("Paris");