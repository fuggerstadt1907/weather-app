import axios from "axios";
import { API_BASE_URL, API_KEY } from "@/config";

export const fetchWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data/2.5/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "de",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Weater data could not be loaded"
    );
  }
};

export const fetchForecastByCity = async (city: string) => {
  const res = await fetch(
    `${API_BASE_URL}/data/2.5/forecast?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&lang=de`
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Fehler beim Laden der Vorhersage");
  }

  return res.json();
};

export const fetchAutocompletedCity = async (query: string) => {
  const res = await fetch(
    `${API_BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(
      query
    )}&limit=5&lang=de&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Fehler beim Laden der Vorschläge");
  return res.json();
};
