import Home from "../pages/Home";
import Product from "../pages/Product";
import Customer from "../pages/Customer";
import Order from "../pages/Order";
import SaleEvent from "../pages/SaleEvent";
import Message from "../pages/Message";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/order', component: Order },
    { path: '/customer', component: Customer },
    { path: '/salesevent', component: SaleEvent },
    { path: '/message', component: Message },
];

export { publicRoutes };