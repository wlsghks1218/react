import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components 정의
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color || '#007bff'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${(props) => props.$hoverColor || '#0056b3'};
  }

  &:active {
    background-color: ${(props) => props.$activeColor || '#004085'};
  }

  &:disabled {
    background-color: #e9ecef;
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

const BoardWrite = () => {
  const nav = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    writer: '',
    content: ''
  });

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const registerBoard = async () => {
    const inputValueArr = Object.values(inputs);
    const isEmpty = inputValueArr.some((value) => value === '');

    if (isEmpty) {
      alert('모든 내용을 입력하세요.');
      return;
    }

    const resp = await axios.post('/board', inputs);
    const data = resp.data;

    if (data === 'success') {
      alert('게시글 등록이 완료되었습니다.');
      nav('/board');
    } else {
      alert('게시글 등록이 실패되었습니다.');
    }
  };

  const resetInputs = () => {
    setInputs({
      title: '',
      writer: '',
      content: ''
    });
  };

  const moveToBoardList = () => {
    nav('/board');
  };

  return (
    <Container>
      <FormGroup>
        <Label>제목</Label>
        <Input
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChangeInputs}
        />
      </FormGroup>
      <FormGroup>
        <Label>작성자</Label>
        <Input
          type="text"
          name="writer"
          value={inputs.writer}
          onChange={handleChangeInputs}
        />
      </FormGroup>
      <FormGroup>
        <Label>내용</Label>
        <TextArea
          name="content"
          cols={30}
          rows={10}
          value={inputs.content}
          onChange={handleChangeInputs}
        />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={registerBoard}>등록</Button>
        <Button color="#6c757d" $hoverColor="#5a6268" $activeColor="#4e555b" onClick={resetInputs}>
          초기화
        </Button>
        <Button color="#28a745" $hoverColor="#218838" $activeColor="#1e7e34" onClick={moveToBoardList}>
          목록으로 이동
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default BoardWrite;
