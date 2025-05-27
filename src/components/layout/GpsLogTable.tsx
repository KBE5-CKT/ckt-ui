import React from 'react';
import { TableContainer, Table, Badge, Pagination } from '@/styles/common';
import { DrivingHistorySummary } from '@/types/driving-history';

interface GpsLogTableProps {
  logs: DrivingHistorySummary[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GpsLogTable: React.FC<GpsLogTableProps> = ({ logs, currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>모델명</th>
            <th>차량번호</th>
            <th>시작 시간</th>
            <th>종료 시간</th>
            <th>출발 계기판</th>
            <th>도착 계기판</th>
            <th>총 주행거리</th>
            <th>사용자</th>
            <th>운행 유형</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.modelName}</td>
              <td>{log.carNumber}</td>
              <td>{log.startTime}</td>
              <td>{log.endTime}</td>
              <td>{log.startMileage}</td>
              <td>{log.endMileage}</td>
              <td>{log.totalDistance}</td>
              <td>{log.user}</td>
              <td>
                <Badge color={log.operationType.color}>{log.operationType.label}</Badge>
              </td>
              <td>{log.note}</td>
            </tr>
          ))}
          {logs.length === 0 && (
            <tr>
              <td colSpan={11} style={{ textAlign: 'center' }}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagination>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </Pagination>
    </TableContainer>
  );
};

export default GpsLogTable;