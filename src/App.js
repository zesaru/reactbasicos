import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 }
  ]);

  //obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo="tienda virtual" />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
