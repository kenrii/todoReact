import React, { useState } from "react";

import "./todo-item.css";

// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti. 
export function TodoItem({todo}) {
  // Voit toteuttaa tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona
  const [done, setDone] = useState(false)
  const mystyle = {
      textDecoration: done?"line-through":"none"
  }

  function handleClick() {
    setDone(done => !done)
  }
  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.
  return (
    <div className="todo-item" style={mystyle} onClick={() => handleClick()}>
      {todo}
    </div>
  );
}
