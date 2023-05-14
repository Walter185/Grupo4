

const styles={
    boton:{
        width: "120px",
        height: "50px",
        backgroundColor: "blue",
        borderRadius: "16px",
        color: "white",
        fontWeight: "bold",   
    },   
}

function Comprar () {
    return(
        <div >
            <button style={styles.boton}>Comprar</button>
            
        </div>
    )
}
export default Comprar