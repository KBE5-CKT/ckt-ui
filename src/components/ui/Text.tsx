// src/components/ui/Text.tsx
import styled from 'styled-components';
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface TextProps extends HTMLMotionProps<'span'> {
  type?: 'heading' | 'subheading' | 'body1' | 'body2' | 'body3' | 'link' | 'button';
  children: React.ReactNode;
}

const BaseSpan = styled(motion.span)`
  font-family: 'Pretendard', sans-serif;
  word-wrap: break-word;
`;

const HeadingText = styled(BaseSpan)`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
`;

const SubheadingText = styled(BaseSpan)`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

const Body1Text = styled(BaseSpan)`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
`;

const LinkText = styled(BaseSpan)`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  cursor: pointer;
`;

const ButtonText = styled(BaseSpan)`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
`;

export const Text: React.FC<TextProps> = ({ type = 'body1', children, ...props }) => {
  switch (type) {
    case 'heading':
      return <HeadingText {...props}>{children}</HeadingText>;
    case 'subheading':
      return <SubheadingText {...props}>{children}</SubheadingText>;
    case 'body1':
      return <Body1Text {...props}>{children}</Body1Text>;
    case 'link':
      return <LinkText {...props}>{children}</LinkText>;
    case 'button':
      return <ButtonText {...props}>{children}</ButtonText>;
    default:
      return <BaseSpan {...props}>{children}</BaseSpan>;
  }
};
