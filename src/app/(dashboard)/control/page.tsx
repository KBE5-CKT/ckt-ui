'use client'

import React, { useState } from 'react';
import Layout from '@/components/layout/DashboardLayout';
import GpsLogFilter from '@/components/layout/GpsLogFilter';
import GpsLogTable from '@/components/layout/GpsLogTable';
import { dummyDrivingHistorySummaries } from '@/data/driving-history';
import { TabItem } from '@/types/tab';

const GpsLogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 10; // 페이지 당 표시할 로그 수
  const totalLogs = dummyDrivingHistorySummaries.length;
  const totalPages = Math.ceil(totalLogs / logsPerPage);

  // 현재 페이지에 해당하는 로그 데이터 계산
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = dummyDrivingHistorySummaries.slice(indexOfFirstLog, indexOfLastLog);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    // 검색 로직 (실제로는 필터 값을 읽어서 데이터 필터링)
    console.log("검색 버튼 클릭됨!");
    setCurrentPage(1); // 검색 시 첫 페이지로 리셋
    // 실제 API 호출 또는 필터링 로직 추가
  };

  const tabs: TabItem[] = [
    { label: '실시간 관제', key: 'control', active: false },
    { label: '관제 현황', key: 'monitoring', active: true },
    { label: '차량 관리', key: 'car-management', active: false },
    { label: '사용자 관리', key: 'user-management', active: false },
  ];

  const handleTabChange = (key: string) => {
    console.log(`탭 변경: ${key}`);
    // 실제 탭 변경 로직 (예: 라우팅, 상태 업데이트)
  };

  return (
    <Layout title="카플릿 관제시스템" tabs={tabs} onTabChange={handleTabChange}>
      <GpsLogFilter onSearch={handleSearch} />
      <GpsLogTable
        logs={currentLogs}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default GpsLogPage;