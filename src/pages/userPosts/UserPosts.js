import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserPost} from "../../components";

const UserPosts = () => {

    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts(id).then(({data}) => setUserPosts([...data]))
    }, [id]);

    return (
        <div>
            {userPosts.map(userPost => <UserPost key={userPost.id} post={userPost}/>)}
        </div>
    );
};

export {UserPosts};