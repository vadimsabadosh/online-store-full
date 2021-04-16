import Admin from './pages/Admin';
import { REGISTRATION_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE } from './utils/consts';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage';
import Auth from './pages/Auth';
import Shop from './pages/Shop';


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
] 



export const publicRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: DEVICE_ROUTE,
    Component: DevicePage
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
] 