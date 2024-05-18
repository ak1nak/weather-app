import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * NotFound component
 * Displays a 404 error message and a link to go back to the home page
 */
const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Message>404 - Page Not Found</Message>
      <HomeLink to="/">Go to Sign Up</HomeLink>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
`;

const Message = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default NotFound;
