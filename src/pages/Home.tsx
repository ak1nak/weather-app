import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import CityInput from '../components/CityInput';
import WeatherResults from '../components/WeatherResults';
import Loader from '../components/Loader';
import useMockWeather from '../hooks/useMockWeather';

/**
 * Home component
 * Displays the main content including city input and weather results
 */
const Home: React.FC = () => {
  const email = localStorage.getItem('email');
  const [city, setCity] = useState<string>('');
  const { data: weatherData, isLoading } = useMockWeather(city);
  const navigate = useNavigate();

  const handleCitySubmit = (city: string) => {
    setCity(city);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <HomeContainer>
      <Header>
        <AvatarContainer>
          <Avatar email={email!} />
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </AvatarContainer>
      </Header>
      <MainContent>
        <CityInput onSubmit={handleCitySubmit} />
        {isLoading ? <Loader /> : weatherData && weatherData.length > 0 && <WeatherResults weatherData={weatherData} />}
      </MainContent>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f4f8;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #007bff;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;
`;

export default Home;
