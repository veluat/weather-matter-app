import {useState} from "react";

type ResponseWeatherDataType = {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  weather: {
    icon: string;
  }[];
};
const useWeatherData = () => {
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState<ResponseWeatherDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async (location: string) => {
    try {
      if (location.toString().trim() === '') {
        setError('Please enter a location.');
        return;
      }
      setIsLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.message}`);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      if (!apiKey) {
        setError('API key is missing. Please set the REACT_APP_API_KEY environment variable.');
        setIsLoading(false);
        return;
      }
      setError('An error occurred while fetching weather data.');
      setIsLoading(false);
    }
  };

  return {weatherData, error, fetchWeatherData, isLoading}
}

export default useWeatherData;
