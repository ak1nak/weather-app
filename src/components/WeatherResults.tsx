import React from 'react';
import styled from 'styled-components';
import ForecastCard from './ForecastCard';
import { Forecast } from '../types';

interface WeatherResultsProps {
  weatherData: Forecast[];
}

const WeatherResults: React.FC<WeatherResultsProps> = ({ weatherData }) => {
  if (weatherData.length === 0) {
    return <NoData>No weather data available. Please enter a valid city.</NoData>;
  }

  return (
    <ResultsContainer>
      {weatherData.map((forecast, index) => (
        <ForecastCard key={index} forecast={forecast} />
      ))}
    </ResultsContainer>
  );
};

const NoData = styled.p`
  color: #ff0000;
  margin-top: 20px;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WeatherResults;
