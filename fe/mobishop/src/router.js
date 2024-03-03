import {Routes, Route } from 'react-router-dom';
import HomePage from './page/user/homepage';
import { ROUTERS } from './utils/router';
const renderUserRouter=() => {
    const userRouters= [
        {
            path: ROUTERS.USER.path,
            component: () => <HomePage/>
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
    return renderUserRouter;
};

export default RouterCustom;