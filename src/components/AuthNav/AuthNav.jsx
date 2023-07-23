import { NavLink, useLocation } from 'react-router-dom';
import css from './authNav.module.css';
import { paths } from '../../routes';
import { MenuColorActive, MenuColor } from '../../styleVars';

// компонент навігації для регістрації та авторизації юзера (права части хедера) =====================
export const AuthNav = () => {
  
  const location = useLocation().pathname;

  return (
    <div className={css.auth_div}>
      <NavLink className={css.auth_link} 
               to="/register" 
               style={(location === paths.REGISTER) ? MenuColorActive : MenuColor}
      >Register</NavLink>

      <NavLink className={css.auth_link} 
               to="/login" 
               style={(location === paths.LOGIN) ? MenuColorActive : MenuColor}
      >Login</NavLink>
    </div>
  );
};
//====================================================================================================