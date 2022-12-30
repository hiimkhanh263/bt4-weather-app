import React from "react";
import "./ItemToday.scss";

function ItemToday({ weather, onClick }) {
  return (
    <button className="wrapper" onClick={onClick}>
      <div className="today active">
        <p className="row-date">Today</p>
        <img src={weather?.forecast.forecastday[0].day.condition.icon} alt="" />
        <p>Humidity</p>
        <p className="row-num">
          {weather?.forecast.forecastday[0].day.avghumidity}%
        </p>
      </div>
    </button>
  );
}

export default ItemToday;
