import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = ()=>{
        console.log('increase btn clicked');
        setCount(prev => prev + 1);

        // setInterval(() => {
        //     setCount(prev => prev + 1)
        // }, 100);

        // setCount(count + 1);
        // setCount(count + 2);
        // setCount(count + 3); <- 이렇게하면 virtualDom에 마지막꺼만 되기때문에 이거만됨
    }


    useEffect(()=>{
        // 컴포넌트가 마운트 된 이후
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
        // 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트 시에 단 한 번만 실행
        // 의존성 배열 생략 시 컴포넌트 업데이트 마다 실행

        return()=>{
            //컴포넌트가 언마운트 되기 전에 실행
        }
    }, [])
    // [의존성 변수1, 의존성 변수2]


    const decrease = () => {
        setCount(prev => prev - 1)
        // setInterval(() => {
        // }, 100);
    }
    const init = () => {
        clearInterval();
        setCount(0);
    }

    return (
        <div>
         <button onClick={decrease}>minus</button>
         <span>   {count}   </span>
         <button onClick={increase}>plus</button>
         <button onClick={init}>초기화</button>
        </div>
    );
};

export default Counter;