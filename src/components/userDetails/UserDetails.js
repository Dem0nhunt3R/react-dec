import React from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {Button} from "../button/Button";

const UserDetails = ({user}) => {
    const {pathname} = useLocation();
    const {id, name, username, email, phone} = user;


    return (
        <div>
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <Button to={pathname + '/posts'} state={id}>posts</Button>
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetails};