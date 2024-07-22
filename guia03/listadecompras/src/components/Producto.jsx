import React, { useState } from 'react';
import styles from "../app/page.module.css";

const Producto = ({ index, nombre, marca, cantidad, precio, deleteProducto }) => {
    return (
        <tr>
            <td>{index +1}</td>
            <td>{nombre}</td>
            <td>{marca}</td>
            <td>{cantidad}</td>
            <td>${precio}</td>
            <td>${Math.round(cantidad * precio,2)}</td>
            <td><button className={styles.btn_delete} onClick={()=>deleteProducto(index)}>X</button></td>
        </tr>
    )
}

export default Producto