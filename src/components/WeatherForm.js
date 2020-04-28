import React, { useContext } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { WeatherListContext } from '../context/WeatherListContext';
import WeatherInfo from './WeatherInfo';
import './Weather.css';

const WeatherForm = () => {
    const {
        query,
        handleOnChange,
        search,
        handleNewCity,
    } = useContext(WeatherListContext)

    return (
        <div>
            <Form
                onSubmit={handleNewCity}
            >
                <InputGroup className=" ">
                    <FormControl className="search-box"
                        type="text"
                        onChange={handleOnChange}
                        value={query}
                        placeholder="Search..."
                        aria-describedby="basic-addon2"
                        name="city"
                    />

                    <InputGroup.Append className="buttons">
                        <Button variant="primary" type="submit" onClick={search(query)}>Get Weather</Button>
                        <Button className="bg-warning" variant="primary" type="submit" onClick={handleNewCity}> Add</Button>
                    </InputGroup.Append>
                </InputGroup>

                <WeatherInfo />

            </Form >
        </div>
    )
}

export default WeatherForm;
