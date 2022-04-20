import React from 'react';

const User = ({user,getUserById}) => {

    const {id,name} = user;

    return (
        <div>
            <span>{id} -- {name}</span>
            <button onClick={()=>getUserById(id)}>Details</button>
        </div>
    );
};

export default User;