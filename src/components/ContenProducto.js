

const styles={
    seccion:{
        backgroundColor: "red",
        width: "810px",
        margin: "30px auto",
        padding: "15px",
        minHeigth: "800px",
        borderRadius: "16px",

    },
    titulo:{
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "20px",
        marginBottom: "16px",        
    },
    contenedor:{
        width: "600px",
        heigth: "300px",
        margin: "15px auto",
    }
    
}

function ContenProducto (props) {
    return(
        <section style={styles.seccion}>              
        <h1 style={styles.titulo}>Productos</h1>
            <div style={styles.contenedor}>
                {props.children}  
            </div>

        </section>
    )
}
export default ContenProducto