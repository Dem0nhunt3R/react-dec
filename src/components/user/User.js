import React from 'react';
import {Button} from "../button/Button";

const User = ({user}) => {
    const {id,name} = user;

    return (
        <div>
            {id} -- {name} --
            <Button to={id.toString()} state={user}>show details</Button>
        </div>
    );
};

export {User};