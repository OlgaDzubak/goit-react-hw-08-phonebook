import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Password } from 'components/Password/Password';
import css from './registerForm.module.css';

// компонет - форма регістрації ====================================================================

    export const RegisterForm = () => {

        const dispatch = useDispatch();

        const handleSubmit = event => {

            event.preventDefault();
            const form = event.currentTarget;

            dispatch(
                register(                                       // функція регістрації нового юзера (приймає об'єкт даних з форми регастрації)
                    {
                        name: form.elements.name.value,         // забираємо з форми введене ім'я юзера
                        email: form.elements.email.value,       // забираємо з форми введений e-mail юзера
                        password: form.elements.password.value, // забираємо з форми введений пароль юзера
                    }
                )
            );
            form.reset();
        };
 
        return (
                <div className={css.registrForm_div}>
                    <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">

                        <label className={css.label_name}>
                        Username
                            <input className={css.input_name}
                                type="text" 
                                name="name"
                                required
                                placeholder='Name'
                                autoComplete="off"
                            />
                        </label>

                        <label className={css.label_email}>
                            Email
                            <input  className={css.input_email}
                                type="email" 
                                name="email" 
                                pattern ="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                required
                                placeholder='example@mail.com'
                            />
                        </label>

                        <Password pattern="[a-zA-Z0-9]{8,15}"/>

                        <button className={css.submitBtn} type="submit">Register</button>
                        
                    </form>
                </div>
        );
    };
//==================================================================================================