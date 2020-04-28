import React, { useContext } from 'react'
import { WeatherListContext } from '../context/WeatherListContext';
import './Weather.css'

const WeatherInfo = () => {
    const { weather, dateBuilder } = useContext(WeatherListContext)

    return (
        <div>
            {(typeof weather.main !== "undefined") ? (
                <div className="info-box">
                    <div className="location-box">
                        <div className="location">{weather.name}, {weather.sys.country} </div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather.main.temp)}&#176;C</div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default WeatherInfo
