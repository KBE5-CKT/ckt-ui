import React from 'react';
import { FilterSection } from '../../styles/common';

interface GpsLogFilterProps {
  onSearch: () => void; // 검색 버튼 클릭 시 호출될 함수
  // 필요에 따라 필터 상태와 핸들러를 props로 추가할 수 있습니다.
  // 예를 들어, carNumber: string; onCarNumberChange: (value: string) => void;
}

const GpsLogFilter: React.FC<GpsLogFilterProps> = ({ onSearch }) => {
  return (
    <FilterSection>
      <input placeholder="차량 번호" />
      <input placeholder="사용자" />
      <div className="date-picker">
        <input type="date" /> ~ <input type="date" />
      </div>
      <select>
        <option>운행 유형</option>
        {/* 실제 데이터 기반으로 옵션 렌더링 가능 */}
      </select>
      <button
        style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#3366ff', color: 'white' }}
        onClick={onSearch}
      >
        조회
      </button>
    </FilterSection>
  );
};

export default GpsLogFilter;