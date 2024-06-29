import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Weather from '../../components/Weather';
import { API_KEY } from '../../utils/WeatherAPIKey';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [windSpeed, setWindSpeed] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      const result = await response.json();

      setTemperature(result.main.temp);
      setWeatherCondition(result.weather[0].main);
      setWindSpeed(result.wind.speed);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching the weather...</Text>
      ) : (
        <Weather weather={weatherCondition} temperature={temperature} windSpeed={windSpeed} />
      )}
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
