import React from "react";
import { ButtonContainerStyled, CloseButtonStyled, ContainerStyled, EnviosStyled, PriceContainerStyled, PriceStyled, ProductContainerStyled, SubtotalStyled, TitleStyled, TotalStyled } from "./ModalCartStyles";
import Increase from "../../UI/Increase/Increase";
import Count from "../../UI/Count/Count";
import Submit from "../../UI/Submit/Submit";

const ModalCart = ({closeModal}) => {
  return (
  <ContainerStyled
    initial={{ translateX: 600 }}
    animate={{ translateX: 0 }}
    exit={{ scale: 0 }}
    transition={{ duration: 0.2 }}
    key='cart-modal'
  >
    <CloseButtonStyled
    whileTap={{scale:0.95}}
    onClick={() => closeModal(false)}>
    X
    </CloseButtonStyled>
    <TitleStyled>
        <h1>Tus Productos</h1>
    </TitleStyled>
    <div>
        <ProductContainerStyled>
            <img src="https://www.partsklassik.com/images/Product/large/2711.jpg" alt="CarDoor" />
            <div>
                <p>Puerta Derecha</p>
                <p>Porsche 911 1.973</p>
                <PriceStyled>$7.500</PriceStyled>
            </div>
            <div>
                <Increase>-</Increase>
                <Count>1</Count>
                <Increase secondary>+</Increase>
            </div>
        </ProductContainerStyled>
        <PriceContainerStyled>
            <SubtotalStyled>
                <p>Subtotal</p>
                <span>$325.463</span>
            </SubtotalStyled>
            <EnviosStyled>
                <p>Envío</p>
                <span>Gratis</span>
            </EnviosStyled>
            <hr />
            <TotalStyled>
                <p>Total</p>
                <PriceStyled>325.463</PriceStyled>
            </TotalStyled>
            <ButtonContainerStyled>
                <Submit value='Iniciar pedido'/>
            </ButtonContainerStyled>
        </PriceContainerStyled>
    </div>


  </ContainerStyled>
  )
};

export default ModalCart;
