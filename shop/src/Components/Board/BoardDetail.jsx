import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const BoardDetail = () => {
  function displayTime(unixTimeStamp) {
    if (!unixTimeStamp) return ''; // 값 검증
    const myDate = new window.Date(unixTimeStamp); // window.Date 사용
    if (isNaN(myDate)) return ''; // 유효하지 않은 날짜 처리
    const y = myDate.getFullYear();
    const m = String(myDate.getMonth() + 1).padStart(2, '0');
    const d = String(myDate.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  const nav = useNavigate();
  const { idx } = useParams();
  const [board, setBoard] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const getBoardList = async () => {
    const resp = await axios.get(`/board/${idx}`);
    setBoard(resp.data);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  useEffect(() => {
    if (board.title) setTitle(board.title);
    if (board.content) setContent(board.content);
  }, [board]);

  const handleRemoveBoard = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('게시글을 삭제하시겠습니까?')) {
      const resp = await axios.delete(`/board/${idx}`);
      if (resp.status === 200) {
        nav('/board');
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const resp = await axios.put(`/boardUpdate/${idx}`, { title, content });
    if (resp.status === 200) {
      setIsEditing(false);
      await getBoardList();
    }
  };

  return (
    <Container>
      {isEditing ? (
        <StyledInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <Title>{board.title}</Title>
      )}
      <Date>{displayTime(board.writeDate)}</Date>
      <Separator />
      {isEditing ? (
        <StyledTextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <Content>{board.content}</Content>
      )}
      <ButtonGroup>
        <StyledButton
          onClick={isEditing ? handleSaveClick : handleEditClick}
          $variant="primary"
        >
          {isEditing ? '저장' : '수정'}
        </StyledButton>
        <StyledButton onClick={handleRemoveBoard} $variant="danger">
          삭제
        </StyledButton>
        <StyledButton onClick={() => nav('/board')} $variant="secondary">
          목록으로 이동
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
};

export default BoardDetail;

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.h4`
  color: #888;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Separator = styled.hr`
  border: 1px solid #ddd;
  margin: 20px 0;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    background-color: #007bff;
    color: white;
  `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    `
    background-color: #6c757d;
    color: white;
  `}

  ${({ $variant }) =>
    $variant === 'danger' &&
    `
    background-color: #dc3545;
    color: white;
  `}
`;