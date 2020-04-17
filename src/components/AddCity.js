import React from 'react';

const AddCity = (props) => {
    const add = props.town;

    return (
        <div className="header">
            {add && add.map((el) => (
                <div className="city" key={el.text}>{el.text}</div>
            ))}
        </div>
    )
}

export default AddCity;