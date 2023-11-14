import Home from "../pages/Home";
import Product from "../pages/Product";
import Customer from "../pages/Customer";
import Order from "../pages/Order";
import SaleEvent from "../pages/SaleEvent";
import Message from "../pages/Message";
import ProductAddNew from "../pages/ProductAddNew";

import NoSearchLayout from "../components/Layout/NoSearchLayout";
import MessageLayout from "../components/Layout/MessageLayout";
import OrderDetail from "../pages/OrderDetail";

import routes from "../config/routes";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
    { path: routes.home, component: Home, layout: NoSearchLayout },
    { path: routes.product, component: Product },
    { path: routes.addProduct, component: ProductAddNew, layout: NoSearchLayout },
    { path: routes.detailProduct, component: ProductDetail, layout: NoSearchLayout },
    { path: routes.order, component: Order, layout: NoSearchLayout },
    { path: routes.detailOrder, component: OrderDetail, layout: NoSearchLayout },
    { path: routes.customer, component: Customer, layout: NoSearchLayout },
    { path: routes.salesevent, component: SaleEvent, layout: NoSearchLayout },
    { path: routes.message, component: Message, layout: MessageLayout },

];

export { publicRoutes };