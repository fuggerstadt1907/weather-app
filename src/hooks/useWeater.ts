import { WeatherContext } from "@/context";
import { useContext } from "react";

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeather must be used inside WeatherProvider");
  return context;
};
