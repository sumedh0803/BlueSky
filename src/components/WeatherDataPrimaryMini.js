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
import { Grid, Typography } from '@material-ui/core';
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
            minmax = <Typography variant = "h2">{current}°C</Typography>
                        
        }
        else
        {
            minmax =<div>
                        <Typography variant = "h3">Max: {max}°C</Typography>
                        <Typography variant = "h3">Min: {min}°C</Typography>
                    </div>
        }
        return (
            <Grid container item xs = {12}>
                <Grid item xs = {12} md = {5} container>
                    <Grid xs = {6} style = {{alignSelf: "center"}}><img src = {imgSrc} height = "80px"/></Grid>
                    <Grid xs = {6} style = {{alignSelf: "center"}}>{minmax}</Grid>
                    
                </Grid>
                <Grid item xs = {12} md = {7} container>
                    <Grid item xs = {4}><SecondaryWeatherMini img = {windImg} data = {`${wind.speed}MPH from ${wind.deg}`} type = "Wind"/></Grid>
                    <Grid item xs = {4}><SecondaryWeatherMini img = {humidityImg} data = {`${humidity}%`} type = "Humidity"/></Grid>
                    <Grid item xs = {4}><SecondaryWeatherMini img = {uvImg} data = {uvi} type = "UV Index"/></Grid>
                </Grid>    
            </Grid>
        )
        // <Grid container item xs = {12} spacing = {1}>
            //     <Grid item xs = {12} md = {5} container>
            //         <Grid xs = {6}><img className = "weatherCond" src={imgSrc} id = "weather-img" width = "125px"/></Grid>
            //         <Grid xs = {6} style = {{"placeSelf" : "center"}}><Typography variant = "h2">{Math.round(this.props.current)}°C</Typography></Grid>
            //     </Grid>
            //     <Grid item md = {7} container>
            //         <Box className = "secondaryweather" id = "weather-img">
            //             {secondaryWeather.map(({img,data,type}) => {
            //                 return <Grid item xs = {4}><SecondaryWeather img = {img} data = {data} type = {type}/></Grid>
            //             })}
            //         </Box>
            //     </Grid>
            // </Grid>
    }
}

export default WeatherDataPrimaryMini
