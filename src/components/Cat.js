import React from 'react';

const Cat = ({cat,dispatch}) => {
    const {id,catName} = cat;

    return (
        <div>
            {id}. {catName}
            <button onClick={()=>dispatch({type:'catDelete',payload:cat})}>delete</button>
        </div>
    );
};

export {Cat};