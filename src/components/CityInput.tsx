import React, { useState } from 'react';
import styled from 'styled-components';

interface CityInputProps {
  onSubmit: (city: string) => void;
}

const CityInput: React.FC<CityInputProps> = ({ onSubmit }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const validateCity = (cityName: string) => {
    const cityRegex = /^[a-zA-Z\s]+$/;
    return cityRegex.test(cityName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCity(city)) {
      setError('');
      onSubmit(city);
    } else {
      setError('Please enter a valid city name.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <Button type="submit">Get Weather</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export default CityInput;
