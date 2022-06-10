import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

function DayTwo({ date, sunrise, sunset, condition, maxTemp, icon }) {
  return (
    <div className="day__two">
      <div className="left">
        <h3 className="date">{date}</h3>
        <p>
          Max-Temp:{" "}
          <small>
            {maxTemp}
            <TbTemperatureCelsius />
          </small>
        </p>
        <p>
          Sunrise: <small>{sunrise}</small>
        </p>
        <p>
          Sunset: <small>{sunset}</small>
        </p>
      </div>
      <div className="right">
        <img className="forcast__icon" src={icon} alt={condition} />
        <p>
          <small>{condition}</small>
        </p>
      </div>
    </div>
  );
}

export default DayTwo;
