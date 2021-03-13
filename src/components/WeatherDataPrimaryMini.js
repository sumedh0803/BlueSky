import React, { Component } from 'react'

//weather images
import sun from '../assets/sun.png';
import rain from '../assets/rain.png';
import thunderstorm from '../assets/thunderstorm.png';
import cloud from '../assets/cloud.png';
import haze from '../assets/haze.png';
import mist from '../assets/fog.png';
import snow from '../assets/snow.png';
import smoke from '../assets/smoke.png'

import windImg from '../assets/wind.png';
import humidityImg from '../assets/humidity.png';
import uvImg from '../assets/uv.png';
import SecondaryWeatherMini from './SecondaryWeatherMini';
class WeatherDataPrimaryMini extends Component {
    getImageSrc(weather)
    {
        switch (weather){
            case "Rain": return rain;
            case "Clear": return sun;
            case "Thunderstorm": return thunderstorm;
            case "Clouds": return cloud;
            case "Haze": return haze;
            case "Mist": return mist;
            case "Snow": return snow;
            case "Fog": return smoke;
            case "Smoke": return smoke;
        }
    }

    render() {
        const {weather,wind,humidity,uvi,max, min,current} = this.props
        let imgSrc = this.getImageSrc(weather)
        const secondaryweather = {"float": "right",
                                "border":"0px solid black",
                                "width":"65%",
                                "display":" flex",
                                "flex":"auto",
                                "justifyContent": "space-around",
                               }
        let minmax = null
        if(current)
        {
            minmax =    <div style = {{"margin":"auto 2%","fontSize":"25px","flex":"1"}}>
                            {current}°C
                        </div>
        }
        else
        {
            minmax =<div style = {{"margin":"auto 2%","fontSize":"18px","flex":"1"}}>
                        <div>Max: {max}°C</div>
                        <div>Min: {min}°C</div>
                    </div>
        }
        return (
            <div className = "split-weather-details">
                <img src = {imgSrc} height = "80px" className = "" style = {{"margin": "auto 0"}}/>
                {minmax}
                <div style={secondaryweather} id = "weather-img">
                    <SecondaryWeatherMini img = {windImg} data = {`${wind.speed}MPH from ${wind.deg}`} type = "Wind"/>
                    <SecondaryWeatherMini img = {humidityImg} data = {`${humidity}%`} type = "Humidity"/>
                    <SecondaryWeatherMini img = {uvImg} data = {uvi} type = "UV Index"/>  
                </div>    
            </div>
        )
    }
}

export default WeatherDataPrimaryMini
