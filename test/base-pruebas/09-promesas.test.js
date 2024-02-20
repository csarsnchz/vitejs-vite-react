import { getHeroByIdAsync } from '../../src/base-pruebas/09-promesas';
import heroe from '../../src/data/heroes';

describe('Pruebas en 09-promesas', () => {
  test('getHeroByIdAsync debe retornar un héroe', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroe.find((data) => data.id === id));
      done();
    });
  });

  test('getHeroByIdAsync debe retornar un error si el id no existe', async () => {
    const id = 10;
    await getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se encontró el héroe ${id}`);
    });
  });
});
