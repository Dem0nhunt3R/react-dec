import React from 'react';
import {Button} from "../button/Button";

const UserDetails = ({user}) => {
    const {id,name,username,email,phone} = user;

    return (
        <div>
            id -- {id} <br/>
            name -- {name} <br/>
            username -- {username} <br/>
            email -- {email} <br/>
            phone -- {phone} <br/>
            <Button to={'posts'}>comments</Button>
        </div>
    );
};

export {UserDetails};