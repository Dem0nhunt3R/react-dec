import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './PostsPage.module.css';
import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then(({data}) => setPosts([...data]));
    }, []);

    return (
        <div className={css.box}>
            <div className={css.list}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};