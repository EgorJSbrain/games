import { memo, Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { LogoIcon } from './icons/LogoIcon'
import { mainRoutes } from './Routes';

import PageLoader from '@/components/PageLoader';
import './App.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { authLoadingSelector, gamesLoadingSelector } from '@/store/selectors';
import { STORAGE_TOKEN_NAME } from './constants/global';
import { checkMe } from './store/actions/auth';

const App = () => {
  const dispatch = useAppDispatch();
  const routing = useRoutes(mainRoutes);
  const isAuthloading = useAppSelector(authLoadingSelector);
  const isGamesloading = useAppSelector(gamesLoadingSelector);
  const isLoading = isAuthloading || isGamesloading;

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_TOKEN_NAME);

    if (token) {
      const decodedValue = atob(token);
      const [username, password] = decodedValue.split(',');
      dispatch(checkMe({
        username,
        password,
      }))

    }
  }, []);

  return (
    <>
      <div className="app-header">
        <LogoIcon />
      </div>

      <div className="app-wrapper">
        {isLoading && <PageLoader />}
        <Suspense>
          {routing}
        </Suspense>
      </div>
    </>
  );
}

export default memo(App)
