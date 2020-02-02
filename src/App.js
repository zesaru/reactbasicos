import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
