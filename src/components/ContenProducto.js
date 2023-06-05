import styles from '@/styles/ContenProducto.module.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ContenProducto (props) {
    /* ===== traductor ===== */
    const [ t, i18n ] = useTranslation ("traduccion");


    return(
        <div className={styles.div}>
        <section className={styles.seccion}>              
        <h1 className={styles.titulo}>{t("card.titulo")}</h1>
            <div className={styles.contenedor}>
                {props.children}  
            </div>

        </section>

        </div>
    )
}
export default ContenProducto;