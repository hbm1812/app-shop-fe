import Login from "../pages/Account/Login";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routes =[
    {
        path: '/',
        page: Home,
        isShowHeader:true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader:false
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader:false
    }
]