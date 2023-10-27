import Home from "../pages/Home";
import Product from "../pages/Product";
import Customer from "../pages/Customer";
import Order from "../pages/Order";
import SaleEvent from "../pages/SaleEvent";
import Message from "../pages/Message";
import ProductAddNew from "../pages/ProductAddNew";

import NoSearchLayout from "../components/Layout/NoSearchLayout";
import MessageLayout from "../components/Layout/MessageLayout";

const publicRoutes = [
    { path: '/', component: Home, layout: NoSearchLayout },
    { path: '/product', component: Product },
    { path: '/order', component: Order, layout: NoSearchLayout },
    { path: '/customer', component: Customer, layout: NoSearchLayout },
    { path: '/salesevent', component: SaleEvent, layout: NoSearchLayout },
    { path: '/message', component: Message, layout: MessageLayout },
    { path: '/product/newproduct', component: ProductAddNew, layout: NoSearchLayout },
];

export { publicRoutes };