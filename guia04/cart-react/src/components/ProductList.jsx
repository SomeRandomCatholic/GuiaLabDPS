import React from "react";
import { data } from "../app/data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    // Busca si el item ya había sido añadido al carrito de compras
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    // Es la primera vez que se añade al carrito.
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const showModal = (product) => {
    let modal = document.getElementById(`myModal${product.id}`);
    modal.style.display = "block";
  }

  const closeModal = (product) =>{
    let modal = document.getElementById(`myModal${product.id}`);
    modal.style.display = "none";
  }

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title} onClick={() => { showModal(product) }}></img>
          </figure>
          <div id={`myModal${product.id}`} class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => {closeModal(product)}}>&times;</span>
              <h3>Título: {product.title}</h3>
              <br></br>
              <b>Descripción:</b>
              <br></br>
              <p>{product.descripcion}</p>
            </div>

          </div>

          <div className="info-product">
            <h2 className="titulo-producto-carrito">{product.title}</h2>
            <p className="price">${product.price}</p>
            <button
              className="btn-add-cart"
              onClick={() => onAddProduct(product)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
