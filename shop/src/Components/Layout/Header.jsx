import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../action/userAction';
import axios from 'axios';

const Wrapper = styled.div`
  position: relative;
  max-width: 70%;
  min-height: 120px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-bottom: 3px solid gray;
`;
const Logo = styled.div`
  position: relative;
  top: 50px;
  left: 0;
  width: 180px;
  height: 40px;
  background-image: url('/images/headerLogo.png');
  background-repeat: no-repeat;
  background-size: contain;
`;
const NavArea = styled.div`
  float : right;
  width: 50%;
  height: 40px;
`;
const GnbLists = styled.ul`
  list-style: none;
  height: 60px;
  margin: auto;
  padding: 0;
  text-align : right;
`;
const GnbItem = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: 'Noto Sans KR', sans-serif;
    display: block;
    position: relative;
    height: 60px;
    line-height: 65px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color: #666;
  }
  &:hover, &:active, &:focus{
    border-bottom: solid 3px #d85a4d;
  }
`;

function Header(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log(user)
  const handleLogout = () => {
    const response =  axios.post("/api/logout");
    dispatch(logout());
    console.log(user)
  }

  return (
    <Wrapper>
      <Link to={'/'}>
        <Logo/>
      </Link>
      <NavArea>
            <GnbLists>
                {
                  user.user === null
                  ? <GnbItem><Link to='/login'>로그인</Link></GnbItem>
                  : <GnbItem><Link onClick={handleLogout}>로그아웃</Link></GnbItem>
                }
                {(!isAuthenticated)?<GnbItem><Link to='/join'>회원가입</Link></GnbItem> : <GnbItem><Link to='/myPage'>마이페이지</Link></GnbItem>}
                <GnbItem><Link to='/cart'>장바구니</Link></GnbItem>
                <GnbItem><Link to='/'>고객센터</Link></GnbItem>
                <GnbItem><Link to='/board'>게시판</Link></GnbItem>
              </GnbLists>
          </NavArea>
    </Wrapper>
  );
}

export default Header;