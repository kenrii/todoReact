import React from "react";
import "./styles.css";

// Voit käyttää tätä listaa ykköstehtävässä.
// eslint-disable-next-line
const exampleToDoList = [
  'Renderöi lista',
  'Toteuta lisäyskomponentti',
  'Toteuta valmiiksi merkkaaminen',
  'Bonus: järjestettävä lista'
];

export default function App() {
  // Tee tähän reactin tilaan kytkeytyvä useState-hook,
  // joka pitää sisällään Todo-listan elementit.

  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.

  // Allaolevaan rakenteeseen lisätään komponentit listaelementille
  // ja lisäyselementille.
  return (
    <div className="App">
      <h1>TO-DOH</h1>
    </div>
  );
}
