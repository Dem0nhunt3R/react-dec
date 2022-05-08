import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/mainLayout/MainLayout";
import {
    AboutPage,
    HomePage,
    NotFoundPage,
    PostComments,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UserPosts,
    UsersPage
} from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userId'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<PostComments/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;