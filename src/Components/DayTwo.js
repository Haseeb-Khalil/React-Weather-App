import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

function DayTwo({ date, sunrise, sunset, condition, maxTemp }) {
  return (
    <div className="day__two">
      <h3>{date}</h3>
      <p>
        Max-Temp:{" "}
        <small>
          {maxTemp}
          <TbTemperatureCelsius />
        </small>
      </p>
      <p>
        Condition: <small>{condition}</small>
      </p>
      <p>
        Sunrise: <small>{sunrise}</small>
      </p>
      <p>
        Sunset: <small>{sunset}</small>
      </p>
    </div>
  );
}

export default DayTwo;
