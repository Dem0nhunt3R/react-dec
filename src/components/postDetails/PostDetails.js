import React from 'react';

import {Button} from "../button/Button";
import {Outlet} from "react-router-dom";

const PostDetails = ({post}) => {
    const {id,userId,title,body} = post;

    return (
        <div>
            <div>
                post id: {id} <br/>
                user id: {userId} <br/>
                title: {title} <br/>
                body: {body} <br/>
                <Button to={'comments'}>comments</Button>
                <hr/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostDetails};