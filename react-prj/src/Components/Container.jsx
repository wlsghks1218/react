import React from 'react';
import '../css/Container.css';
import UserList from './UserList';
import User from './User';

const Container = (props) => {

    const users = [
        {name:'kim', age:10},
        {name:'lee', age:20},
        {name:'park', age:30}
    ]


    // const obj = {
    //     header : ['품목', '가격'],
    //     data : [
    //         {product : '과자', price : '1000원'},
    //         {product : '사탕', price : '2000원'},
    //         {product : '인형', price : '3000원'}
    //     ]
    // }

    // const userList = users.map((user, index) => {
    //     return <User key={index} name={user.name} age={user.age}/>
    // });

    const filteredUserList = users.filter(user => user.age>=20)

    return (
        <div>
            {props.children}
            <UserList>
                {/* {userList} */}
                {filteredUserList.map((users, index) => (<User key={index} name={users.name} age = {users.age}/>))}
            </UserList>

            {/* <table>
                <thead>
                    <tr>
                        {obj.header.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {obj.data.map((data, index)=> (
                        <tr key={index}>
                            <th>{data.product}</th>
                            <th>{data.price}</th>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default Container;