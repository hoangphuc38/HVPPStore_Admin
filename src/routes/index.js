import Login from '../pages/Login';
import Home from "../pages/Home";
import Product from "../pages/Product";
import Customer from "../pages/Customer";
import Order from "../pages/Order";
import SaleEvent from "../pages/SaleEvent";
import Message from "../pages/Message";
import ProductAddNew from "../pages/ProductAddNew";
import OrderDetail from "../pages/OrderDetail";
import ProductDetail from "../pages/ProductDetail";
import StatisticBestSeller from "../pages/StatisticBestSeller";
import StatisticRevenueContributor from "../pages/StatisticRevenueContributor";
import StatisticRevenueSales from "../pages/StatisticRevenueSales";

import NoSearchLayout from "../components/Layout/NoSearchLayout";
import MessageLayout from "../components/Layout/MessageLayout";

import routes from "../config/routes";
import LoginLayout from '../components/Layout/LoginLayout';

const publicRoutes = [
    { path: '/' },
    { path: routes.login, component: Login, layout: LoginLayout },
    { path: routes.home, component: Home, layout: NoSearchLayout },
    { path: routes.product, component: Product },
    { path: routes.addProduct, component: ProductAddNew, layout: NoSearchLayout },
    { path: routes.detailProduct, component: ProductDetail, layout: NoSearchLayout },
    { path: routes.order, component: Order, layout: NoSearchLayout },
    { path: routes.detailOrder, component: OrderDetail, layout: NoSearchLayout },
    { path: routes.customer, component: Customer, layout: NoSearchLayout },
    { path: routes.salesevent, component: SaleEvent, layout: NoSearchLayout },
    { path: routes.message, component: Message, layout: MessageLayout },
    { path: routes.statisticBestSeller, component: StatisticBestSeller, layout: NoSearchLayout },
    { path: routes.statisticrRevenueContributor, component: StatisticRevenueContributor, layout: NoSearchLayout },
    { path: routes.statisticRevenueSales, component: StatisticRevenueSales, layout: NoSearchLayout },

];

export { publicRoutes };