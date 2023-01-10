import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature clearfix">
      {/* <img src={props.imagesrc} alt={props.imagealt} className="float-left" /> */}
      <div className="d-flex float-left">
        <WeatherIcon code={props.imagesrc} size={52} />
      </div>

      <div className="float-left">
        <span className="temperature">{props.temp}</span>
        <span className="units"> °C </span>
      </div>
    </div>
  );
}
