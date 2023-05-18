import { maincontextState } from "@/hooks/darkModeContext";
import { useContext } from "react";

export default function DarkModef (){

    let { darkMode } = useContext(maincontextState)
    let isToggleOn = darkMode;
       
    return(
        <>
          <button onClick={ () =>
                isToggleOn!=isToggleOn  
             }>
                { isToggleOn ? 'Encendido': 'Apagado'}
            </button>
        </>
    )
}