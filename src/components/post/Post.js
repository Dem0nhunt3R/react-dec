import React from 'react';

import {Button} from "../button/Button";

const Post = ({post}) => {
    const {id,title} = post;

    return (
        <div>
            {id} -- {title} --
            <Button to={id.toString()} state={post}>details</Button>
            <hr/>
        </div>
    );
};

export {Post};