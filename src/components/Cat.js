import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const Cat = ({cat}) => {
    const {id,name} = cat;
    const dispatch = useDispatch();

    return (
        <div>
            {id}. {name}
            <button onClick={()=>dispatch(catActions.catForUpdate({cat}))}>update</button>
            <button onClick={()=>dispatch(catActions.deleteCat({id}))}>delete</button>
        </div>
    );
};

export {Cat};