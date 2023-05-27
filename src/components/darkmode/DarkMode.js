import { maincontextState } from "@/context/maincontextprovider";
import { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function DarkMode (){
    const { darkMode, setDarkmode }  = useContext(maincontextState)
    let [isToggleOn, setToggle] = useState({darkMode});
       
    return(
        <>
          <Button className="ms-5" variant="secondary" size="sm" onClick={ () => {
                    setToggle(!isToggleOn)
                    setDarkmode(isToggleOn);
                }
            }>
                { isToggleOn ? 'Encendido': 'Apagado'}
          </Button>
        </>
    )
}
