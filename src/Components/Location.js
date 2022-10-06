import React from "react";

function Location({ location, country }) {
  return (
    <div className="location">
      <h3>
        {location}, {country}
      </h3>
    </div>
  );
}

export default Location;
