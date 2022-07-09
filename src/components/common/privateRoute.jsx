import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';

export default function PrivateRoute() {
  const { isAuthenticated } = UseAuth();

  const { pathname: route } = useLocation();

  const publicRoutes = ['/signin'];

  if (!isAuthenticated && !publicRoutes.includes(route)) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}
