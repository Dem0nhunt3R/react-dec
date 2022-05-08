import React from 'react';

const PostComment = ({comment}) => {
    const {id, postId, email, name, body} = comment;

    return (
        <div>
            id -- {id} <br/>
            post id -- {postId} <br/>
            name -- {name} <br/>
            email -- {email} <br/>
            body: {body}
            <hr/>
        </div>
    );
};

export {PostComment};