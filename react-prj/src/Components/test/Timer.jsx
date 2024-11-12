import React, { useEffect, useState } from 'react';

const Timer = () => {
    // const [count, setCount] = useState(0);
    // const [isRunning, setIsRunning] = useState(false);
    
    // useEffect(()=>{
    //     let timer;
    //     if(isRunning){
    //         timer = setInterval(() => {
    //             setCount(count => count + 1);
    //         }, 1000);
    //     }
    //     return () => clearInterval(timer);  

    // }, [isRunning]);
    // const startTimer = () => setIsRunning(true);
    // const stopTimer = () => setIsRunning(false);
    // const resetTimer = () => {
    //     setCount(0);
    //     setIsRunning(false);
    // }

    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(null);

    const startTimer = () => {
        if (!timer) {
            const newTimer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 0.01);
            setTimer(newTimer);
        }
    };

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setCount(0);
    }

    return (
        <div>
            <h1>05_타이머 - useEffect</h1>
            <h1>Timer</h1>
            <p>경과 시간 : {count} 초</p>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>정지</button>
            <button onClick={resetTimer}>초기화</button>
        </div>
    );
};

export default Timer;