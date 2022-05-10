import React from 'react';

const Cat = ({cat,catDelete}) => {
    return (
        <div>
            {cat}
            <button onClick={()=>catDelete(cat)}>delete</button>
        </div>
    );
};

export {Cat};