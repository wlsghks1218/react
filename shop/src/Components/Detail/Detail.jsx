import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import Spinner from '../Spinner/Spinner';

const DetailWrapper = styled.div`
  margin : 60px auto 0;
  max-width : 1200px;
  width : 80%;
`;

function Detail({data}) {

  const {pId} = useParams();  // 상품의 id (번호)

  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const product = data.find(obj => obj.id === parseInt(pId));
    setDetailProduct(product);
    setLoading(true);
  }, [pId, data]);

  useEffect(()=>{
    if(Object.keys(detailProduct).length > 0 ){
      let storageData = localStorage.getItem('recently');
      if(!storageData){
        storageData = [];
      }else{
        storageData = JSON.parse(storageData);
      }

      // 같은 데이터를 제외
      storageData = storageData.filter(item => item.id !== detailProduct.id);
      
      // 0번 인덱스에 데이터 삽입 - 최근 본 상품을 가장 상단으로
      storageData.unshift(detailProduct);

      // storageData의 길이가 3보다 큰 경우 마지막 인덱스를 제외한 데이터 유지
      if(storageData.length > 3){
        storageData = storageData.slice(0, 3);
      }


      localStorage.setItem('recently', JSON.stringify(storageData));
    }
  }, [detailProduct]);

  if(!detailProduct){
    return null;
  }

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
}

export default Detail;