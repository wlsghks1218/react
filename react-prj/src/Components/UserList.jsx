import React from 'react';

// props.children 속성을 자식에게 물려주는 것
const UserList = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default UserList;