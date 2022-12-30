import React from "react";
import "./DetailDay.scss";

import DetailFooter from "./DetailFooter";
import DetailHeader from "./DetailHeader";

function DetailDay({ weather, onClick }) {
  return (
    <div className="detail-day">
      <DetailHeader weather={weather} />
      <DetailFooter weather={weather} />

      <button className="back-btn" onClick={onClick}>
        <i className="bx bx-left-arrow-alt"></i>
      </button>
    </div>
  );
}

export default DetailDay;
