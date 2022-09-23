import React from 'react'
import {Link} from 'react-router-dom'
import {
    FooterContainerStyled,
    LinksContainerStyled,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled
        className='links'>
            <Link to='/' style={{paddingLeft: '2rem'}}>Términos de uso</Link>
            <Link to='/' style={{paddingLeft: '2rem'}}>Trabaja con Nosotros</Link>
            <Link to='/' style={{paddingLeft: '2rem'}}>Soporte</Link>
        </LinksContainerStyled>
        <p>
            Hecho por Ewardzone para <span>NUCBA</span>
        </p>
    </FooterContainerStyled>
  )
}

export default Footer