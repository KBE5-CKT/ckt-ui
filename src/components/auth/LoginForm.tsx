// src/components/auth/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// 재사용 가능한 UI 컴포넌트 임포트
import { Text } from '@/components/ui/Text';
import { InputField } from '@/components/ui/InputField';
import { Button } from '@/components/ui/Button';
import { RadioButton } from '@/components/ui/RadioButton';
import { useRouter } from 'next/navigation';

// --- LoginForm 내부에서만 사용될 styled-components (필요시) ---

const LoginFormContainer = styled(motion.div)`
  // motion.div 적용
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 21px;
  display: inline-flex;
`;

const FormHeader = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const UserTypeOptions = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const RememberMeSection = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const DividerSection = styled.div`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const Line = styled.div`
  flex: 1 1 0;
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

const RegisterSection = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
`;

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    
    router.push("/control")
  };

  return (
    <LoginFormContainer initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <FormHeader>
        <Text type="heading">로그인</Text>
        <Text type="subheading">계정 정보를 입력하여 로그인하세요</Text>
      </FormHeader>

      {/* 이메일 입력 필드 */}
      <InputField
        label="이메일"
        placeholder="이메일 입력"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {/* 비밀번호 입력 필드 */}
      <InputField
        label="비밀번호"
        placeholder="비밀번호 입력"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        // 비밀번호 보이기/숨기기 아이콘은 InputField 내부에서 처리하거나, prop으로 전달
        // icon={<StyledFrame03><StyledVector /><StyledVector01 /></StyledFrame03>}
      />

      <RememberMeSection>
        {/* '비밀번호 찾기' 링크는 Text 컴포넌트를 link 타입으로 사용 */}
        <Text type="link" onClick={() => alert('비밀번호 찾기 기능')}>
          비밀번호 찾기
        </Text>
      </RememberMeSection>

      <Button variant="primary" onClick={handleSubmit}>
        <Text type="button">로그인</Text>
      </Button>

      <DividerSection>
        <Line />
        <Text type="body2">또는</Text> {/* '또는' 텍스트는 body2 타입으로 설정 */}
        <Line />
      </DividerSection>

      <RegisterSection>
        <Text type="body2">아직 계정이 없으신가요?</Text>
        <Button variant="secondary" onClick={() => alert('법인 회원가입 페이지로 이동')}>
          <Text type="body1">법인 회원가입</Text> {/* '법인 회원가입'은 body1 타입으로 설정 */}
        </Button>
      </RegisterSection>
    </LoginFormContainer>
  );
};
