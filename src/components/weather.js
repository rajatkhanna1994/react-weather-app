import React from 'react';

const Weather = (props) => {
    const temperature = parseFloat(Math.round((props.temperature - 273.15) * 100) / 100).toFixed(2);

    return(
        <div className="weather-info">
            {props.country && props.city && <p className="weather__key"> Location: {props.city}, {props.country}</p>}
            {props.temperature && <p className="weather__key">Temperature: {temperature} C</p>}
            {props.humidity && <p className="weather__key">Humidity: {props.humidity} %</p>}
            {props.description && <p className="weather__key">Conditions: {props.description}</p>}
            {props.error && <p className="weather__error">{props.error}</p>}
        </div>
    )
}

export default Weather;
