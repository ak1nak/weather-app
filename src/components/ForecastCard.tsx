import React from 'react';
import styled from 'styled-components';
import { Forecast, WeatherDetails } from '../types';

interface ForecastCardProps {
  forecast: Forecast;
}

const renderWeatherDetails = (timeOfDay: string, details?: WeatherDetails) => {
  if (!details) return null;

  return (
    <TimeOfDaySection>
      <TimeOfDay>{timeOfDay}</TimeOfDay>
      <WeatherDetail>
        <DetailLabel>Condition:</DetailLabel>
        <DetailValue>{details.condition}</DetailValue>
      </WeatherDetail>
      <WeatherDetail>
        <DetailLabel>Temperature:</DetailLabel>
        <DetailValue>{details.temperature} °C</DetailValue>
      </WeatherDetail>
      <WeatherDetail>
        <DetailLabel>Precipitation:</DetailLabel>
        <DetailValue>{details.precipitation}</DetailValue>
      </WeatherDetail>
    </TimeOfDaySection>
  );
};

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const { times } = forecast;

  return (
    <Card>
      <Date>{forecast.date}</Date>
      <ForecastDetails>
        {renderWeatherDetails('Morning', times.morning)}
        {renderWeatherDetails('Afternoon', times.afternoon)}
        {renderWeatherDetails('Evening', times.evening)}
        {renderWeatherDetails('Night', times.night)}
      </ForecastDetails>
    </Card>
  );
};

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Date = styled.h3`
  margin-bottom: 20px;
  color: #007bff;
  font-size: 1.5rem;
  text-align: center;
`;

const ForecastDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TimeOfDaySection = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
`;

const TimeOfDay = styled.h4`
  margin: 0 0 10px;
  color: #333;
  font-size: 1.2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

const WeatherDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  color: #555;
  font-size: 0.9rem;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  color: #333;
`;

export default ForecastCard;
