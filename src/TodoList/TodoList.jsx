import React from "react";
import {TodoItem} from "./TodoItem"

// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.



export function TodoList({ todoList }) {
  return (
    todoList.map(todo => {
      return <TodoItem todo={todo} key={todo.toString()} />
    })
  );
}
