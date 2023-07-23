import { Helmet } from "react-helmet";
import { LoginForm } from "components/LoginForm/LoginForm";


// сторінка авторизації юзера =============================================================================================

export default function Login() {

    return (
        <section>
          <Helmet><title>Login</title></Helmet>
          <LoginForm />
        </section>
      );
}

//==========================================================================================================================