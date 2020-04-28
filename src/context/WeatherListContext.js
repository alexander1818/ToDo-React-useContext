import React, { createContext, useState } from 'react'

export const WeatherListContext = createContext()

const WeatherListContextProvider = (props) => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState([]);

    const api = {
        key: '527236c6e428a1fc7353831ef8271f3c',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const search = query => (e) => {
        e.preventDefault()

        if (query === '') return;
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result)
            })
    }

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }

    const handleNewCity = (e) => {
        e.preventDefault();
        if (query === '') return;
        setCity([...city, { id: Date.now(), text: query }])
        console.log(...city)
        setQuery('');
        // e.target.reset();
    }

    const dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

        let days = ['Sundey', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    const removeCity = (id) => {
        setCity(city.filter((town) => town.id !== id))
    }

    return (
        <WeatherListContext.Provider value={{
            city,
            query,
            weather,
            handleOnChange,
            search,
            handleNewCity,
            dateBuilder,
            removeCity
        }}>
            {props.children}
        </WeatherListContext.Provider>
    )
}

export default WeatherListContextProvider
