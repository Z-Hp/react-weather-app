import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Details from "./Details";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <h1>{props.data.cityName}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature
            imagesrc={props.data.icon}
            imagealt={props.data.description}
            temp={props.data.temperature}
          />
        </div>
        <div className="col-6">
          <Details humidity={props.data.humidity} wind={props.data.wind} />
        </div>
      </div>
    </div>
  );
}
