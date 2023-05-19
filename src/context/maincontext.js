const defaultState = {
    language : "es",
    darkMode : false,
    isLoggedIn: false,
    username : "anonymous"
}

export default function getInitialState() {
    // podemos cargar data previamente guardamente en localstorage..
    return defaultState;
}

export function saveContextState ( newcontextState) {
    //salva dentro de localstorage
    localStorage.setItem( "contextState", JSON.stringify(newcontextState))
}

