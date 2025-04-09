"use client";

import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SEARCHED_CITIES_HISTORY_KEY } from "@/config";

interface Props {
  onSelect: (city: string) => void;
}

const RecentCities: React.FC<Props> = ({ onSelect }) => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem(SEARCHED_CITIES_HISTORY_KEY) || "[]"
    );
    setCities(stored);
  }, []);

  const removeCity = (city: string) => {
    const updated = cities.filter((c) => c !== city);
    setCities(updated);
    localStorage.setItem(SEARCHED_CITIES_HISTORY_KEY, JSON.stringify(updated));
  };

  if (cities.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-center  mt-4">
      {cities.map((city) => (
        <div
          key={city}
          className="flex px-3 py-1 bg-blue-400 text-white rounded-full"
        >
          <div
            onClick={() => onSelect(city)}
            className="cursor-pointer hover:underline mr-2"
          >
            {city}
          </div>
          <button onClick={() => removeCity(city)}>
            <CloseIcon fontSize="small" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecentCities;
