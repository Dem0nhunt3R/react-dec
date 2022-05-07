import React, {useEffect, useState} from 'react';

import css from './PostsPage.module.css';
import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts().then(({data}) => setPosts([...data]));
    }, []);

    return (
        <div className={css.content}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};