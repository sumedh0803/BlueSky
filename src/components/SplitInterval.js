import React, { Component } from 'react'
import WeatherDataPrimaryMini from './WeatherDataPrimaryMini'
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';

class SplitInterval extends Component {
    render() {
        const data = this.props.data
        const dtUtc = data.dt
        const min = data.temp.min
        const max = data.temp.max
        const current = data.temp
        const humidity = data.humidity
        const windSpd = data.wind_speed
        const windDeg = data.wind_deg
        const weather = data.weather[0].main
        const uvi = data.uvi

        
        const dir = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
        let wind = {speed : windSpd,
            deg :   dir[Math.round((parseInt(windDeg) % 360)/22.5)+1]}
        
        if(this.props.type == "day")
        {
            const date = new Date(dtUtc * 1000);
            const dt = date.toDateString()
            return (
                    <Grid item xs = {12} container>
                        <Paper style = {{width: "100%", padding: "10px"}}>
                        <Grid xs = {12}  item className = "date">{dt}</Grid>
                        <WeatherDataPrimaryMini weather = {weather} wind = {wind} humidity = {humidity} uvi = {uvi} max = {Math.round(max)} min = {Math.round(min)}/>
                        </Paper>
                    </Grid>
   
            )

            
        }
        else
        {
            const time = new Date(dtUtc * 1000)
            const tm = ` ${time.toLocaleTimeString()}  ${time.toLocaleDateString()}`
            return (
                <Grid item xs = {12} container>
                    <Paper style = {{width: "100%", padding: "10px"}}>
                        <Grid xs = {12}  item className = "date">{tm}</Grid>
                        <WeatherDataPrimaryMini weather = {weather} wind = {wind} humidity = {humidity} current = {Math.round(current)}/>
                    </Paper>
                </Grid>
            )
        }
        
    }
}

export default SplitInterval
