import App from "../App";
import { Shop } from "../pages/Shop";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Product } from "../pages/Product";
const routes = [
    {
        path: "/",
        element: <App /> ,
        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop />},
            { path: "/cart", element: <Cart />},
            { path: "/product", element: <Product /> }
        ],
    }
]

export default routes;