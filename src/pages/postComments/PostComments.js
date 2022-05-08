import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostComment} from "../../components";

const PostComments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getPostComments(postId).then(({data}) => setComments([...data]))
    }, [postId]);

    return (
        <div>
            {comments && comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostComments};