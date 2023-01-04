import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "./Loader";

//https://api.openweathermap.org/data/2.5/
// weather? BASE
// q=Madrid QUERY
// &units=metric //DEFAULT
// &appid=8ccfaf3adf6e588a66d20308929b1a36 ->API KEY

const Weather = () => {
  const [query, setQuery] = useState("Spain");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async (e) => {
    if (e.key === "Enter" && query !== "") {
      axios
        .get(
          process.env.REACT_APP_WEATHER_URL +
            `weather?q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
        )
        .then((resp) => {
          console.log(resp);
          setIsLoading(true);
          setData(resp.data);
        })
        .catch((err) => {
          alert("Error");
          console.log(err);
        });
    }
  };

  const dateBuilder = () => {
    const date = new Date();
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dayWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${dayWeek} ${day} ${month} ${year}`;
  };

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_WEATHER_URL +
          `weather?q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((resp) => {
        setIsLoading(true);
        setData(resp.data);
      })
      .catch((err) => {
        alert("Not Found");
        console.log(err);
      });
  }, []);

  return (
    <div
      className={
        typeof data.main != "undefined"
          ? data.main.temp > 16
            ? "container warm"
            : "container cold"
          : "container"
      }
    >
      <div className="search">
        <input
          type="text"
          placeholder="Place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={getWeather}
        />
      </div>
      {isLoading ? (
        <>
          <div className="info">
            <p className="info_city">{data.name}</p>
            <p className="info_timestamp">{dateBuilder()}</p>
          </div>
          <div className="temperature">{Math.round(data.main.temp)}ºc</div>
          <div className="weather">{data.weather[0].main}</div>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Weather;
