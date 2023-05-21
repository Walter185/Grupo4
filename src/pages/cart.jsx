import Image from 'next/image';
<<<<<<< HEAD
import styles from './../styles/CartPage.module.css';
=======
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
<<<<<<< HEAD
} from '../components/Cart/cart.slice';
=======
} from './../pages/redux/cart.slice';
import styles from './CartPage.module.css';
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
<<<<<<< HEAD
      (accumulator, item) => accumulator + item.quantity * item.precio,
=======
      (accumulator, item) => accumulator + item.quantity * item.price,
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
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
<<<<<<< HEAD
                <Image src={item.imagen} height="90" width="65" />
              </div>
              <p>{item.titulo}</p>
              <p>$ {item.precio}</p>
=======
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3
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
<<<<<<< HEAD
              <p>$ {(item.quantity * item.precio).toFixed(2)}</p>
=======
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
>>>>>>> ffc273f3c6657a60eed9dc45d4abe553eda786b3
            </div>
          ))}
          <h2>Total a pagar: $ {getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
