import { useContext, useEffect, useState } from "react";
import { LocationConext } from "../contexts";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    latitude: "",
    longitude: "",
    dateTime: "",
    temperature: "",
    cloud: "",
    wind: "",
    uv: "",
    humidity: "",
    feelsLike: "",
    dewPoint: "",
    description: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    msg: "",
  });

  const { selectedLocation } = useContext(LocationConext);

  const getWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=ac59e60b46c1eda18356aa1c9ae87cbd`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = response.json();
      setWeatherData({
        ...weatherData,
        location: data?.timezone,
        latitude: latitude,
        longitude: longitude,
        dateTime: data?.current?.dt,
        temperature: data?.current?.temp,
        cloud: data?.current?.clouds,
        wind: data?.current?.wind_speed,
        uv: data?.current?.uvi,
        humidity: data?.current?.humidity,
        feelsLike: data?.current?.feels_like,
        dewPoint: data?.current?.dew_point,
        description: data?.current?.weather[0]?.description,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ ...loading, state: false, msg: "" });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      getWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        getWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    error,
    loading,
  };
}
