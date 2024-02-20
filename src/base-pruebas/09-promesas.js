import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise = getHeroById(id);
      if (promise) {
        resolve(promise);
      } else {
        reject('No se encontró el héroe ' + id);
      }
    }, 1000);
  });
};
