import Increase from '../../UI/Increase/Increase';
import Submit from '../../UI/Submit/Submit';
import Count from '../../UI/Count/Count';
import { MdOutlineClose } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import * as cartActions from '../../../Redux/Cart/Cart-actions'
import {
CloseButtonContainerStyled,
  ButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductContainerStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
  MainContainerStyled,
  ProductsWrapperStyled
} from './ModalCartStyles';


const ModalCart = ({ closeModal }) => {

  const dispatch = useDispatch()

  return (
    <ContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key='cart-modal'
    >
    <CloseButtonContainerStyled>
      <CloseButtonStyled
        className='close__modal '
        whileTap={{ scale: 0.95 }}
        onClick={() => dispatch(cartActions.toggleHiddenCart())}
      >
        <MdOutlineClose size='24px'/>
      </CloseButtonStyled>
      </CloseButtonContainerStyled>
      <MainContainerStyled>
      <TitleStyled>
        <h1>Tus Productos</h1>
        <Increase
            bgColor='#fff05c'
        >
            <IoMdTrash/>
        </Increase>
      </TitleStyled>

      </MainContainerStyled>
     
        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <span>$4890</span>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envio</p>
            <span>Gratis</span>
          </EnvioStyled>
          <hr />
          <TotalStyled>
            <p>Total:</p>
            <PriceStyled>$4890</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
            <Submit> Iniciar pedido </Submit>
          </ButtonContainerStyled>
        </PriceContainerStyled>
    </ContainerStyled>
  );
};

export default ModalCart;
