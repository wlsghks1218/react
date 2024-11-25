import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position : relative;
  max-width : 70%;
  min-height : 120px;
  margin : 0 auto;
  margin-bottom : 10px;
  border-bottom : 3px solid gray;
`;

const Logo = styled.div`
  position : relative;
  top: 50px;
  left: 0;
  width: 180px;
  height: 40px;
  background-image: url('/images/headerLogo.png');
  background-repeat : no-repeat;
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

const menus =['로그인', '회원가입', '장바구니', '고객센터']

const Header = () => {
  return (
    <div>
      <Wrapper>
        <Link to={'/'}>
          <Logo />
        </Link>
        <NavArea>
          <GnbLists>
            {
              menus.map((menu, i) => (
                <GnbItem key={i}>
                  {
                    menu === '장바구니' ?
                      <Link to='/cart'>{menu}</Link> :
                      <Link to='/'>{menu}</Link>
                  }
                </GnbItem>
              ))
            }
          </GnbLists>
        </NavArea>
      </Wrapper>
    </div>
  );
};

export default Header;