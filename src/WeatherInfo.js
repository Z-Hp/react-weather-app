import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
          {/* <img src={props.data.icon} alt={props.data.description} className="float-left" /> */}
          <div className="d-flex float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature temp={props.data.temperature} />
        </div>
        <div className="col-6">
          <Details humidity={props.data.humidity} wind={props.data.wind} />
        </div>
      </div>
    </div>
  );
}
