import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserPost} from "../../components";

const UserPosts = () => {

    const {userId} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getUserPosts(userId).then(({data}) => setUserPosts([...data]))
    }, [userId]);

    return (
        <div>
            {userPosts.map(userPost => <UserPost key={userPost.id} post={userPost}/>)}
        </div>
    );
};

export {UserPosts};