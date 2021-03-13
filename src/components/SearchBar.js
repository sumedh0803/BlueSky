import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.cityRef = React.createRef()
        this.state = {
             city:"",
        }
        
    }
    changeHandler(e)
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }    
    componentDidUpdate(prevProps){
        if (this.props.city_display !== prevProps.city_display) {
            this.setState({city: this.props.city_display})
        }        
    }
    submitHandler(e) {
        e.preventDefault()
        this.cityRef.current.blur()
        this.props.submitHandler(this.state.city)
    }
    focusHandler()
    {
        this.cityRef.current.select();
    }
    
    render() {
        return (
            <form className="form-group" onSubmit={(e)=>this.submitHandler(e)}>
                    <label className = "comfortaa" for="city" style = {{"fontSize":"24px"}}>Search for your city</label>
                    <input type="text"className=" form-control comfortaa search-box" id="city" name = "city" value = {this.state.city } onChange = {(e) => this.changeHandler(e)} ref = {this.cityRef} onFocus = {()=>this.focusHandler()} placeholder = "Eg. Dallas"/>
            </form>
        )
    }
}

export default SearchBar
