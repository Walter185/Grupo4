import styles from '@/styles/Message.module.css'
import { useContext } from 'react'
import { maincontextState } from '@/context/maincontextprovider'

export default function Message({ text }) {
    let context = useContext(maincontextState);
    let darkMode = context.darkMode;

    return (
        <>
            <span className={darkMode ? styles.light : styles.dark}>{ text }</span>
        </>
    )
}