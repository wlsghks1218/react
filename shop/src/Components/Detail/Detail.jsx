import React, { useEffect, useState } from 'react';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';

const DetailWrapper = styled.div`
    margin : 60px auto 0;
    max-width : 1200px;
    width : 80%;
`;

const Detail = ({data}) => {
    // const pId = useParams().pId;
    // 위와 같이 받아오는 것을 구조분해 할당으로 아래와 같이 사용
    const {pId} = useParams();

    const [detailProduct, setDetailproduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const product = data.find(obj => obj.id === parseInt(pId));
        setDetailproduct(product);
        setLoading(true);
    }, [pId, data]);

    if(!detailProduct){
        return null;
    }
    // const filtered = data.filter(item => item.id === Number(pId));
    // const finded = data.find(item => item.id === Number(pId));

    return (
        <DetailWrapper>
            {
                !loading ? <Spinner/> :
                <>
                    <DetailHead data={detailProduct}/>
                    <DetailBody detail={detailProduct.detail}/>
                </>
            }
        </DetailWrapper>
    );
};

export default Detail;