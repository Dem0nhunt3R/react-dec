import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {state} = useState();
    const {userId} = useParams();
    const [user, setUser] = useState(state);

    useEffect(() => {
        if (!state) {
            userService.getUserById(userId).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [userId, state]);
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};