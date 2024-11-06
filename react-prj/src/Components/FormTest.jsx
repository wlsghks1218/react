import React, { useState } from 'react';


const FormTest = (props) => {
    // 상태 값
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        gender: '남',
        addr: '강남'
    });


    // input의 onChange가 되었을 때 실행하는 함수
    const inputInfo = e => {
        
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setUser({ ...user, [name]: value });
        // prev 기존 값은 ...prev로 저장하고 바뀐거(rest)만 [key]:value로 변경해주는 것
    };


    // submitHandler
    const submitHandler = e => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
            <form action="#">
                <label>이름</label>
                <input name="name" type="text" onChange={inputInfo} /><br />
                <label>나이</label>
                <input name="age" type="text" onChange={inputInfo} /><br />
                <label>이메일</label>
                <input name="email" type="text" onChange={inputInfo} /><br />
                <label>성별</label>
                <input type="radio" name="gender" value="남자" onChange={inputInfo} defaultChecked/> 남
                <input type="radio" name="gender" value="여자" onChange={inputInfo}/> 여<br />
                <label>지역</label>
                <select name="addr" onChange={inputInfo}>
                    <option value="강남">강남</option>
                    <option value="강서">강서</option>
                    <option value="강동">강동</option>
                    <option value="강북">강북</option>
                </select><br/>
                <input type="submit" value='Click' onClick={submitHandler} /><br />
            </form>
        </div>
    );
};

export default FormTest;