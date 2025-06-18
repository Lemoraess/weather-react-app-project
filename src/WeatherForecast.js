import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }

  const apiKey = "5btac2eb2ed52b236021789ofe9a3348";
  let api_url = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
  axios.get(api_url).then(getForecast);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19º</span>
            <span className="WeatherForecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
