import React, { useState } from 'react';
import "./HomePage.css"
import fetchWeather from './weatherService';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = () => {
    fetchWeather(city)
      .then((response) => {
        console.log(response.data); // Log the API response
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather:', error);
      });
  };

  return (
    <div className='HomePage'>
      <div></div>
      <div className='search'>
      
      <input
      className='input'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className='weather-button' onClick={getWeather}>Get Weather</button>
    </div>  

      {weatherData && (
        <div>
          <p className='name'>{weatherData.location.name}</p>
          <div className='title'>
          <h1> {weatherData.current.temp_c}°C</h1>
          <img className='img' src={weatherData.current.condition.icon} alt="Weather Icon" />
          </div>
    
          <p> {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
