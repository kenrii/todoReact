import React, {useState} from "react";
import "./styles.css";
import {TodoList} from "./TodoList/TodoList";
import {AddInput} from "./AddInput/index";
import arrayMove from 'array-move';
// Voit käyttää tätä listaa ykköstehtävässä.
// eslint-disable-next-line


/*let exampleToDoList = {
   items: ['Renderöi lista',
          'Toteuta lisäyskomponentti',
          'Toteuta valmiiksi merkkaaminen',
          'Bonus: järjestettävä lista'
],};*/
let exampleToDoList = {
  items: ['Renderöi lista',
  'Toteuta lisäyskomponentti',
  'Toteuta valmiiksi merkkaaminen',
  'Bonus: järjestettävä lista'],
};

export default function App() {

  // Tee tähän reactin tilaan kytkeytyvä useState-hook,
  // joka pitää sisällään Todo-listan elementit.

  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.

  // Allaolevaan rakenteeseen lisätään komponentit listaelementille
  // ja lisäyselementille.
  const [todos, setTodos] = useState(exampleToDoList);
    
  // Funktio, joka lisää itemin listaan
  function addListItem(item) {
    const value = item.text;
    console.log(((value && exampleToDoList.items.includes(value.trim()))))
    console.log(exampleToDoList.items.includes(value.trim()))
    //const spaceChecker = value.split(" ").join("");
    if ((value && exampleToDoList.items.includes(value.trim())) || !((value && value.trim() !== ""))) {
      alert("The input value is either empty or it already exists  in the list.");
    }else{
      exampleToDoList = {items: exampleToDoList.items.concat([value.trim()])};
      setTodos(exampleToDoList)
    }
  };
  
  // Funktio, joka järjestelee itemit uusille paikoilleen
  const moveItems = ({oldIndex, newIndex}) => {
    setTodos(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  return (
    <div className="App">
      <h1>TO-DOH</h1>
      <AddInput addListItem={addListItem} />
      <TodoList todoList={todos} moveItems={moveItems} />
    </div>
  );
}
