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
import SecondaryWeather from './SecondaryWeather';
class WeatherDataPrimary extends Component {

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
        
        let imgSrc = this.getImageSrc(this.props.weather)
        
        const wind = this.props.wind
        const humidity= this.props.humidity
        const uvi = this.props.uvi

        const secondaryWeather = [{
            img: windImg,
            data: `${wind.speed}MPH from ${wind.deg}`,
            type: "Wind"
        },
        {
            img: humidityImg,
            data: `${humidity}%`,
            type: "Humidity"
        },
        {
            img: uvImg,
            data: uvi,
            type: "UV Index"
        }]

        return (
            <div style = {{"overflow": "hidden","display": "flex","margin-top":"1%"}}>
                <img className = "weatherCond" src={imgSrc} id = "weather-img" width = "125px"/>
                <div className = "temperature">{Math.round(this.props.current)}°C</div>
                <div className = "secondaryweather" id = "weather-img">
                    {secondaryWeather.map(({img,data,type}) => {
                        return <SecondaryWeather img = {img} data = {data} type = {type}/>
                    })}
                </div>
            </div>
        )
    }
}

export default WeatherDataPrimary
