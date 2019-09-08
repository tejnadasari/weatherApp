import React from 'react';

const weather = (props) => {

        const farhenheit = ((props.temperature - 273.15) * 1.8) + 32
    
    return (
        <div>
            {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
            {props.temperature && <p>Temperature: {Math.round(farhenheit)}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
            
        </div>
    )
}

export default weather;