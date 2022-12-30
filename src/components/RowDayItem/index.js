import React from "react";
import "./RowDayItem.scss";

import ItemLastDay from "./ItemLastDay";
import ItemToday from "./ItemToday";
import ItemTomorrow from "./ItemTomorrow";

function RowDayItem({ weather, onClick }) {
  return (
    <div className="row-temp">
      <ItemToday weather={weather} onClick={onClick} />
      <ItemTomorrow weather={weather} onClick={onClick} />
      <ItemLastDay weather={weather} onClick={onClick} />
    </div>
  );
}

export default RowDayItem;
