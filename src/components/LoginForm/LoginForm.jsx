import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Password } from 'components/Password/Password';
import css from './loginForm.module.css';


// компонент - форма для авторизації юзера ===================================================

    export const LoginForm = () => {

        const dispatch = useDispatch();

        const handleSubmit = (event) => {
            
            event.preventDefault();
            const form = event.currentTarget;

            dispatch(logIn({
                            "email": form.elements.email.value,
                            "password": form.elements.password.value
                           })
                    );
            form.reset();
        };

        return (
            <div className={css.loginForm_div}>
                <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">

                    <label className={css.label_email}>
                        Email
                        <input className={css.input_email}
                            type="email" 
                            name="email" 
                            required
                            placeholder='example@mail.com'
                        />
                    </label>

                    <Password/>

                    <button type="submit" className={css.submitBtn}>Log In</button>

                </form>
            </div>
        );
    };

//===========================================================================================