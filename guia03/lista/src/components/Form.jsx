"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../app/page.module.css";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([
    { todox: "todo 1" },
    { todox: "todo 2" },
    { todox: "todo 3" },
  ])

  const handleChange = e =>{
    setTodo({[e.target.name]:e.target.value})
  }

  const handleClick = e =>{
    if(Object.keys(todo).length === 0 || todo.todox.trim() === ''){
        alert('El campo no puede estar vacío')
        return
    }
    setTodos([...todos, todo])
  }

  const deleteTodo = indice =>{
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
  }

  return (
    <>

    <form onSubmit={e=>e.preventDefault()}>
        <label>Agregar Tarea</label><br></br>
        <input className={styles.form_input} types="text" name="todox" onChange={handleChange}></input>
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
    </form>
      {todos.map((value, index) => (
        <Todo todo={value.todox} key={index} deleteTodo={deleteTodo}></Todo>
      ))}
    </>
  );
};

export default Form;