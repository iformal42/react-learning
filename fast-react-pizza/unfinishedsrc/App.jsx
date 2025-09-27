import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import Menu, { loader  as menuLoader } from "./feature/menu/Menu"
import Cart from "./feature/cart/Cart"
import Order, { loader as orderLoader} from "./feature/order/Order"
import CreateOrder, { action as createOrderAction} from "./feature/order/CreateOrder"
import AppLayout from "./ui/AppLayout"
import "./index.css"
import NotFound from "./ui/Error"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement:<NotFound/>,
    children: [
      {

        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      }, {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader:orderLoader
      }

    ]
  }

])

function App() {

  return <RouterProvider router={router} />
}

export default App
