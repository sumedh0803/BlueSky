import React, { Component } from 'react'

class SecondaryWeather extends Component {
    render() {
        return (
            <div style={{"border":"0px solid black","textAlign":"center"}}>
                <div className = "secWeatherType">{this.props.type}</div>
                <div><img src={this.props.img} width = "50px"/></div>
                <div className = "secWeatherData">{this.props.data}</div>
            </div>
        )
    }
}

export default SecondaryWeather
