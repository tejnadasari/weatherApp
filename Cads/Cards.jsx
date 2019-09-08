import React, { Component } from 'react'
import './card-style.css';

import Titles from '../titles';
import Form from '../form';
import Weather from '../weather';

import Card from './CardUI';
import rain from '../assets/rain.svg';
import snow from '../assets/snowflake.svg';
import storm from '../assets/storm.svg';
import cloudy from '../assets/sun.png';
import sun from '../assets/sun.svg';


class Cards extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined

    }

    handleForm(e) {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        this.getWeather(city, country);
    }


    async getWeather(city, country) {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=c88dfa6855c4eb97804b44dc8a4757cf`);
        const response = await api_call.json();
        console.log(response);
        console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c88dfa6855c4eb97804b44dc8a4757cf`);
        if (city && country) {
            var editedResponses = [response.list[0], response.list[7], response.list[15], response.list[23], response.list[31], response.list[39]];
            console.log(editedResponses);
            this.setState({ weeklyWeather: [response.list[0], response.list[7], response.list[15], response.list[23], response.list[31], response.list[39]], response: response })
        } else {
            this.setState({
                error: "Please enter values..."
            })
        }

    }

    imageRender(temp){
        if(temp < 30){
            return snow;
        } else if(temp > 30 && temp < 50) {
            return storm;
        } else if(temp > 50 && temp < 70) {
            return rain;
        } else if(temp > 70 && temp < 80){
            return cloudy;
        } else {
            return sun;
        }
    }



    render() {
        return (
            <div>
                <div>
                    <Titles />
                    <Form
                        handleForm={(e) => this.handleForm(e)}
                    />


                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {this.state.weeklyWeather && this.state.weeklyWeather.map(data => {
                            return (
                                <div>
                                    <Card className = "col-md-3 container" imgsrc = {this.imageRender(Math.round (((data.main.temp - 273.15) * 1.8) + 32))} title = {data.weather[0].description} description = {<p> Temperature: {Math.round (((data.main.temp - 273.15) * 1.8) + 32)} Humidity: {data.main.humidity}</p>}>
                                        <Weather temperature={data.main.temp} city={this.state.response.city.name} country={this.state.response.city.country} humidity={data.main.humidity} description={data.weather[0].description} />
                                    </Card>
                                </div>
                                
                            );
                        })}
                    </div>
                </div>
            </div>


        );
    }
}

export default Cards;