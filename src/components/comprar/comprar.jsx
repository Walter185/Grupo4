import styles from '@/styles/Comprar.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cart.slice';

function Comprar({props}) {
    const dispatch = useDispatch();
    return (
        <div >
            <button className={styles.boton}
                onClick={() => dispatch(addToCart(props))}
            >Comprar</button>
        </div>
    )
}
export default Comprar