import { Grid } from '@material-ui/core';
import React from 'react'

function WeatherConditionText(props) {
    const city = props.city
    let weather = props.weather
    switch (weather){
        case "Rain": weather = "raining";break
        case "Clear": weather = "clear";break
        case "Thunderstorm": weather = "thundering";break
        case "Clouds": weather = "cloudy";break
        case "Haze": weather = "hazy";break
        case "Mist": weather = "misty";break
        case "Snow": weather = "snowing";break
    }
    
    return (
            <Grid item sm = {12}>
                <div className = "weather-text">
                    Its {weather} in {city}
                </div>
            </Grid>
    )
}

export default WeatherConditionText
