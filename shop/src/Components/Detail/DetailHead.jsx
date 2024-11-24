import React from 'react';
import styled from 'styled-components';
import formatKoreanCurrency from '../../util/display/display';
import DescriptionList from './DescriptionList';

const DetailHeadArea = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    margin-bottom: 100px;
    padding-bottom: 100px;
    border-bottom: 1px solid #999;
`;
const DetailMainImg = styled.div`
    flex: 1;
    height: 500px;
    background-image: url(/images/product/${props=>props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px;
`;
// const Description = styled.div`
//      flex: 1;
//      height: 500px;
//      padding: 50px;
// `;
// const Title = styled.span`
//     font-size: 32px;
//     font-weight : bold;
//     display: block;
//     margin: 20px 0;
// `;
// const PriceTitle = styled.span`
//     font-size: 32px;
//     font-weight : bold;
//     display: block;
//     margin: 20px 0;
// `;

const DetailHead = ({data}) => {
    console.log(data);
    return (
        <DetailHeadArea>
            <DetailMainImg image={data.main}/>
            <DescriptionList data={data}/>
            {/* <Description>
                <Title>{data.title}</Title>
                <PriceTitle>{formatKoreanCurrency(data.price)}</PriceTitle>
            </Description> */}
        </DetailHeadArea>
    );
};

export default DetailHead;