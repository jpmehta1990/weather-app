import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const tempsInKelvin = cityData.list.map( (weather) => weather.main.temp );
        const temps = tempsInKelvin.map( (temp) => temp - 273 );
        const pressures = cityData.list.map( (weather) => weather.main.pressure );
        const humidities = cityData.list.map( (weather) => weather.main.humidity );
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={ name }>
                <td><Map lon={ lon } lat={ lat } /></td>
                <td><Chart data={ temps } color="orange" units="C" /></td>
                <td><Chart data={ pressures } color="blue" units="hPa" /></td>
                <td><Chart data={ humidities } color="black" units="%" /></td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);