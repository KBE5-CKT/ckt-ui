// src/components/ui/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const BaseButton = styled(motion.button)`
  align-self: stretch;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
`;

const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const ButtonComponent = variant === 'primary' ? PrimaryButton : SecondaryButton;
  return (
    <ButtonComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};
