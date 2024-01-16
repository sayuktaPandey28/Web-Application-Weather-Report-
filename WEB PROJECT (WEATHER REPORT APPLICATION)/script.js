async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherResult = document.getElementById('weatherResult');

    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3df3f9a971605be26a6cb55acf270853`);
        const data = await response.json();

        const temperature = Math.round(data.main.temp - 273.15); // Conversion to Celsius
        const description = data.weather[0].description;

        weatherResult.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherResult.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
    }
}
