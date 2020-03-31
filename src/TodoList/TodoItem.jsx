import React, { useState } from "react";
import "./todo-item.css";
import {
  sortableHandle,
  SortableElement,
} from 'react-sortable-hoc';

// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti. 

const DragHandle = sortableHandle(() => <span>::   </span>);

export function TodoItem(props) {
  // Voit toteuttaa tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona
  const todo = props.todo
  const [done, setDone] = useState(false)
  const mystyle = {
      textDecoration: done?"line-through":"none",
      listStyleType: "none"
  }
  // Muuttaa elementit tehdyiksi tai ei
  function handleClick() {
    setDone(done => !done)
  }

  // Tehdään elementit funktiossa
  const SortItems = SortableElement(({value}) => 
  <li className="todo-item" style={mystyle} onClick={() => handleClick()}>
      <DragHandle/>
      {value} 
  </li>)

  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.
  return (
    <SortItems value={todo} index={props.index} key={props.index}/>
  );
}
