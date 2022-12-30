import React from "react";
import "./ItemTomorrow.scss";
import moment from "moment";

function ItemTomorrow({ weather, onClick }) {
  return (
    <button className="wrapper" onClick={onClick}>
      <div className="tomorrow">
        <p className="row-date">
          {moment(weather?.forecast.forecastday[1].date).format("DD/MM")}
        </p>
        <img src={weather?.forecast.forecastday[1].day.condition.icon} alt="" />
        <p>Humidity</p>
        <p className="row-num">
          {weather?.forecast.forecastday[1].day.avghumidity}%
        </p>
      </div>
    </button>
  );
}

export default ItemTomorrow;
