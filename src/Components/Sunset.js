import React from "react";

function Sunset({ sunset }) {
  return (
    <div className="sunset">
      <p className="bold">{sunset}</p>

      <p>Sunset</p>
    </div>
  );
}

export default Sunset;
