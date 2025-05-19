import React from 'react';

interface WeatherDisplayProps {
  currentWeather: any; 
  forecast: any; 
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ currentWeather, forecast }) => {
  if (!currentWeather || !forecast) {
    return <p>No weather data available.</p>;
  }

  return (
    <div>
      <h2>{currentWeather.name}, {currentWeather.sys.country}</h2>
      <p>Temperature: {currentWeather.main.temp}°C</p>
      <p>Description: {currentWeather.weather[0].description}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
      <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
      <p>Visibility: {currentWeather.visibility / 1000} km</p>
      <p>Pressure: {currentWeather.main.pressure} hPa</p>
      <p>Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}</p>
      

      <h3>3 Hour Forecast</h3>
      {forecast.list.slice(0, 5).map((item: any) => ( 
        <div key={item.dt}>
          <p>Time: {new Date(item.dt * 1000).toLocaleTimeString()}</p>
          <p>Temp: {item.main.temp}°C</p>
          <p>Description: {item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;