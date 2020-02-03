import React from "react";

const Producto = ({ producto, productos, carrito, agregarProducto }) => {
  const { id, nombre, precio } = producto;

  //agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio}</p>
      <button type="button" onClick={() => seleccionarProducto(id)}>
        Comprar
      </button>
    </div>
  );
};

export default Producto;
