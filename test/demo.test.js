test('Esta prueba no debe de fallar', () => {
  const message = 'Hola Mundo';
  const message2 = message.trim();

  expect(message2).toBe(message);
});
