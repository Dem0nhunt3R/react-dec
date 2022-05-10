import React from 'react';

const Cat = ({cat,dispatch}) => {
    return (
        <div>
            {cat}
            <button onClick={()=>dispatch({type:'catDelete',payload:cat})}>delete</button>
        </div>
    );
};

export {Cat};