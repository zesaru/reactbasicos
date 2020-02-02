import React from "react";

function Header({ titulo }) {
  return (
    <h1 id="encabezado" className="encabezado">
      {titulo}
    </h1>
  );
}

export default Header;
