import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Button} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/home'>Home</NavLink>
                <Button to='/users'>Users</Button>
                <Button to='/posts'>Posts</Button>
                <NavLink to='/about'>About</NavLink>
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};