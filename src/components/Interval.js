import React, { Component } from 'react'
import SplitInterval from './SplitInterval'

class Interval extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             interval:"day"
        }
    }
    clickHandler(e)
    {
        this.setState({
            interval: e.target.name
        })
    }
    render() {
        const {daily,hourly} = this.props
        const btnNoSelect = {"border": "1px solid #007bff",
                            "color" : "#007bff",
                            "font-weight":"bolder"}
        switch(this.state.interval)
        {
            case "day":return (
                <React.Fragment>
                    <div style = {{"display":" flex","justifyContent": "space-around","marginTop": "2%"}}>
                        <button name = "day" type="button" className="btn btn-primary" onClick = {(e)=>this.clickHandler(e)}>Daily</button>
                        <button name = "hour" type="button" className="btn" style = {btnNoSelect} onClick = {(e)=>this.clickHandler(e)}>Hourly</button>
                    </div>
                    <div>
                        {
                            daily.map((day) =>
                                <SplitInterval data = {day} type = "day"/>
                            )
                        }
                    </div>
                    </React.Fragment>
                )
            case "hour":
                let i = 0;
                return (
                <React.Fragment>
                    <div style = {{"display":" flex","justifyContent": "space-around","marginTop": "2%"}}>
                        <button name = "day" type="button" class="btn" style = {btnNoSelect} onClick = {(e)=>this.clickHandler(e)}>Daily</button>
                        <button name = "hour" type="button" class="btn btn-primary" onClick = {(e)=>this.clickHandler(e)}>Hourly</button>
                    </div>
                    <div>
                        {
                            hourly.filter(hour =>{
                                if(i < 24 && i%2 != 0 && hour.dt >= parseInt(Date.now()/1000))
                                {
                                    i++
                                    return true
                                }   
                                else
                                {
                                    i++
                                    return false
                                } 
                            }).map((hour) =>
                                <SplitInterval data = {hour} type = "hour"/>
                            )
                        }
                    </div>
                </React.Fragment>
            )
        }
        
        
    }
}

export default Interval
