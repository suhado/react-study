'use client';
import './globals.css';
import styled from 'styled-components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header>
          <Title>할 일 목록</Title>
        </Header>
        {children}
      </body>
    </html>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 12px;
`;

const Title = styled.div`
  color: #35383e;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
