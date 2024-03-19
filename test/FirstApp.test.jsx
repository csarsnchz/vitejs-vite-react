import { getByText, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
describe('Pruebas en componente <FirstApp />', () => {
  // test('Debe hacer match con la configuración de snapshot', () => {
  //   const title = 'Hola, esta es una prueba'
  //   const { container } = render(<FirstApp title={title}/>);
  //   expect( container ).toMatchSnapshot();
  // });
  test('Debe mostrar el título en h1', () => {
    const title = 'Hola, esta es una prueba'
    const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toBe(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('',() => {
    const title = 'Hola, esta es una prueba';
    const subTitle = 'Testing';
    const { getByText } = render(
      <FirstApp 
          title={title}
          subTitle={subTitle}
      />
    );
    expect(getByText(subTitle)).toBeTruthy();
    expect(getByText(subTitle).innerHTML).toBe(subTitle);
  });
});
