import React from 'react';
import styled from 'styled-components';

const DetailImg = styled.img`
    width: 80%;
    height: auto;
    display: block;
    object-fit: cover;
    margin : auto;
`;

const DetailBody = ({detail}) => {
    return (
        <DetailImg src={`/images/product/${detail}`}/>               
    );
};

export default DetailBody;