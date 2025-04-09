"use client";

import { useState } from "react";
import { debounce } from "lodash";
import { useWeather } from "@/hooks";
import { SEARCHED_CITIES_HISTORY_KEY } from "@/config";
import Autocomplete from "./Autocomplete";
import Button from "../Button";
import SearchBar from "./SearchBar";
import RecentCities from "./RecentCities";

const CityInput: React.FC = () => {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const { setCity } = useWeather();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    debouncedLookup(value);
  };

  const handleSelect = (cityName: string) => {
    setCity(cityName);
    setInput(cityName);
    setQuery(""); // disable autocomplete list
    updateHistory(cityName);
  };

  const debouncedLookup = debounce((value: string) => {
    setQuery(value);
  }, 300);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCity(input.trim());
    setQuery("");
    updateHistory(input.trim());
  };

  const updateHistory = (city: string) => {
    const existing = JSON.parse(
      localStorage.getItem(SEARCHED_CITIES_HISTORY_KEY) || "[]"
    ) as string[];
    const withoutDuplicate = existing.filter(
      (c) => c.toLowerCase() !== city.toLowerCase()
    );
    const updated = [city, ...withoutDuplicate].slice(0, 5);
    localStorage.setItem(SEARCHED_CITIES_HISTORY_KEY, JSON.stringify(updated));
  };

  return (
    <div className="flex-1 w-full pt-10">
      <form onSubmit={handleSubmit} className="relative w-full mt-10">
        <SearchBar value={input} onChange={handleInput} />
        <Button type="submit" className="absolute right-2 top-2 bottom-2">
          Suchen
        </Button>

        <Autocomplete onSelect={handleSelect} query={query} />
      </form>
      <RecentCities
        onSelect={(city) => {
          setInput(city);
          setCity(city);
          updateHistory(city);
        }}
      />
    </div>
  );
};

export default CityInput;
