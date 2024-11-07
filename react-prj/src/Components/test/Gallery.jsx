import React, { useEffect, useState } from 'react';

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
];

const Gallery = () => {
    const [count, setCount] = useState(0);

    const buttonClick = (e) => {
        if (e.target.id === "before") {
            setCount(count => count -1);
        } else {
            setCount(count => count +1);
        }
    };
    useEffect(()=>{
        if(count === 6){
            setCount(0)
        }else if(count === -1){
            setCount(5)
        }

    }, [count])
    return (
        <div>
            <button id="before" onClick={buttonClick}>이전</button>
            <img src={images[count]} alt="" width="300px" height="300px" />
            <button id="next" onClick={buttonClick}>다음</button>
        </div>
    );
};

export default Gallery;