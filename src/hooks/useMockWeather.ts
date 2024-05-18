import { useQuery } from '@tanstack/react-query';
import { Forecast, WeatherDetails } from '../types';

const getRandomWeatherCondition = () => {
  const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Clear'];
  return conditions[Math.floor(Math.random() * conditions.length)];
};

const getRandomTemperature = () => {
  return (Math.random() * (35 - 5) + 5).toFixed(1); // Random temperature between 5 and 35 degrees Celsius
};

const getRandomPrecipitation = () => {
  const precipitationTypes = [
    'No precipitation',
    'Light rain',
    'Moderate rain',
    'Heavy rain',
    'Snow',
  ];
  return precipitationTypes[Math.floor(Math.random() * precipitationTypes.length)];
};

const generateWeatherDetails = (): WeatherDetails => ({
  condition: getRandomWeatherCondition(),
  temperature: getRandomTemperature(),
  precipitation: getRandomPrecipitation(),
});

const generateDailyForecast = (): Forecast => {
  const currentHour = new Date().getHours();
  const forecast: Forecast = { date: new Date().toLocaleDateString(), times: {} };

  if (currentHour < 12) {
    forecast.times.morning = generateWeatherDetails();
    forecast.times.afternoon = generateWeatherDetails();
    forecast.times.evening = generateWeatherDetails();
    forecast.times.night = generateWeatherDetails();
  } else if (currentHour < 18) {
    forecast.times.afternoon = generateWeatherDetails();
    forecast.times.evening = generateWeatherDetails();
    forecast.times.night = generateWeatherDetails();
  } else if (currentHour < 21) {
    forecast.times.evening = generateWeatherDetails();
    forecast.times.night = generateWeatherDetails();
  } else {
    forecast.times.night = generateWeatherDetails();
  }

  return forecast;
};

const generateNextDayForecast = (): Forecast => ({
  date: new Date(new Date().getTime() + 86400000).toLocaleDateString(), // Next day
  times: {
    morning: generateWeatherDetails(),
    afternoon: generateWeatherDetails(),
    evening: generateWeatherDetails(),
    night: generateWeatherDetails(),
  },
});

const fetchWeather = async (): Promise<Forecast[]> => {
  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [generateDailyForecast(), generateNextDayForecast()];
};

const useMockWeather = (city: string) => {
  const queryResult = useQuery({queryKey: ['weather', city], queryFn: fetchWeather, enabled: !!city});

  return queryResult;
};

export default useMockWeather;
