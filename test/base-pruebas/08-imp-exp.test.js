import {
  getHeroById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroe from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('Prueba de Retorno de un Heroe', () => {
    const id = 1;
    const hero = getHeroById(id);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('Prueba de NO Retorno de un Heroe', () => {
    const id = 10;
    const hero = getHeroById(id);
    expect(hero).toEqual(undefined);
    expect(hero).toBeFalsy;
  });

  test('Prueba de Retorno de los Heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    expect(heroes).toEqual(heroe.filter((hero) => hero.owner === owner));

    expect(heroes.length).toEqual(
      heroe.filter((hero) => hero.owner === owner).length
    );
  });

  test('Prueba de Retorno de los Heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
    expect(heroes).toEqual(heroe.filter((hero) => hero.owner === owner));
    expect(heroes.length).toEqual(
      heroe.filter((hero) => hero.owner === owner).length
    );
  });
});
