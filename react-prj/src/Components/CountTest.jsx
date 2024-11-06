import React, { useEffect, useState } from 'react';

const CountTest = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const numCntPlus = () => {
        setCount(prev => prev + 1);
    };
    
    useEffect(()=>{
        console.log(count);
        if (count > 0 && count <3) {
            setNumber(prev => prev + 1);
        }
    }, [count])


    return (
        <div>
            <span>number : {number}</span><br/>
            <span>count : {count}</span><br/>
            <button onClick={numCntPlus}>Click!!</button>
        </div>
    );
};

export default CountTest;