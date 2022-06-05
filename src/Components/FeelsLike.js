import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

function FeelsLike({ feels }) {
  return (
    <div className="feels">
      <p className="bold">
        {feels}
        <TbTemperatureCelsius />
      </p>

      <p>Feels Like</p>
    </div>
  );
}

export default FeelsLike;
