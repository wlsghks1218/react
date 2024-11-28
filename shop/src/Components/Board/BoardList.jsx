import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components 정의
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const BoardListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const BoardItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e9ecef;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const WriteButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.$active ? '#007bff' : '#f8f9fa')};
  color: ${(props) => (props.active ? '#fff' : '#495057')};
  border: 1px solid #e9ecef;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? '#0056b3' : '#e9ecef')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e9ecef;
    color: #adb5bd;
  }
`;

const BoardList = () => {
  const nav = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 한 페이지에 표시할 게시글 수

  const getBoardList = async () => {
    const resp = await axios.get('/boardList');
    const data = resp.data;
    setBoardList(data);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const moveWritePage = () => {
    nav('/write');
  };

  // 현재 페이지의 게시글 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boardList.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호 계산
  const totalPages = Math.ceil(boardList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <BoardListContainer>
        {currentItems.map((board) => (
          <BoardItem key={board.bdno}>
            <StyledLink to={`/board/${board.bdno}`}>
              {board.title}
            </StyledLink>
          </BoardItem>
        ))}
      </BoardListContainer>
      <Pagination>
        <PageButton
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          이전
        </PageButton>
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
          <PageButton
            key={page}
            $active={currentPage === page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PageButton>
        ))}
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          다음
        </PageButton>
      </Pagination>
      <ButtonContainer>
        <WriteButton onClick={moveWritePage}>새 게시글 등록</WriteButton>
      </ButtonContainer>
    </Container>
  );
};

export default BoardList;
