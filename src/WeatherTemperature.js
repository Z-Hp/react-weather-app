import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature clearfix">
      <img src={props.imagesrc} alt={props.imagealt} className="float-left" />
      <div className="float-left">
        <span className="temperature">{props.temp}</span>
        <span className="units"> °C </span>
      </div>
    </div>
  );
}
