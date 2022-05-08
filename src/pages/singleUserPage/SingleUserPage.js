import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useState();
    const [user, setUser] = useState(state);
    const {userId} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getUserById(userId).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [state, userId]);

    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SingleUserPage};