import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/main';
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage /> },
        { path: 'ido', element: <IdoPage /> },
        { path: 'shop-t-bsc-1102', element: <ShopPage /> },
        { path: 'market', element: <MarketPage /> },
        { path: 'my-nft', element: <MyNftPage /> },
        { path: '404', element: <NotFound /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const IdoPage = Loadable(lazy(() => import('../pages/ido')));
const ShopPage = Loadable(lazy(() => import('../pages/shop')));
const MarketPage = Loadable(lazy(() => import('../pages/market')));
const MyNftPage = Loadable(lazy(() => import('../pages/mynft')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
