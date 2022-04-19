import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id}--{name}--{email}
        </div>
    );
};

export default User;