import React from "react";
import FormattedDate from "./FormattedDate";

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
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
            className="iconToday"
          />{" "}
          <span className="temperatureToday">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unitToday">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Huminity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
