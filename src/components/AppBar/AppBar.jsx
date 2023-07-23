import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';


// навігаційний рядок зверху застосунку ==============================================================
    export const AppBar = () => {
    
        const { isLoggedIn } = useAuth();                            // дістаємо зі стора індикатор isLoggedIn, який сигналізує залогінився юзер чи ні

        return (
                    <header className={css.header}>
                        <Navigation/>                                {/* рендеримо меню навігації по застосунку - ліва частина хедера */}
                        {isLoggedIn ? <UserMenu/> : <AuthNav/>}      {/* якщо юзер залогінився, то рендеримо UserMenu, якщо не залогінився, то рендеримо компонент навігації для авторизації AuthNav - права частина хедера*/}
                    </header>
                );
    };
//====================================================================================================