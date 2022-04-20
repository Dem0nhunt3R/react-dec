import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../user_details/UserDetails";
import css from "./Users.module.css";
import {Posts} from "../posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const userById = async (id) => {
        const {data} = await userService.getUserById(id);
        setUser(data);
    }

    const getPosts = async (id) => {
        const {data} = await userService.getUserPosts(id);
        setPosts(data);
    }

    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <div className={css.usersBox}>
                <div>{users.map(user => <User key={user.id} user={user} userById={userById}/>)}</div>
                <div><UserDetails user={user} getPosts={getPosts}/></div>
            </div>
            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export {Users};