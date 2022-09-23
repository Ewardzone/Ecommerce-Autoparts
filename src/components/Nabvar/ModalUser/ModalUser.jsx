import React from 'react'
import {Link} from 'react-router-dom'
import {
    HrStyled,
    ModalContainerStyled,
    UsernameStyled,
} from './ModalUserStyles'

const ModalUser = ({closeModal}) => {
  return (
    <ModalContainerStyled
    initial={{translateX: 600}}
    animate={{translateX: 0}}
    exit={{scale: 0}}
    transition={{duration: 0.2}}
    key='cart-user'
    >
        <UsernameStyled>Hola Eduardo Reinoso</UsernameStyled>
        <HrStyled/>
        <Link onClick={() =>closeModal(false)} to='/mis-ordenes'>Mis Ordenes</Link>
        <p>Cerrar sesión</p>
    </ModalContainerStyled>
  )
}

export default ModalUser