import React from 'react';

const PostComment = ({comment}) => {
    const {postId,id,name,email,body} = comment;

    return (
        <div>
            postId -- {postId} <br/>
            id -- {id} <br/>
            name -- {name} <br/>
            email -- {email} <br/>
            body -- {body} <br/>
            <hr/>
        </div>
    );
};

export {PostComment};