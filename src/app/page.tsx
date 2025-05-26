'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import styled from 'styled-components';
import { ThemeKey, themeMap } from '@/styles/theme';
import { motion } from 'framer-motion'; // motion 임포트
import { useRouter } from 'next/navigation';

// --- styled-components 컴포넌트들 ---

// motion.div로 변경하여 Framer Motion 애니메이션을 적용할 수 있도록 합니다.
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  // 배경색과 텍스트 색상은 theme prop을 통해 styled-components에서 직접 관리
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
`;

// motion.h1로 변경
const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

// motion.button으로 변경
const Button = styled(motion.button)`
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
`;

const ThemeSelector = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

// motion.button으로 변경
const ThemeOptionButton = styled(motion.button)<{ $isActive: boolean }>`
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.background)};
  color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.text)};
  border: 1px solid ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.border)};
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
`;

export default function Home() {
  const router = useRouter();
  const { themeKey, setThemeKey } = useTheme();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleThemeChange = (key: ThemeKey) => {
    setThemeKey(key);
    localStorage.setItem('themeKey', themeKey === 'blue' ? 'pink' : 'blue'); // 로컬스토리지에 저장
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Title
        key={themeKey}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
      >
        현재 테마: {themeKey}
      </Title>

      <p style={{ border: `1px solid ${themeMap[themeKey].border}`, padding: '10px' }}>
        이 박스는 테마의 `border` 색상을 사용합니다.
      </p>

      <Button
        onClick={handleLoginClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        로그인 페이지로 이동
      </Button>

      <ThemeSelector>
        {Object.keys(themeMap).map(key => (
          <ThemeOptionButton
            key={key}
            $isActive={themeKey === key}
            onClick={() => handleThemeChange(key as ThemeKey)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)} 테마
          </ThemeOptionButton>
        ))}
      </ThemeSelector>
    </Container>
  );
}
