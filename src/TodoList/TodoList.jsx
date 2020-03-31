import React from "react";
import {TodoItem} from "./TodoItem"
import {
  sortableContainer,
} from 'react-sortable-hoc';

// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});


export function TodoList(props) {
  const todoList = props.todoList
  const onSortEnd = props.onSortEnd
  const state = {items: todoList.items}

  const {items} = state;

  return (
    <SortableContainer onSortEnd={onSortEnd} useDragHandle>
    {items.map((value, index) => (
        <TodoItem todo={value} index={index} key={value}/>
    ))}
    </SortableContainer>
  );
}
