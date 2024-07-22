"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Producto from "./Producto";
import styles from "../app/page.module.css";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const [productos, setProductos] = useState([
    { nombre: "Jamón", marca: "Carnes Argentinas", cantidad: "3", precio: "2.45" },
    { nombre: "Shampoo", marca: "Head & Shoulders", cantidad: "2", precio: "4.60" },
    { nombre: "Lejía", marca: "Maxisol", cantidad: "5", precio: "0.45" },

  ])
  let total = 0;


  const changeNombre = e => {
    setNombre(e.target.value);
  }

  const changeMarca = e => {
    setMarca(e.target.value);
  }

  const changePrecio = e => {
    setPrecio(e.target.value);
  }
  const changeCantidad = e => {
    setCantidad(e.target.value);
  }

  const guardar = () => {
    if (nombre.trim() === "") {
      alert('El campo del nombre no puede estar vacío')
      return
    }

    if (marca.trim() === "") {
      alert('El campo de la marca no puede estar vacío')
      return
    }

    if (cantidad.trim() === "") {
      alert('El campo de la cantidad no puede estar vacío')
      return
    }

    if (precio.trim() === "") {
      alert('El campo del precio no puede estar vacío')
      return
    }

    setProductos([...productos, { nombre: nombre, marca: marca, cantidad: cantidad, precio: precio }]);
    calcularTotal();

  }

  const calcularTotal = () => {
    total = 0;
    productos.map((value) => {
      total += Math.round((value.cantidad) * (value.precio), 2);
    });

  }

  const deleteProducto = indice => {
    const newLista = [...productos]
    newLista.splice(indice, 1)
    setProductos(newLista);
    calcularTotal();

  }

  calcularTotal();

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label>Nombre del producto:</label>
        <input className={styles.form_input} type="text" name="nombre" onChange={changeNombre}></input>
        <label>Marca:</label><br></br>
        <input className={styles.form_input} type="text" name="marca" onChange={changeMarca}></input>
        <label>Cantidad:</label>
        <input className={styles.form_input} type="number" name="cantidad" onChange={changeCantidad}></input>
        <label>Precio:</label>
        <input className={styles.form_input} type="number" name="precio" onChange={changePrecio}></input>
        <button className={styles.form_button} onClick={guardar}>Agregar</button>
      </form>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Correlativo</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((value, index) => (
            <Producto index={index} nombre={value.nombre} marca={value.marca} cantidad={value.cantidad} precio={value.precio} deleteProducto={deleteProducto}></Producto>
          ))}
        </tbody>
      </table>
      <br></br>
      <h2>TOTAL: ${total}</h2>
    </>
  );
};

export default Form;