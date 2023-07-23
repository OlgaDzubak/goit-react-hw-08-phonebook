import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { paths } from 'routes';
import css from './navigation.module.css';
import { MenuColorActive, MenuColor } from '../../styleVars';

// компонент навігації по сторінках (ліва частина хедера) =========================================================
export const Navigation = () => {

  const { isLoggedIn } = useAuth();                                                           // дістаємо зі стора індикатор isLoggedIn, який сигналізує залогінився юзер чи ні
  const location = useLocation().pathname;

  return (
    <nav className={css.nav}>

      <NavLink className={css.nav_link} 
               to={paths.HOME} 
               style={(location === paths.HOME) ? MenuColorActive : MenuColor}
      >Home
      </NavLink>

      { isLoggedIn && <NavLink className={css.nav_link} 
                               to={paths.CONTACTS}
                               style={(location === paths.CONTACTS) ? MenuColorActive : MenuColor}
                      >Contacts
                      </NavLink> 
      }                                                                           {/* рендеримо посилання на сторінку контактів тільки якщо юзер залогінився*/}
    </nav>
  );
};
//===============================================================================================================