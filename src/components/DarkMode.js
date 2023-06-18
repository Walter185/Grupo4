import { maincontextState } from "@/context/maincontextprovider";
import { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from '@/styles/DarkMode.module.css'

export default function DarkMode (){
    const { darkMode, setDarkmode }  = useContext(maincontextState)
    let [isToggleOn, setToggle] = useState({darkMode});
       
    return(
        <>
          <Button className={styles.btn} onClick={ () => {
                    setToggle(!isToggleOn)
                    setDarkmode(isToggleOn);
                }
            }>
                { isToggleOn ? 'OFF': 'ON'}
          </Button>
        </>
    )
}
