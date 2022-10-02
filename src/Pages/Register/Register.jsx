import React from 'react';
import { Formik } from 'formik';
import { registerInitialValues } from '../../Formik/InitialValues';
import { registerValidationSchema } from '../../Formik/ValidationSchema';
import Submit from '../../components/UI/Submit/Submit';
import LoginInput from '../../components/UI/Input/Input';
import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  Form,
} from './RegisterStyles';
// import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import useRedirect from '../../Hooks/useRedirect';


const Register = () => {

useRedirect('/')

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <p>O puedes ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'         
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt=''
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>


    </LoginContainerStyled>
  );
};

export default Register;