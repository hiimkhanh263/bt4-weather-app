import React from "react";
import "./ItemLastDay.scss";
import moment from "moment";

function ItemLastDay({ weather, onClick }) {
  return (
    <button className="wrapper" onClick={onClick}>
      <div className="last-day">
        <p className="row-date">
          {moment(weather?.forecast.forecastday[2].date).format("DD/MM")}
        </p>
        <img src={weather?.forecast.forecastday[2].day.condition.icon} alt="" />
        <p>Humidity</p>
        <p className="row-num">
          {weather?.forecast.forecastday[2].day.avghumidity}%
        </p>
      </div>
    </button>
  );
}

export default ItemLastDay;
