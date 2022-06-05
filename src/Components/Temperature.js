import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

function Temperature({ temperature, date }) {
  return (
    <div className="temp">
      <h1>
        {temperature}
        <TbTemperatureCelsius />
      </h1>
    </div>
  );
}

export default Temperature;
