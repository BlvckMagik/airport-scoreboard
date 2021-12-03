export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const weatherDataRecieved = weatherData => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: weatherData,
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetch(baseUrl)
      .then(response => response.json())
      .then(weatherData => dispatch(weatherDataRecieved(weatherData)));
  };
};
