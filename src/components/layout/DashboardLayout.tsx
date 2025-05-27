import React, { ReactNode } from 'react';
import { Container, Header, Title, Tabs, UserInfo, Circle, TitleSection, TitleTab } from '@/styles/common';
import { TabItem } from '@/types/tab';

interface LayoutProps {
  children: ReactNode;
  title: string;
  tabs: TabItem[]; // 탭 데이터 받도록 수정
  onTabChange?: (key: string) => void; // 탭 변경 핸들러
}

const Layout: React.FC<LayoutProps> = ({ children, title, tabs, onTabChange }) => {
  return (
    <Container>
      <Header>
        <Title>
          <img src="/icon/logo.svg" alt="Logo" /> {title}
        </Title>
        <Tabs>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={tab.active ? 'active' : ''}
              onClick={() => onTabChange && onTabChange(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </Tabs>
        <UserInfo>
					관리자
					<Circle>A</Circle>
        </UserInfo>
      </Header>

      <TitleSection>
        <TitleTab $isOn={true}>
          <span>운행 일지</span>
        </TitleTab>
        <TitleTab>
          <span>운행 내역</span>
        </TitleTab>
      </TitleSection>
      
      {children}
    </Container>
  );
};

export default Layout;