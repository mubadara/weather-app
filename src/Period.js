import React, { Component } from 'react';
import "./Period.scss";

class Period extends Component {
    state = {  }

    render() { 
        let period = this.props.period;
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;
        return ( 
        <div className="period card">
          {period.dt_txt} 
          <span><img src={iconURL} className="period__img" alt=""/></span>
           {period.main.temp}°
        </div>
        );
    }
}
 
export default Period;