import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import '../styles/globals.css';

interface WeatherData {
  currentWeather: any; // Replace 'any' with more specific types later
  forecast: any;       // Replace 'any' with more specific types later
}

interface WeatherError {
  error: string;
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`/api/weather?city=${city}`);
  if (!response.ok) {
    const errorData: WeatherError = await response.json();
    throw new Error(errorData.error || 'Failed to fetch weather data');
  }
  return response.json();
};

export const useWeather = () => {
  const [city, setCity] = useState('');

  const { data, isLoading, isError, error, refetch } = useQuery<WeatherData, Error>({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city, // Only run the query if a city is provided
    refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
  });

  const searchWeather = (newCity: string) => {
    setCity(newCity);
  };

  return { data, isLoading, isError, error, searchWeather };
};