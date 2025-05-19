import React from 'react';
import { CityInput } from '@/components/cityInput';
import  WeatherDisplay  from '@/components/weatherDisplay';
import { LoadingState } from '@/components/loadingState';
import { ErrorMessage } from '@/components/errorMessage';
import { useWeather } from '@/hooks/useWeather';

export const Home: React.FC = () => {
  const { data, isLoading, isError, error, searchWeather } = useWeather();

  const handleSearch = (city: string) => {
    searchWeather(city);
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Search Weather</h2>
        <CityInput onSearch={handleSearch} />
      </section>

      <section className="flex-1">
        {isLoading && <LoadingState />}
        {isError && <ErrorMessage message={error?.message || 'Failed to fetch weather data.'} />}
        {data && <WeatherDisplay currentWeather={data.currentWeather} forecast={data.forecast} />}
      </section>
    </div>
  );
};


export default Home;