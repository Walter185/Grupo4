import styles from '@/styles/Comprar.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

const Comprar = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div >
            <button className={styles.boton}
                onClick={() => dispatch(addToCart(product))}
            >Agregar al carrito</button>
       
        </div>
    )
}
export default Comprar