import styled from 'styled-components';

interface TitleTabProps {
  $isOn?: boolean;
}

export const Container = styled.div`
  padding: 24px;
	width: 100vw;
  height: 100vh;
	display: inline-flex;
	flex-direction: column;
  justify-content: flex-start;
	gap: 24px;
	background: #F5F7FA;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: bold;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
	gap: 8px;
`

export const Circle = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	display: flex;
	align-items: center;
  justify-content: center;
	color: #FFFFFF;
	background: ${({ theme }) => theme.primary};
`

export const Tabs = styled.div`
  display: flex;
  gap: 24px;
  button {
    background: none;
    border: none;
    font-size: 16px;
    color: #aaa;
    cursor: pointer;
    &.active {
			background: #EFF6FF;
      color: #3366ff;
      font-weight: bold;
    }
  }
`;

export const TitleSection = styled.div`
	width: 100%;
	height: 40px;
`

export const TitleTab = styled.div<TitleTabProps>`
  /* Base styles for the tab container (from TitleTabOff's container properties) */
  width: 120px;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
	gap: 4px;
  display: inline-flex;
  align-self: stretch; /* From the original TitleTab */
  
  /* Conditional background based on the 'isOn' prop */
  background: ${props => props.$isOn ? '#3563E9' : '#F1F5F9'};
  
  /* Styles for the text content within the tab */
  span {
    font-size: 14px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 16.80px;
    word-wrap: break-word;
    
    /* Conditional text color based on the 'isOn' prop */
    color: ${props => props.$isOn ? '#FFFFFF' : 'inherit'}; /* Use 'inherit' or a specific off-state color if desired */
  }
`;

export const FilterSection = styled.div`
  background-color: white;
  margin-top: 16px;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  input, select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .date-picker {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const TableContainer = styled.div`
  margin-top: 24px;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }
  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
`;

export const Badge = styled.span<{ color: string }>`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  background-color: ${({ color }) => color};
`;

export const Pagination = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
  button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #eee;
    border-radius: 6px;
    cursor: pointer;
    &.active {
      background-color: #3366ff;
      color: white;
      font-weight: bold;
    }
  }
`;