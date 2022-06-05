import React from "react";

function Humidity({ humidity }) {
  return (
    <div className="humidity">
      <p className="bold">
        {humidity}
        <small className="small">%</small>
      </p>

      <p>Humidity</p>
    </div>
  );
}

export default Humidity;
