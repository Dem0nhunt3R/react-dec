import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useState();
    const {postId} = useParams();
    const [post, setPost] = useState(state);

    useEffect(() => {
        if (!state)
            postService.getPostById(postId).then(({data}) => setPost(data));
        else
            setPost(state);
    }, [state, postId]);

    return (
        <div>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SinglePostPage};