import React from 'react';

const UserPost = ({post}) => {

    const {id,userId,title,body} = post;

    return (
        <div>
            post id -- {id} <br/>
            user id -- {userId} <br/>
            title: {title} <br/>
            body: {body}
            <hr/>
        </div>
    );
};

export {UserPost};