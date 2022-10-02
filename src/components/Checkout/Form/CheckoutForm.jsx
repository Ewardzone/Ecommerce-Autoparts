import React from 'react';

import { checkoutInitialValues } from '../../../Formik/InitialValues'
import { checkoutValidationSchema } from '../../../Formik/ValidationSchema'
import Loader from '../../UI/Loader/Loader'

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({cartItems, price, shippingCost}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
      >
        {({ isSubmitting }) => (
        <Form>
          <Input
            name='name'
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
          name='cellphone'
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
          name='location'
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
          name='address'
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
        
        <div>
        <Submit>
                {isSubmitting ? <Loader /> : 'Iniciar Pedido'}
              </Submit>
        </div>
        </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;