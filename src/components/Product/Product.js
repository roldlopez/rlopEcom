import '../Product/Product.css';
// import iphone from '../../static/products/apple.png';
import { equiposContext } from '../../context/equiposContext';
import { useContext } from 'react';

function Product() {
   const equipos = useContext(equiposContext);

   return (
      <>
      {equipos.map((equipo, index) => {
          return (
              <div key={index} className="re-prod-phone">
                  <img className='re-prod-img' src={equipo.imagen} alt="" />
                  <p className='re-prod-name'>{equipo.equipo}</p>
                  <p><del className='re-prod-normal'>{equipo.precioNormal}</del> <em className='re-prod-price'>{equipo.precioOferta}</em> <mark className='re-prod-mark'>{equipo.descuento}</mark></p>
                  <p className='re-prod-cuotas'>{equipo.cuotas}</p>
              </div>
          );
      }) }
      </> 
   )
}
export default Product;
