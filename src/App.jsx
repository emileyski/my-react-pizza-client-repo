import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Login from './features/login/Login';
import Signup from './features/signup/Signup';
import UserProfile, {
  loader as userProfileLoader,
} from './features/user/UserProfile';
import PizzaDetails, {
  loader as pizzaDetailsLoader,
} from './features/menu/PizzaDetails';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/profile',
        element: <UserProfile />,
        loader: userProfileLoader,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: '/pizza/:id',
        element: <PizzaDetails />,
        errorElement: <Error />,
        loader: pizzaDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
