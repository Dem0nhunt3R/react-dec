import React from 'react';

const UserPost = ({post}) => {
    const {id,userId,title,body} = post;

    return (
        <div>
            id -- {id} <br/>
            userId -- {userId} <br/>
            title -- {title} <br/>
            body -- {body} <br/>
            <hr/>
        </div>
    );
};

export {UserPost};