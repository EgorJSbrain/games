import Games from '@/views/Games';
import LogIn from '@/views/Login';
import NotFound from '@/views/NotFound';

import { ROUTES } from '@/constants/global';
import { ProtectedRoute } from '@/hoks/ProtectedRoute/ProtectedRoute';
import AboutUs from './views/AboutUs';

const mainRoutes = [
  {
    path: ROUTES.login,
    element: <ProtectedRoute><LogIn /></ProtectedRoute>,
  },
  {
    path: ROUTES.home,
    element: <ProtectedRoute><AboutUs /></ProtectedRoute>,
  },
  {
    path: ROUTES.games,
    element: <ProtectedRoute privateRoute><Games /></ProtectedRoute>,
  },
  {
    path: "*",
    login: false,
    element: <NotFound />,
  },
];

export { mainRoutes };
