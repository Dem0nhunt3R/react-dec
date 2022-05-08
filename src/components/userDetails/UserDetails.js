import React from 'react';
import {Outlet} from "react-router-dom";

import {Button} from "../button/Button";

const UserDetails = ({user}) => {
    const {id, name, username, email, phone} = user;


    return (
        <div>
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <Button to={'posts'}>posts</Button>
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetails};