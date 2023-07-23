import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { paths } from 'routes';


const HomePage = lazy(() => import('../pages/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));
const ContactPage = lazy(() => import('../pages/Contacts.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing user...</b>) : (
     <Routes>
      <Route path={paths.HOME} element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path={paths.REGISTER} element={<RestrictedRoute redirectTo={paths.CONTACTS} component={<RegisterPage/>}/>}/>
        <Route path={paths.LOGIN} element={<RestrictedRoute redirectTo={paths.CONTACTS} component={<LoginPage/>}/>}/>
        <Route path={paths.CONTACTS} element={<PrivateRoute redirectTo={paths.LOGIN} component={<ContactPage/>}/>}/>
        <Route path='*' element={<NotFound/>}/> 
      </Route>
    </Routes>
  );
};