import React from 'react';
import {Link} from "react-router-dom";

const Button = ({children, to, state}) => {
    return (
        <Link to={to} state={state}>
            <button>{children}</button>
        </Link>
    );
};

export {Button};