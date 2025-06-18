import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature["current"],
      description: response.data.condition["description"],
      humidity: response.data.temperature["humidity"],
      wind: response.data.wind["speed"],
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      iconToday: response.data.condition.icon_url,
      feelsLike: response.data.temperature["feels_like"],
    });
  }

  function search() {
    const apiKey = "5btac2eb2ed52b236021789ofe9a3348";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(getResponse);
  }

  function searchCity(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={searchCity}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={getCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 buttonSearch"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
