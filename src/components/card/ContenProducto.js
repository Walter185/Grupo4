import styles from '@/styles/ContenProducto.module.css';

function ContenProducto (props) {
    return(
        <div className={styles.div}>
        <section className={styles.seccion}>              
        <h1 className={styles.titulo}>Productos</h1>
            <div className={styles.contenedor}>
                {props.children}  
            </div>

        </section>

        </div>
    )
}
export default ContenProducto;