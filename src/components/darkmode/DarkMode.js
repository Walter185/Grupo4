import { maincontextState } from "@/context/maincontextprovider";
import { useContext } from "react";
import { useState } from "react";

export default function DarkMode (){

    const { darkMode, setDarkmode }  = useContext(maincontextState)
    let [isToggleOn, setToggle] = useState({darkMode});
       
    return(
        <>
          <button onClick={ () => {
                    setToggle(!isToggleOn)
                    setDarkmode(isToggleOn);
                }
             }>
                { isToggleOn ? 'Encendido': 'Apagado'}
            </button>
        </>
    )
}