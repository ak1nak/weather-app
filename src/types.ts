export interface Forecast {
  date: string;
  times: {
    morning?: WeatherDetails;
    afternoon?: WeatherDetails;
    evening?: WeatherDetails;
    night?: WeatherDetails;
  };
}

export interface WeatherDetails {
  condition: string;
  temperature: string;
  precipitation: string;
}
