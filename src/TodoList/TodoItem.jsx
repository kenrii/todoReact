import React from "react";

import "./todo-item.css";

// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti. 
export function TodoItem(props) {
  // Voit toteuttaa tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona

  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.
  return (
    <div className="todo-item">Listaelementti</div>
  );
}
