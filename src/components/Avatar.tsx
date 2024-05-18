import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

interface AvatarProps {
  email: string;
}

const Avatar: React.FC<AvatarProps> = ({ email }) => {
  return (
    <AvatarContainer>
      <FaUserCircle size={24} />
      <Email>{email}</Email>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 50px;
`;

const Email = styled.span`
  font-size: 14px;
`;

export default Avatar;
