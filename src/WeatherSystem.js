import React, { Component } from 'react';
import axios from 'axios';
import './WeatherSystem.scss';

import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: '',
     }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Lens&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list.filter(period => period.dt_txt.includes('12')),
                city: res.data.city.name
            })
        })
    }

    handleChange= (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`)
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list.filter(period => period.dt_txt.includes('12')),
                city: res.data.city.name
            })
        })
    }

    render() { 
        let periodsList = this.state.periods.slice(0, 5).map(period => {
            return <Period period={period} />
        })

        return ( 
            <div className="weather">
                <form onSubmit={this.handleSubmit} className="form">
                <input onChange={this.handleChange} type="text" name="city" value={this.state.city} className="input is-rounded"/>
                </form>
                <div>
                    <h2 className="title is-2">{this.state.city}</h2>
                {periodsList}
                </div>
            </div>
         );
    }
}
 
export default WeatherSystem;