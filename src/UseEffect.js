// import React, { useState, useEffect } from "react";
// // import axios from "axios";
// import { TbTemperatureCelsius } from "react-icons/tb";

// function App() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("London");

//   useEffect(() => {
//     let url = `https://api.weatherapi.com/v1/current.json?key=78936007682e4b1e9c1112312223105&q=${location}&aqi=no`;
//     console.log(location);
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, [location]);

//   return (
//     <div className="app">
//       <div className="search">
//         <input
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           // onKeyPress={searchLocation}
//           placeholder="Enter Location"
//           type="text"
//         />
//       </div>

//       {data.location ? (
//         <div className="container">
//           <div className="top">
//             <div className="top__left">
//               <div className="location">
//                 <h3>{data.location.name}</h3>
//               </div>
//               <div className="temp">
//                 <h1>
//                   {data.current.temp_c}
//                   <TbTemperatureCelsius />
//                 </h1>
//               </div>
//             </div>
//             <div className="top__right">
//               <div className="description">
//                 <img
//                   className="icon"
//                   src={data.current.condition.icon}
//                   alt={data.current.condition.text}
//                 />

//                 <p>{data.current.condition.text}</p>
//               </div>
//             </div>
//           </div>
//           {/* Bottom */}
//           <div className="bottom">
//             <div className="feels">
//               <p className="bold">
//                 {data.current.feelslike_c}
//                 <TbTemperatureCelsius />
//               </p>

//               <p>Feels Like</p>
//             </div>
//             <div className="humidity">
//               <p className="bold">
//                 {data.current.humidity}
//                 <small className="small">%</small>
//               </p>

//               <p>Humidity</p>
//             </div>
//             <div className="wind">
//               <p className="bold">
//                 {data.current.wind_mph}
//                 <small className="small">MPH</small>
//               </p>

//               <p>Wind Speed</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="bottom">
//           <h2>Please enter your location to get weather information</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
