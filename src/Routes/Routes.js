import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Felicitaciones from '../Pages/Felicitaciones/Felicitaciones';
import Resumen from '../Pages/Resumen/Resumen';
import Login from '../Pages/Login/Login';
import Checkout from '../Pages/Checkout/Checkout';
import MisOrdenes from '../Pages/MisOrdenes/MisOrdenes';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mis-ordenes' element={<MisOrdenes />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />
      <Route path='/resumen' element={<Resumen />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;