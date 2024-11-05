import React, { useState } from 'react';

const InputTest = () => {
    const[text, setText] = useState('');
    const handelChangeText = (e) =>[
        setText(e.target.value)
    ]
    const init = () =>{
        setText('');
    }
    return (
        <div>
            <input type="text" onChange={handelChangeText} value={text}/>
            <button onClick={init}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </div>
    );
};

export default InputTest;