import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { formatPrice } from '../../Utils/FormatPrice'
import * as cartActions from '../../Redux/Cart/Cart-actions'
import Button from '../UI/Button/Button'
import {
    CardPrice,
    ContainerPrice,
    ProductosCard,
} from './CardsProductosStyles'

const CardProducto = ({ img, title, desc, price, id }) => {

  const dispatch = useDispatch()

  return (
    <ProductosCard>
        <img src={img} alt='' />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>{formatPrice(price)}</CardPrice>
            <Button
            onClick={() => dispatch(cartActions.addToCart({img, title, desc, price, id}))}
            >
              Agregar
              </Button>
        </ContainerPrice>
    </ProductosCard>
  )
}

export default CardProducto