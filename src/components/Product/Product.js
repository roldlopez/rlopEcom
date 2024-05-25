import '../Product/Product.css';
import iphone from '../../static/products/apple.png';

function Product({product}) {
    return (
        <div className="re-prod-phone">
        <img className='re-prod-img' src={iphone} alt="" />
        <p className='re-prod-name'>Samsung Galaxy A54 5G</p>
        <p><del className='re-prod-normal'>$599.990</del> <em className='re-prod-price'>$449.990</em> <mark className='re-prod-mark'>34% de dcto</mark></p>
        <p>o 24 cuotas de $18.990</p>
        </div>
    );
}

export default Product;
