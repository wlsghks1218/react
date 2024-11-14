import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Main.css';
import styled from 'styled-components';

const Sbutton = styled.button`
    margin : 10px;
    padding : 10px;
    font-size : 1rem;
    background-color : ${props => props.backgroundColor || 'blue'};
    color : ${props => props.color || 'yellow'};  
    ${props => {
        return props.type === 'primary' && `
            color : gray;
            background-color : red;
        `
    }}
`;
// <button></button> 요소에 대한 스타일 정의

const Main = () => {
    const nav = useNavigate();
    const myStyle ={
        backgroundColor:'gray',
        color:'red'
    }
    return (
        <div>
            <h1>Main 페이지 입니다.</h1>
            <button 
                onClick={()=>nav('view/10')}
                style={{
                    backgroundColor : 'black',
                    color:'white'
                }}
            >
                view 페이지로 이동
            </button>
            {/* nav(-1) history.back()같은거임 */}
            <Link to='write'><button className="btn btn1">write 페이지로 이동</button></Link>
            {/* Link의 경우 개발자 도구에서 버튼을 a href='write'로 감싸진다.->css 다시 해줘야 함 걍 nav 쓰자*/}
            <Sbutton color='green' background-color='white'>버튼</Sbutton>
            <Sbutton type='primary'>버튼</Sbutton>
        </div>
    );
};

export default Main;