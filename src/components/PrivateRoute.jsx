import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { paths } from '../routes';

//===================================================================================================
export const PrivateRoute = ({ component: Component, redirectTo = paths.HOME}) => {

  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
//===================================================================================================