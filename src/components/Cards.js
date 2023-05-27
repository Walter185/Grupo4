import Comprar from "./comprar";
import styles from '@/styles/Cards.module.css';
import Image from 'react-bootstrap/Image';

function Productos (props) {
    return(
        <>

            <div className={ styles.contenedor} >
                <Image className={ styles.imagen } src={props.imagen} alt="producto"></Image>
                <h1 className={styles.concepto}>{props.titulo}</h1>
                <p className={styles.descripcion}>{props.texto}</p>
                <p className={styles.precio}>${props.precio}</p>
        
            </div>
            <Comprar product={props} />           
            <div >
        </div>
        </>
    )
}
export default Productos;