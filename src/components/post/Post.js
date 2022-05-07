import React from 'react';

const Post = ({post}) => {

    const {id,title} = post;

    return (
        <div>
            {id} -- {title} --
            <button>details</button>
        </div>
    );
};

export {Post};