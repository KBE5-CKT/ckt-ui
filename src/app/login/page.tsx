'use client';

import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '@/components/auth/LoginForm';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
}
