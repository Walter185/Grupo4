import Comprar from "./comprar";

const styles={
    contenedor:{
        backgroundColor: "white",
        borderRadius: "16px",
        margin: "30px auto",
        padding: "20px",

    },
    imagen:{
        width: "150px",
        heigth: "100px",
        margin: "30px auto",
        padding: "5px",
        borderRadius: "16px",
        float: "left",        
    },
    concepto:{        
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "20px",
    },
    descripcion:{        
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "15px",
    },
    precio:{        
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
    },
}

function Productos (props) {
    return(
        <div style={styles.contenedor} >
            <img style={styles.imagen} src={props.imagen} alt="producto"></img>
            <h1 style={styles.concepto}>{props.titulo}</h1>
            <p style={styles.descripcion}>{props.texto}</p>
            <p style={styles.precio}>{props.precio}</p>
            <Comprar></Comprar>
        </div>
    )
}
export default Productos