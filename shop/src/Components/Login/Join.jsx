import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 추가
import styled from 'styled-components';

const JoinStyle = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #ddd;
  }

  button {
    padding: 10px;
    background-color: lightgreen;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    border: 2px solid green;
  }

  button:hover {
    background-color: green;
  }
`;

const Join = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkDuplication = async () => {
    const { username } = formData;

    if (username) {
      try {
        const response = await axios.post('/api/checkUsername', { username });
        if (response.data.isDuplicate) {
          alert('이미 존재하는 아이디입니다.');
          return false;
        }
      } catch (error) {
        console.error('아이디 중복 확인 실패:', error);
        alert('아이디 중복 확인 중 오류가 발생했습니다.');
        return false;
      }
    }
    alert("사용 가능한 아이디입니다!");
    return true; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, email, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const isValid = await checkDuplication();
    if (!isValid) return;

    const requestData = {
      username,
      password,
      email,
    };

    try {
      const response = await axios.post('/api/signUp', requestData);
      if (response.status === 200) {
        console.log('회원가입 성공:', response.data);
        alert('회원가입이 완료되었습니다!');

        if (window.confirm("로그인 페이지로 이동하시겠습니까?")) {
          navigate('/login');
        } else {
          navigate('/'); 
        }
      } else {
        console.log('응답 오류:', response);
      }
    } catch (error) {
      console.error('회원가입 실패:', error.response ? error.response.data : error.message);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <JoinStyle>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <button type="button" id="duplicatedCheckBtn" onClick={checkDuplication}>
          중복확인
        </button>

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">회원가입</button>
      </form>
    </JoinStyle>
  );
};

export default Join;
