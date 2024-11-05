import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = ()=>{
        console.log('increase btn clicked');
        setCount(prev => prev + 1);

        setInterval(() => {
            setCount(prev => prev + 1)

        }, 100);

        // setCount(count + 1);
        // setCount(count + 2);
        // setCount(count + 3); <- 이렇게하면 virtualDom에 마지막꺼만 되기때문에 이거만됨
    }

    const decrease = () => {
        setInterval(() => {
            setCount(prev => prev - 1)
            console.log(count);
        }, 100);
    }

    return (
        <div>
         <button onClick={decrease}>minus</button>
         <span>   {count}   </span>
         <button onClick={increase}>plus</button>
        </div>
    );
};

export default Counter;