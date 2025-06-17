import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahreinheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahreinheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperatureToday">{Math.round(props.celsius)}</span>
        <span className="unitToday">
          ºC |{" "}
          <a href="/" onClick={showFahreinheit}>
            {" "}
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperatureToday">{Math.round(fahreinheit())}</span>
        <span className="unitToday">
          <a href="/" onClick={showCelsius}>
            {" "}
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
