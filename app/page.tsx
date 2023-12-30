'use client';
import styled from 'styled-components';

interface CardProps {
  $isDone: boolean;
}

interface TodoListItem {
  id: string;
  isDone: boolean;
  title: string;
  content: string;
  image: string;
}

const TodoListItems: TodoListItem[] = [
  {
    id: 'idOne',
    isDone: false,
    title: '제목',
    content: '내용',
    image: '이미지'
  },
  {
    id: 'idTwo',
    isDone: true,
    title: '제목',
    content: '내용',
    image: '이미지'
  },
  {
    id: 'idThree',
    isDone: false,
    title: '제목',
    content: '내용',
    image: '이미지'
  },
  {
    id: 'idFour',
    isDone: false,
    title: '제목',
    content: '내용',
    image: '이미지'
  },
  {
    id: 'idFive',
    isDone: false,
    title: '제목',
    content: '내용',
    image: '이미지'
  }
];

export default function Home() {
  return (
    <MainContainer>
      <Wrapper>
        <TopWrapper>
          <Title>할 일 목록</Title>
          <Description>오늘의 할 일 목록</Description>
        </TopWrapper>
        <TodoWrapper>
          <TodoList>
            {TodoListItems.map((item) => (
              <TodoCard key={item.id} $isDone={item.isDone}>
                <CardStatus $isDone={item.isDone} />
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
              </TodoCard>
            ))}
          </TodoList>
        </TodoWrapper>
      </Wrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 80px;

  @media screen and (max-width: 800px) {
    padding: 20px 16px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: center;
`;

const Title = styled.div`
  color: #35383e;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.div`
  color: #d0d0d0;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TodoWrapper = styled.div`
  margin: 20px 0;

  max-height: calc(100vh - 160px);
  overflow-y: auto;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TodoCard = styled.div<CardProps>`
  border-radius: 10px;
  border: 1px solid #e2e2e2;

  padding: 16px 20px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: ${(props) => (props.$isDone ? '#d4e0d7' : '#ffffff')};
`;

const CardStatus = styled.div<CardProps>`
  width: 25px;
  height: 25px;
  border-radius: 8px;

  background-color: ${(props) => (props.$isDone ? '#a7d0af' : '#d0d0d0')};

  cursor: pointer;
`;

const CardTitle = styled.div`
  color: #0a0a0a;

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.15px;
`;

const CardContent = styled.div`
  color: #636363;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.15px;
`;
