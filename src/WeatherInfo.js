import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import FeelsLike from "./FeelsLike";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="temperatureBox">
            <div className="float-left">
              <img
                src={props.data.iconToday}
                alt={props.data.description}
                className="iconToday"
              />
            </div>
            <div>
              {" "}
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-end">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
            <li>
              Feels like:
              <FeelsLike celsius={props.data.feelsLike} /> ºC
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
