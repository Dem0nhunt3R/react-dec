import React, {useEffect, useState} from 'react';
import css from './Users.module.css';

import User from "./User";
import UserDetails from "./UserDetails";
import {userService} from "../services";
import Post from "./Post";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = async (id) => {
        const {data} = await userService.getUserById(id);
        setUser(data);
    }

    const getUserPosts = async (id) => {
        const {data} = await userService.getPosts(id);
        setPosts(data);
    }

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <div className={css.userBox}>
                <div>
                    {users.map(value => <User key={value.id} user={value} getUserById={getUser}/>)}
                </div>
                <div>
                    {user && <UserDetails userById={user} getId={getUserPosts}/>}
                </div>
            </div>
            <div>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
        </div>

    );
};

export default Users;