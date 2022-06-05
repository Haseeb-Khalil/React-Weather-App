import React from "react";

function Wind({ wind }) {
  return (
    <div className="wind">
      <p className="bold">
        {wind}
        <small className="small">MPH</small>
      </p>

      <p>Wind Speed</p>
    </div>
  );
}

export default Wind;
