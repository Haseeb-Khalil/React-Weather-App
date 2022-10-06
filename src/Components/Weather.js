import React from "react";
import axios from "axios";

import Search from "./Search";
import Location from "./Location";
import Temperature from "./Temperature";
import Icon from "./Icon";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Rain from "./Rain";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";

function Weather({ data, setData, location, setLocation }) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=78936007682e4b1e9c1112312223105&q=${location}&days=3&aqi=no&alerts=no
`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <Search
          searchLocation={searchLocation}
          location={location}
          setLocation={setLocation}
        />
      </div>

      {data.location ? (
        <>
          <div className="container">
            <div className="top">
              <div className="top__left">
                <Location
                  location={data.location.name}
                  country={data.location.country}
                />
                <Temperature temperature={data.current.temp_c} />
              </div>
              <div className="top__right">
                <Icon
                  icon={data.current.condition.icon}
                  condition={data.current.condition.text}
                />
              </div>
            </div>
            {/* Bottom */}
            <div className="bottom">
              <FeelsLike feels={data.current.feelslike_c} />
              <Humidity humidity={data.current.humidity} />
              <Wind wind={data.current.wind_mph} />
              <Sunrise sunrise={data.forecast.forecastday[0].astro.sunrise} />
              <Sunset sunset={data.forecast.forecastday[0].astro.sunset} />
              <Rain
                rain={data.forecast.forecastday[0].hour[0].chance_of_rain}
              />
            </div>
            <div className="forCast">
              <DayOne
                icon={data.forecast.forecastday[1].day.condition.icon}
                date={data.forecast.forecastday[1].date}
                maxTemp={data.forecast.forecastday[1].day.maxtemp_c}
                condition={data.forecast.forecastday[1].day.condition.text}
                sunrise={data.forecast.forecastday[1].astro.sunrise}
                sunset={data.forecast.forecastday[1].astro.sunset}
              />
              <DayTwo
                icon={data.forecast.forecastday[2].day.condition.icon}
                date={data.forecast.forecastday[2].date}
                maxTemp={data.forecast.forecastday[2].day.maxtemp_c}
                condition={data.forecast.forecastday[2].day.condition.text}
                sunrise={data.forecast.forecastday[2].astro.sunrise}
                sunset={data.forecast.forecastday[2].astro.sunset}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="bottom">
          <h2>Please enter your location to get weather information</h2>
        </div>
      )}
    </div>
  );
}

export default Weather;
