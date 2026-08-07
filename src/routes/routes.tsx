import App from "../App";
import { Shop } from "../pages/Shop";
import { Home } from "../pages/Home";
const routes = [
    {
        path: "/",
        element: <App /> ,
        children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop />}
        ],
    }
]

export default routes;