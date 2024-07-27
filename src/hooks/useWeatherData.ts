import {useCallback, useState} from 'react'

export type ResponseWeatherDataType = {
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
  };
};
const useWeatherData = () => {
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState<ResponseWeatherDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = useCallback(async (location: string) => {
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
        if (errorData.cod === '404') {
          setError('Please enter a valid location.');
        } else {
        setError('Please try again a little later.');
        }
        console.error(errorData.error)
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      if (!apiKey) {
        setError('Please try again a little later.');
        console.error('API key is missing. Please set the REACT_APP_API_KEY environment variable.')
        setIsLoading(false);
        return;
      }
      setError('Please try again a little later.');
      setIsLoading(false);
    }
  }, [apiKey]);

  return {weatherData, error, fetchWeatherData, isLoading}
}

export default useWeatherData;
