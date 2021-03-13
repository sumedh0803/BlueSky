import React, {Component} from 'react'
import CityList from './CityList'
import MainContent from './MainContent'
import axios from 'axios'
import SearchBar from './SearchBar'
import Loader from "react-loader-spinner";



class Main extends Component {

    constructor(props) {
        super(props)
        this.cityRef = React.createRef()
        this.state = {
             weather:"",
             city: "",
             city_display: "",
             lat :"",
             long:"",
             current: 0,
             uvi:0,
             windDeg:"",
             windSpd: 0,
             hourly: [],
             minutely: [],
             daily:[],
             pageStatus: "init"
        }    
        this.submitHandler = this.submitHandler.bind(this)
    }
    changeHandler(e)
    {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    
    submitHandler(city) {
        
        const openweather = process.env.REACT_APP_OPENWEATHER
        const geocode = process.env.REACT_APP_GEOCODING
        this.setState({
            pageStatus: "fetching"
        },() =>{
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${geocode}`)
            .then(response =>{
                const lat = response.data.results[0].geometry.location.lat
                const lng =response.data.results[0].geometry.location.lng
                this.setState({
                    lat : lat,
                    long: lng,
                    city: response.data.results[0].formatted_address,
                    city_display:response.data.results[0].formatted_address
                })
            })
            .then(()=>{
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&units=metric&appid=${openweather}`)
                .then(response => {
                    const weather = response.data.current.weather[0].main
                    const current = response.data.current.temp
                    const daily = response.data.daily
                    const hourly = response.data.hourly
                    const uvi = response.data.current.uvi
                    const humidity = response.data.current.humidity
                    const windDeg = response.data.current.wind_deg
                    const windSpd = response.data.current.wind_speed
                    this.setState({
                        weather: weather,
                        current: current,
                        daily: daily,
                        hourly: hourly,
                        uvi: uvi,
                        humidity: humidity,
                        windDeg: windDeg,
                        windSpd: windSpd,
                        pageStatus: "ready"
                    })
                })
            })
        })
        
    }

    loadDynamic(status)
    {
        switch(status) 
        {
            case "init": return <div className = "error-no-city"><h1>Type a location to check weather</h1></div>
            case "fetching": return <div className = "error-no-city"><Loader type="Puff" color="#2F4AA7" height={80} width={80} /></div>
            case "ready": return <MainContent data = {this.state}/> 
        }

    }

    render() {
        
        return (
            <div className = "custom_card container-lg ">   
                <SearchBar submitHandler = {this.submitHandler} city_display = {this.state.city_display}/>
                {this.loadDynamic(this.state.pageStatus)}    
            </div>
        )
            
    }     
}

export default Main
{/* <form className="form-group" onSubmit={(e)=>this.submitHandler(e)}>
        <label className = "comfortaa" for="city" style = {{"fontSize":"24px"}}>Search for your city</label>
        <input type="text"className=" form-control comfortaa searchBox" id="city" name = "city" value = {this.state.city} onChange={(e)=>{this.changeHandler(e)}} ref = {this.cityRef} placeholder = "Eg. Dallas"/>
    </form> */}