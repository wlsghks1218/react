import React from 'react';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailWrapper = styled.div`
    margin : 60px auto 0;
    max-width : 1200px;
    width : 80%;
`;

const Detail = ({data}) => {
    // const pId = useParams().pId;
    // 위와 같이 받아오는 것을 구조분해 할당으로 아래와 같이 사용
    const {pId} = useParams();
    // const filtered = data.filter(item => item.id === Number(pId));
    const finded = data.find(item => item.id === Number(pId));
    return (
        <DetailWrapper>
            <DetailHead data={finded}/>
            <DetailBody detail={finded.detail}/>
        </DetailWrapper>
    );
};

export default Detail;