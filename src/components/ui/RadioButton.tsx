// src/components/ui/RadioButton.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Text } from './Text';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 7px;
`;

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const StyledRadioCircle = styled(motion.div)<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  ${({ theme, $checked }) =>
    $checked
      ? `
        background: ${theme.primary};
        border: 2px solid ${theme.primary};
      `
      : `
        background: ${theme.background};
        border: 2px solid ${theme.border};
      `}
`;

const InnerCircle = styled(motion.div)`
  width: 10px;
  height: 10px;
  background: white; // 항상 흰색
  border-radius: 5px;
  opacity: 0;
  scale: 0;
  transition: all 0.2s ease;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange, ...props }) => {
  return (
    <RadioContainer>
      <HiddenRadioButton name={name} value={value} checked={checked} onChange={onChange} {...props} />
      <StyledRadioCircle $checked={checked}>
        <InnerCircle
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: checked ? 1 : 0, scale: checked ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </StyledRadioCircle>
      <Text type="body1">{label}</Text>
    </RadioContainer>
  );
};
