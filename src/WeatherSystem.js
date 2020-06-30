import React, { Component } from 'react';
import axios from 'axios';
import './WeatherSystem.css';

import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [] 
     }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Lens&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list
            })
        })
    }

    render() { 
        let periodsList = this.state.periods.slice(0, 5).map(period => {
            return <Period period={period} />
        })

        return ( 
            <div className="weather">
                {periodsList}
            </div>
         );
    }
}
 
export default WeatherSystem;