import React, { Component } from 'react'
import WeatherDataPrimaryMini from './WeatherDataPrimaryMini'

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
                <div className = "split">
                    <div className = "date">{dt}</div>
                    <WeatherDataPrimaryMini weather = {weather} wind = {wind} humidity = {humidity} uvi = {uvi} max = {Math.round(max)} min = {Math.round(min)}/>
                </div>
            )
        }
        else
        {
            const time = new Date(dtUtc * 1000)
            const tm = ` ${time.toLocaleTimeString()}  ${time.toLocaleDateString()}`
            return (
                <div className = "split">
                    <div className = "time" style={{"display":"block"}}>{tm}</div>
                    <WeatherDataPrimaryMini weather = {weather} wind = {wind} humidity = {humidity} current = {Math.round(current)}/>
                    
                </div>
            )
        }
        
    }
}

export default SplitInterval
