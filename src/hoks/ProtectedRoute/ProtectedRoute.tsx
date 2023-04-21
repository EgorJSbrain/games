import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/selectors';

import { ROUTES, STORAGE_TOKEN_NAME } from '@/constants/global';

type ProtectedRouteProps = {
  children: JSX.Element;
  privateRoute?: boolean;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  privateRoute,
  children,
}) => {
  const user = useAppSelector(userSelector);
  const token = localStorage.getItem(STORAGE_TOKEN_NAME);
  const location = useLocation();
  const isLoginPage = location.pathname.includes(ROUTES.login)

  if (privateRoute && !user && !token) {
    return <Navigate to={ROUTES.login} />;
  }

  if (isLoginPage && token) {
    return <Navigate to={ROUTES.games} />;
  }

  return children;
};
