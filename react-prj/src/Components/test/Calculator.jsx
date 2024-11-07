import React, { useState } from 'react';

const Calculator = () => {
    const [number, setNumber] = useState({
        number1: 0,
        number2: 0,
        result: 0
    })
    const inputNumber = e => {
        const {name, value} = e.target;
        setNumber({...number, [name] : value});   
    };

    const buttonClick = e => {
        const parsedNum1 = parseInt(number.number1);
        const parsedNum2 = parseInt(number.number2);
        switch(e.target.id){
            case "calPlus": setNumber({...number, result: parsedNum1 + parsedNum2})
            break;
            case "calMinus": setNumber({...number, result: parsedNum1 - parsedNum2})
            break;
            case "calMultiply" : setNumber({...number, result: parsedNum1 * parsedNum2})
            break;
            case"calDivide" : setNumber({...number, result: parsedNum1 / parsedNum2})
            break;
            default: throw new Error('그런 버튼 없어여' + e.target.id);
        }
    }


    // const [number1, setNumber1] = useState(0);
    // const [number2, setNumber2] = useState(0);
    // const [result, setResult] = useState(0);
    // const numberChange = (e) => {
    //     switch(e.target.id){
    //         case "num1":setNumber1(e.target.value);
    //         break;
    //         case "num2":setNumber2(e.target.value);
    //         break;
    //         default: throw new Error('그런 숫자 없어여'+e.target.id);
    //     }
    // }

    // const handleCalculator = (e)=>{
    //     const parsedNum1 = parseInt(number1);
    //     const parsedNum2 = parseInt(number2);
    //     switch(e.target.id){
    //         case "calPlus": setResult(parsedNum1 + parsedNum2)
    //         break;
    //         case "calMinus": setResult(parsedNum1 - parsedNum2)
    //         break;
    //         case "calMultiply" : setResult(parsedNum1 * parsedNum2)
    //         break;
    //         case"calDivide" : setResult(parsedNum1 / parsedNum2)
    //         break;
    //         default: throw new Error('그런 버튼 없어여' + e.target.id);
    //     }
    // }
    return (
        // <div>
        //     <h1>계산기</h1>
        //     <input type="number" id="num1" onChange={numberChange} value={number1}/>
        //     <input type="number" id="num2" onChange={numberChange} value={number2}/><br/>
        //     <button id="calPlus" onClick={handleCalculator}>더하기</button>
        //     <button id="calMinus" onClick={handleCalculator}>빼기</button>
        //     <button id="calMultiply" onClick={handleCalculator}>곱하기</button>
        //     <button id="calDivide" onClick={handleCalculator}>나누기</button>
        //     <p>결과 : {result}</p>
        // </div>
            <div>
                <h1>계산기</h1>
                <input type="number" name="number1" onChange={inputNumber}/>
                <input type="number" name="number2" onChange={inputNumber}/><br/>
                <button id="calPlus" onClick={buttonClick}>더하기</button>
                <button id="calMinus" onClick={buttonClick}>빼기</button>
                <button id="calMultiply" onClick={buttonClick}>곱하기</button>
                <button id="calDivide" onClick={buttonClick}>나누기</button>
                <p>결과 : {number.result}</p>
            </div>
    );
};

export default Calculator;