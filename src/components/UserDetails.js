import React from 'react';

const UserDetails = ({userById, getId}) => {

    const {id, name, email, phone, username} = userById;

    return (
        <div>
            <h2>{id} -- {name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={() => getId(id)}>{name} posts</button>
        </div>
    );
};

export default UserDetails;