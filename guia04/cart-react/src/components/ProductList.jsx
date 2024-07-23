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
  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.title}></img>
          </figure>
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
