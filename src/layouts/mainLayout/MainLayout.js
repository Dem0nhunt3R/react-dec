import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Button} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <Link to={'/home'}>Home</Link>
                <Button to={'/users'}>Users</Button>
                <Button to={'/posts'}>Posts</Button>
                <Link to={'/about'}>About</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};