import React from "react";

function Rain({ rain }) {
  return (
    <div className="chanceOfRain">
      <p className="bold">
        {rain}
        <small>%</small>
      </p>

      <p>Chance of rain</p>
    </div>
  );
}

export default Rain;
