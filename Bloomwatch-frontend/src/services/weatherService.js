import api from './api';

// Weather service
const weatherService = {
  // Get weather data for location
  getWeather: async (location) => {
    const params = new URLSearchParams(location).toString();
    return await api.get(`/weather?${params}`);
  },

  // Get weather forecast
  getForecast: async (location) => {
    const params = new URLSearchParams(location).toString();
    return await api.get(`/weather/forecast?${params}`);
  },

  // Get weather alerts
  getAlerts: async (location) => {
    const params = new URLSearchParams(location).toString();
    return await api.get(`/weather/alerts?${params}`);
  },
};

export default weatherService;
