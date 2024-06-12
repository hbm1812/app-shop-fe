import Login from "../pages/Account/Login";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Product from "../pages/Product/Product";
import Shop from "../pages/Shop/Shop";

export const routes =[
    {
        path: '/',
        page: Home,
        isShowHeader:true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader:true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader:false
    },
    
    {
        path: '/shop',
        page: Shop,
        isShowHeader:true
    },
    {
        path: '/product',
        page: Product,
        isShowHeader:true
    }
]