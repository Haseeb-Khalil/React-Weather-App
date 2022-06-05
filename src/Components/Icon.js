import React from "react";

function Icon({ icon, condition }) {
  return (
    <div className="description">
      <img className="icon" src={icon} alt={condition} />

      <p>{condition}</p>
    </div>
  );
}

export default Icon;
