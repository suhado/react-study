'use client';
import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

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
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoListItem[]>(TodoListItems);

  const addTodo = () => {
    const newTodo: TodoListItem = {
      id: `id${Math.random().toString(36).substring(7)}`,
      isDone: false,
      title: '새로운 제목',
      content: '새로운 내용',
      image: '이미지'
    };

    setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setIsModalOpen(true);
    setTodoItems((prevTodoItems) => prevTodoItems.filter((item) => item.id !== id));
  };

  const toggleTodoStatus = (id: string) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
    );
  };

  return (
    <MainContainer>
      <Wrapper>
        <TopWrapper>
          <Description>오늘의 할 일 목록</Description>
        </TopWrapper>
        <TodoWrapper>
          <TodoList>
            {todoItems.map((item) => (
              <TodoCard key={item.id} $isDone={item.isDone}>
                <DeleteButtonWrapper>
                  <Image
                    src="/deleteIcon.svg"
                    alt="delete"
                    width={18}
                    height={18}
                    onClick={() => deleteTodo(item.id)}
                  />
                </DeleteButtonWrapper>
                <CardStatus $isDone={item.isDone} onClick={() => toggleTodoStatus(item.id)} />
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
              </TodoCard>
            ))}
          </TodoList>
          <AddButton onClick={addTodo}>새로운 Todo 추가</AddButton>
        </TodoWrapper>
      </Wrapper>

      {isModalOpen && (
        <ModalWrapper>
          <Backdrop>
            <ModalBody onClick={(e) => e.stopPropagation()}>
              <ModalContents>할일이 삭제되었습니다</ModalContents>
              <ButtonWrapper>
                <Button onClick={() => setIsModalOpen(false)}>
                  <ButtonTextPrimary>확인</ButtonTextPrimary>
                </Button>
              </ButtonWrapper>
            </ModalBody>
          </Backdrop>
        </ModalWrapper>
      )}
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

const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddButton = styled.div`
  text-align: center;
  color: #0a0a0a;

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.15px;

  background-color: #d3e9ec;

  border-radius: 8px;
  padding: 12px;

  margin-top: 10px;

  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.1);
`;

const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  z-index: 10000;
`;

const ModalBody = styled.div`
  width: 358px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  text-align: center;
`;

const ModalContents = styled.div`
  color: #0a0a0a;

  font-family: Pretendard sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.14px;

  padding: 48px 24px;

  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-top: 1px solid #e2e2e2;
`;

const Button = styled.button`
  flex: 1;
  text-align: center;

  background: none;
  border: none;

  padding: 16px;
`;

const ButtonTextPrimary = styled.div`
  color: #0a0a0a;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;
