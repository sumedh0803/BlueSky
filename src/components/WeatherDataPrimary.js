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
import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';

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
            <Grid  item xs = {12} spacing = {1} container>
                <Grid item xs = {12} md = {5} container>
                    <Grid xs = {6}><img className = "weatherCond" src={imgSrc} id = "weather-img" width = "125px"/></Grid>
                    <Grid xs = {6} style = {{"placeSelf" : "center"}}><Typography variant = "h1">{Math.round(this.props.current)}°C</Typography></Grid>
                </Grid>
                <Grid item xs = {12} md = {7} container>
                    <Box className = "secondaryweather" id = "weather-img">
                        {secondaryWeather.map(({img,data,type}) => {
                            return <Grid item xs = {12} container direction = "column"><SecondaryWeather img = {img} data = {data} type = {type}/></Grid>
                        })}
                    </Box>
                </Grid>
            </Grid>
            
        )
    }
}

export default WeatherDataPrimary
