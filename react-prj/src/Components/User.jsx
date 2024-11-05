import React from 'react';

const User = ({name, age}) => {
    return (
        <div>
            <h1>안녕하세요. 제 이름은{name} 이고, 나이는 {age} 입니다.</h1>
        </div>
    );
};

export default User;