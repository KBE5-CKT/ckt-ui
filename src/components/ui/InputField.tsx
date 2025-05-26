// src/components/ui/InputField.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Text } from './Text';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const FieldContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const InputWrapper = styled(motion.div)`
  align-self: stretch;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.border};
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  transition: outline-color 0.2s ease;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.primary};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export const InputField: React.FC<InputFieldProps> = ({ label, icon, ...props }) => {
  return (
    <FieldContainer>
      {label && <Text type="body1">{label}</Text>}
      <InputWrapper>
        <StyledInput {...props} />
        {icon}
      </InputWrapper>
    </FieldContainer>
  );
};
