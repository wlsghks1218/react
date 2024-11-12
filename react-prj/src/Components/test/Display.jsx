import React, { useState } from 'react';

const Display = ({maxCount, count, setCount}) => {
    const plusBtn = () => {
        setCount(count => count + 1);
    }
    const minusBtn = () => {
        setCount(count => count - 1);
    }
    return (
        <div style={{ visibility: maxCount === 0 ? 'hidden' : 'visible' }}>
            <p>총 {count} / {maxCount}명</p>
            <button onClick={plusBtn} disabled={count >= maxCount}>증가</button><button onClick={minusBtn} disabled={count === 0}>감소</button>
            <p style={{display: count >= maxCount ? 'block' : 'none', color: 'red'}}>인원이 가득 찼습니다.</p>
        </div>
    );
};

export default Display;