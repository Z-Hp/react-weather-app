import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  // Define Functions //////////////////////////////////
  function convertToFahrenheit() {
    return Math.round((props.temp * 9) / 5 + 32);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  /////////////////////////////////////
  // Conditional Rendering
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature clearfix">
        <div className="float-left">
          <span className="temperature">{props.temp}</span>
          <span className="units">
            {" "}
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature clearfix">
        <div className="float-left">
          <span className="temperature">{convertToFahrenheit()}</span>
          <span className="units">
            {" "}
            °F |{" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  }
}
