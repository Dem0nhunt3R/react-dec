import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from './UserPostPage.module.css';
import {userService} from "../../services";
import {UserPost} from "../../components";

const UserPostsPage = () => {
    const {userId} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts(userId).then(({data}) => setUserPosts([...data]))
    }, [userId]);

    return (
        <div className={css.list}>
            {userPosts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};