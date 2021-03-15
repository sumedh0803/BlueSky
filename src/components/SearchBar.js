import React, { Component } from 'react'
import { Grid, TextField } from '@material-ui/core';

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
        var input = Object.values(e.currentTarget.elements).filter(el => {
                        return el.tagName === "INPUT"
                    })
        input[0].blur()
        this.props.submitHandler(this.state.city)
    }
    focusHandler(e)
    {
        e.currentTarget.select()
    }
    
    render() {
        return (
            <Grid item xs = {12}>
                <form className="form-group" onSubmit={(e)=>this.submitHandler(e)}>
                    <TextField id="standard-basic" autoComplete="false" color = "secondary" variant="outlined" label="Search for your city" name = "city" fullWidth value = {this.state.city } onChange = {e =>this.changeHandler(e)} onFocus = {(e)=>this.focusHandler(e)} />
                </form>
            </Grid>
        )
    }
}

export default SearchBar
