import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {state} = useState();
    const {id} = useParams();
    const [user, setUser] = useState(state);

    useEffect(() => {
        if (!state) {
            userService.getUserById(id).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [id, state]);
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};