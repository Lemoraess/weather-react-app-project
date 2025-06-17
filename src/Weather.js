import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature["current"],
      description: response.data.condition["description"],
      huminity: response.data.temperature["humidity"],
      wind: response.data.wind["speed"],
      date: new Date(response.data.time * 1000),
      /*icon: response.data.condition[
        `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
      ],*/
    });
  }

  function searchCity(event) {
    event.preventDefault();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <form>
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
        </header>
        <h1>{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="iconToday"
            />{" "}
            <span className="temperatureToday">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unitToday">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Huminity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5btac2eb2ed52b236021789ofe9a3348";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(getResponse);
  }
  return "Loading...";
}
