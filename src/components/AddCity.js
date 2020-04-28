import React, { useContext } from 'react';
import { WeatherListContext } from '../context/WeatherListContext';

const AddCity = () => {
    const { city, search, removeCity } = useContext(WeatherListContext)

    console.log(city)

    return (
        <div className="ading-city">
            {city && city.map((el) => (
                <div className="citys-item" key={el.id} onClick={search(el.text)}>
                    {el.text}

                    <button className="remove-city" onClick={() => removeCity(el.id)}>
                        <i className="fas fa-trash-alt " ></i>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AddCity;