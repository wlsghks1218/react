import React, { useState } from 'react';

function useInput(initialValue){
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return{
        value,
        onChange : handleChange
    }
}

const HookTest = () => {
    const firstName = useInput('');
    const lastName = useInput('');
    console.log(firstName);
    console.log(lastName);
    return (
        <div>
            <input type="text" {...firstName}></input>
            <input type="text" {...lastName}></input>
            <p>Full Name : {firstName.value}{lastName.value}</p>
        </div>
    );
};

export default HookTest;