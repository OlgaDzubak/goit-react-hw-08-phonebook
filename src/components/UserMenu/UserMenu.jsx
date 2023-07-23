import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, <a className={css.userEmail} href={`mailto:${user.email}`}>{user.email}</a></p>
      <NavLink  className={css.userMenu_link} onClick={() => dispatch(logOut())}>Logout
      </NavLink>
    </div>
  );
};
