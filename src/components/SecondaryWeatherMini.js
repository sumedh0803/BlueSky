import React, { Component } from 'react'

class SecondaryWeatherMini extends Component {
    render() {
        // console.log(this.props.data)
        if (this.props.data)
        {
            return (
                <div style={{"border":"0px solid black","textAlign":"center"}}>
                    <div className = "secWeatherType">{this.props.type}</div>
                    <div><img src={this.props.img} width = "35px"/></div>
                    <div className = "secWeatherData">{this.props.data}</div>
                </div>
            )
        }
        else return null
        
    }
}

export default SecondaryWeatherMini
