import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import User from "./pages/users/User";


const routes = [
    { path: '/', element: <Dashboard />},
    { path: '/products', element: <Products />},
    { path: '/users', element: <User />},
]

export default routes;