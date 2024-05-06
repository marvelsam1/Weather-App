import { useState } from "react";
import Search from "./Search";

const Weather = ({ apiKey }) => {
    // input value from user
    const [city, setCity] = useState('')
    // loading state
    const [Loading, setLoading] = useState(false)
    // weather data
    const [weatherData, setWeatherData] = useState(null) 
    // error state
    const [error, setError] = useState(null)

    async function fetchWeatherData() {
        setLoading(true)
        setError(null)
        try{
            // const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}`)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            if(!response.ok) {
                throw new Error('City not found')
            }
            const data = await response.json()
            console.log(data)
            setWeatherData(data)
        } catch(error) {
            setError(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return ( 
        <div className="weather">
            <Search city={city} fetchWeatherData={fetchWeatherData} setCity={setCity} />

            
            {Loading ? (
            <p>Taking a while...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : weatherData ? (
                <div>
                    <h2 className="weather-name">Weather in {weatherData.name}</h2>
                    <p className="weather-temp">Temperature: {weatherData.main.temp}°C</p>
                    <p className="weather-desc">Weather: {weatherData.weather[0].description}</p>
                </div>
            ) : null}
        </div>
     );
}
 
export default Weather;