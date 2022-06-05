import React from "react";

function Search({ location, setLocation, searchLocation }) {
  return (
    <>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </>
  );
}

export default Search;
