import React from 'react';

import {Button} from "../button/Button";

const PostDetails = ({post}) => {
    const {userId,id,title,body} = post;

    return (
        <div>
            userId -- {userId} <br/>
            id -- {id} <br/>
            title -- {title} <br/>
            body -- {body} <br/>
            <Button to={'comments'}>details</Button>
            <hr/>
        </div>
    );
};

export {PostDetails};