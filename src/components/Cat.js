import React from 'react';

const Cat = ({cat:{id,name}}) => {
    return (
        <div>
            {id}. {name}
        </div>
    );
};

export {Cat};