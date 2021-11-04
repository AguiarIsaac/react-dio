import React from 'react';
import Item from '../components/item/index.js';
import Card from '../components/card/index.js';

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com ReacJS</h1>
      <ul>
        <Item> Item 1 </Item>
        <Item> Item 2 </Item>
        <Item> Item 3 </Item>
      </ul>
      <Card />
    </>
  );
};

export default App;
