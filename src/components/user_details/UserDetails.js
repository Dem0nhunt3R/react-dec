import React from 'react';

const UserDetails = ({user, getPosts}) => {

    return (
        <div>
            {user &&
            <div>
                <h2>{user.id} -- {user.name} -- {user.username}</h2>
                <h3>{user.email} -- {user.phone}</h3>
                <button onClick={()=> getPosts(user.id)}>{user.name} posts</button>
            </div>
            }
        </div>
    );
};

export {UserDetails};