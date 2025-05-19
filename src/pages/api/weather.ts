import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { city } = req.query;

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ error: 'Please provide a city name.' });
  }

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured.' });
  }

  try {
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric` // You can change 'metric' to 'imperial' if needed
    );
    const currentWeatherData = await currentWeatherResponse.json();

    if (!currentWeatherResponse.ok) {
      if (currentWeatherData?.cod === '404') {
        return res.status(404).json({ error: 'City not found.' });
      }
      return res
        .status(currentWeatherResponse.status)
        .json({ error: 'Failed to fetch current weather data.' });
    }

    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric` // Keep units consistent
    );
    const forecastData = await forecastResponse.json();

    if (!forecastResponse.ok) {
      return res
        .status(forecastResponse.status)
        .json({ error: 'Failed to fetch forecast data.' });
    }

    res.status(200).json({ currentWeather: currentWeatherData, forecast: forecastData });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Something went wrong while fetching weather data.' });
  }
}