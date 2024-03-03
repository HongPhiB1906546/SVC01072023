import React from "react"
import {Routes, Route } from 'react-router-dom';
import HomePage from './page/user/homepage';
import { ROUTERS } from './utils/router';
const RenderUserRouter=() => {
    const userRouters= [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
    ]    
    return (
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                ))}
               
            
        </Routes>
    );
};
const RouterCustom = ()=> {
    return <RenderUserRouter/>;
};

export default RouterCustom;