import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../utils/Api";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    try {
      const fetch = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(fetch.data);
      setError("");
    } catch {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return {
    city,
    setCity,
    weather,
    error,
    fetchWeather,
  };
};

export default useWeather;
