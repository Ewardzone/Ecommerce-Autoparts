import Link from '../../components/UI/Link/Link';
import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
} from './FelicitacionesStyled';
import felicitacionesimg from '../../components/Assets/Img/Felicitaciones/felicitacionesimg.png'
import Pattern from '../../components/Assets/Img/MisOrdenes/Pattern.png' 

const Felicitaciones = () => {
  return (
    <div>
      <TextStyled>
        <img
          src= {felicitacionesimg}
          alt=''
        />
        <ContainerInfoStyled>
          <h1>¡!</h1>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Link to='/resumen'></Link>
      </TextStyled>
      <PatternStyled
        src= {Pattern}
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;