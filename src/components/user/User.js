import React from 'react';

const User = ({user, userById}) => {
    const {id, name} = user;

    const getUserId = () => {
        userById(id);
    }

    return (
        <div>
            <span>{id} -- {name}</span>
            <button onClick={getUserId}>user info</button>
        </div>
    );
};

export {User};