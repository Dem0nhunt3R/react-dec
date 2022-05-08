import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {postId} = useParams();
    const {state} = useState();
    const [post, setPost] = useState(state);

    useEffect(() => {
        if (!state) {
            postService.getPostById(postId).then(({data}) => setPost(data));
        } else {
            setPost(state);
        }
    }, [postId, state]);

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};