import Image from 'next/image';
import styles from './../styles/CartPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../components/cart.slice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.precio,
      0
    );
  };

  return (
    <div className={styles.container}>
      <br></br>
      {cart.length === 0 ? (
        <h1>Tu carrito está vacío.</h1>
      ) : (
        <>
        <br />
          <div className={styles.header}>
            <div>Producto</div>
            <div>Nombre</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Agregar o quitar</div>
            <div>Precio Total</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.imagen} height="90" width="65" />
              </div>
              <p>{item.titulo}</p>
              <p>$ {item.precio}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {(item.quantity * item.precio).toFixed(2)}</p>
            </div>
          ))}
          <h2>Total a pagar: $ {getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
