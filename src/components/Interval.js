import React, { Component } from 'react'
import SplitInterval from './SplitInterval'
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';


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
            interval: e.currentTarget.name
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
                    <Grid item container xs = {12} justify = "space-around" >
                        <Button name = "day" className="btn" variant="contained" color="secondary" onClick = {(e)=>this.clickHandler(e)}>Daily</Button>
                        <Button name = "hour" className="btn" variant="contained" color="default" onClick = {(e)=>this.clickHandler(e)}>Hourly</Button>
                    </Grid>  
                    <Grid item xs = {12} container spacing = {2}>
                    {daily.map((day) =>
                            <SplitInterval data = {day} type = "day"/>
                    )}
                    </Grid>
                </React.Fragment>
                )
            case "hour":
                let i = 0;
                return (
                <React.Fragment>
                    <Grid container xs = {12} justify = "space-around">
                        <Button name = "day" variant="contained" color="default" onClick = {(e)=>this.clickHandler(e)}>Daily</Button>
                        <Button name = "hour" variant="contained" color="secondary" onClick = {(e)=>this.clickHandler(e)}>Hourly</Button>
                    </Grid>
                    <Grid item xs = {12} container spacing = {2}>
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
                     </Grid>
                </React.Fragment>
            )
        }
        
        
    }
}

export default Interval
