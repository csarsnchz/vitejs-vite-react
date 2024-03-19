import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Dragonball',
    'One Piece',
    'One Punch',
    'Samurai X',
  ]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, 'Voltron']);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
      onNewCategory={ onAddCategory }
      />
        {categories.map((category) => {
          return (
            <GifGrid 
              key={category}
              category={category}
            />
          );
        })}
    </>
  );
};
