import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';


// сторінка регістрації юзера ============================================================================================
export default function Register() {
  
    return (
        <section>
          <Helmet><title>Registration</title></Helmet>
          <RegisterForm />
        </section>
      );
}
//==========================================================================================================================