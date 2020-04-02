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
    
  // Funktio, joka lisää itemin listaan.
  // Varmistetaan ettei sama arvo ole jo valmiiksi listassa. 
  // Katsotaan onko arvo undefined ja onko se jo listassa.
  // Esim arvot "react-kurssi" ja "   react-kurssii   "(whitespaceä)
  // Yllä olevat arvojen tapauksessa jälkimmäistä ei hyväksytä listaan.
  // Koska se on sama asia kuin ensimmäinen paitsi siinä on whitespacea.
  // Myöskään pelkkää tekstikentän tyhjäksi jättämistä ei hyväksytä. 
  function addListItem(item) {
    const value = item.text;
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
