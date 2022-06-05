import React, { useState } from "react";
import Weather from "../src/Components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  return (
    <>
      <Weather
        data={data}
        setData={setData}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
}

export default App;
