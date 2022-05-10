import React from 'react';

const Cat = ({cat}) => {
    return (
        <div>
            {cat}
            <button>delete</button>
        </div>
    );
};

export {Cat};