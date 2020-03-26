import React from "react";

import './input.css';

// Todo-listalle tehdään uusia merkintöjä input-elementin avulla.
// Elementtiin tehdään testikenttä, joka tallentaa sisältönsä
// state-hookiin, ja nappi, joka lukee sisällön ja kutsuu
// komponenttiin propseissa tuotua addListItem-funktiota.
export function AddInput(props) {
  // Tee tähän kontrolloitu tekstikenttä ja lisää-nappi.
  // Mallia voit katsoa esimerkiksi tästä blogipostauksesta:
  // https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
  // Tyylittelyyn löytyy luokkia oheisesta css-tiedostosta.
  return (
    <div class="input-container">
    </div>
  );
}
