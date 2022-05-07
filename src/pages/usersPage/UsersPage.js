import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css';
import {userService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div className={css.box}>
            <div className={css.list}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.details}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};