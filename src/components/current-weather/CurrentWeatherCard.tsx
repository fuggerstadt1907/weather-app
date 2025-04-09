"use client";

import { useGetWeatherData, useWeather } from "@/hooks";
import CurrentWeatherTitle from "./CurrentWeatherTitle";
import CurrentWeatherMainData from "./CurrentWeatherMainData";
import CurrentWeatherMetaData from "./CurrentWeatherMetaData";

const CurrentWeatherCard: React.FC = () => {
  const { city } = useWeather();
  const { data: weather, isLoading, isError, error } = useGetWeatherData(city);

  if (!city) return null;
  if (isLoading) return <p className="text-center mt-6">Lade Wetterdaten...</p>;
  if (isError)
    return (
      <p className="text-center mt-6 text-red-500">
        {(error as Error).message}
      </p>
    );
  if (!weather) return null;

  return (
    <div className="bg-blue-300/40 dark:bg-gray-800/40 rounded-2xl shadow-md p-6 text-gray-700  dark:text-white">
      <CurrentWeatherTitle />

      <div className="flex  flex-row justify-between items-center gap-6">
        <CurrentWeatherMainData weather={weather} />
        <CurrentWeatherMetaData weather={weather} />
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
