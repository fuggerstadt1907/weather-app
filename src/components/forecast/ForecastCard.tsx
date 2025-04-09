"use client";

import { useGetForecastData, useWeather } from "@/hooks";
import { useMemo, useState } from "react";
import ForecastItem from "./ForecastItem";
import AnimatedChartSection from "./AnimatedChartSection";

export default function ForecastCard() {
  const { city } = useWeather();
  const { data, isLoading, isError, error } = useGetForecastData(city);

  const [showDetailsForDay, setShowDetailsForDay] = useState<string | null>(
    null
  );
  const [chartData, setChartData] = useState<{
    date: string;
    temps: any[];
  } | null>(null);

  const grouped = useMemo(() => {
    return data?.list.reduce((acc: Record<string, typeof data.list>, entry) => {
      const date = entry.dt_txt.split(" ")[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(entry);
      return acc;
    }, {});
  }, [data]);

  const days = grouped && Object.entries(grouped).slice(1, 6);

  const handleToggleDetails = (date: string, temps: any[]) => {
    console.log("handleToggleDetails", { date, temps });
    if (showDetailsForDay === date) {
      setShowDetailsForDay(null);
      setChartData(null);
    } else {
      setShowDetailsForDay(date);
      setChartData({ date, temps });
    }
  };

  if (!city) return null;
  if (isLoading) return <p className="text-center mt-6">Lade Vorhersage...</p>;
  if (isError)
    return (
      <p className="text-center mt-6 text-red-500">
        {(error as Error).message}
      </p>
    );
  if (!data) return null;

  return (
    <div className="w-full">
      <div className="flex-col w-full bg-blue-300/40 dark:bg-gray-800/40 rounded-xl shadow-md px-4 py-3 flex items-center justify-between text-gray-700 dark:text-white">
        <div className="flex items-center justify-between flex-row w-full">
          {days?.map(([date, entries]) => {
            const minTemp = Math.min(
              ...entries.map((e) => e.main.temp_min)
            ).toFixed(0);
            const maxTemp = Math.max(
              ...entries.map((e) => e.main.temp_max)
            ).toFixed(0);

            const temps = entries.map((e) => ({
              time: e.dt_txt.split(" ")[1].slice(0, 5),
              temp: Number(e.main.temp.toFixed(1)),
            }));

            const icon = entries[0].weather[0].icon;
            const description = entries[0].weather[0].description;

            return (
              <ForecastItem
                key={date}
                date={date}
                iconUrl={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                description={description}
                minTemp={minTemp}
                maxTemp={maxTemp}
                areDetailsShown={showDetailsForDay === date}
                onClickDetails={() => handleToggleDetails(date, temps)}
              />
            );
          })}
        </div>

        <AnimatedChartSection
          date={showDetailsForDay ?? ""}
          chartData={chartData}
        />
      </div>
    </div>
  );
}
