import { getUser, getUserAct } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'chipilin',
    };

    const user = getUser();
    expect(testUser).toEqual(user);
    expect(testUser).toStrictEqual(user);
  });

  test('getUserAct', () => {
    const username = 'che';
    const username2 = 'chipilin';

    const result = getUserAct(username);
    expect(result).toEqual({ uid: 'ABC456', username: username });

    const result2 = getUserAct(username2);
    expect(result2).toEqual({ uid: 'ABC456', username: username2 });
  });
});
