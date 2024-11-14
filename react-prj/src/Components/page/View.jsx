import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const View = () => {
    // URL을 통해 전달받은 파라미터 사용하는 훅
    // useParams()
    // 1. const {파라미터 명} = useParams();
    const {postId} = useParams();

    // 2. const 변수명 = useParams().파라미터명
    const bno = useParams().postId;
    console.log(bno);

    // 3. useLocation()
    // hash 조소의 #문자열 뒤 값
    // pathname : 현재 주소 경로
    // search : ?를 포함한 쿼리스트링
    // state : 페이지로 이동 시 임의로 넣을 수 있는 상태 값
    // key : location 객체의 고유 값, 초기 값은 default, 페이지가 변경되면 고유의 값이 생성
    const location = useLocation();

    return (
        <div>
            <h1>{postId}번 View 페이지 입니다.</h1>
            <h1>{bno}번 View 페이지 입니다.</h1>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default View;