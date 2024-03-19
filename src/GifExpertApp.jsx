import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Dragonball',
    'One Piece',
    'One Punch',
    'Samurai X',
  ]);
  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
    //setCategories((cat) => [...cat, 'Voltron']);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory />
      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
