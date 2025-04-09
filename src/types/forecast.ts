export type ForecastResponse = {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
};
