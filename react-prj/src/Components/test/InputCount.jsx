import { useRef } from "react";

const InputCount = ({setCount, setMaxCount}) => {
    const inputRef = useRef(null);


    const changeInput = (e) => {
        if(inputRef.current.value <= 0){
            alert("1이상의 값을 설정하세요.");
            return;
        }
        setMaxCount(inputRef.current.value);
        setCount(0);
    }

    return (
        <div>
            <p>최대 인원을 정하시오.</p>
            <input type="number" ref={inputRef}/><button onClick={changeInput}>확인</button>
        </div>
    );
};

export default InputCount;