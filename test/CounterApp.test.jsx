import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
describe('Pruebas en componente <CounterApp />', () => {
   const valor = 100
   test('Debe hacer match con la configuración de snapshot', () => {
     const { container } = render(<CounterApp valor={valor}/>);
     expect( container ).toMatchSnapshot();
   });
   test('Debe mostrar el valor en h2', () => {
     render(<CounterApp valor={valor}/>);
     expect( screen.getByText(valor)).toBeTruthy();
     expect( screen.getByRole('heading',{ level: 2 }).innerHTML).toContain('100');
  });
  test('Debe incrementar con el botón +1', () => {
    render(<CounterApp valor={valor}/>);
    fireEvent.click( screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });
  test('Debe decrementar con el botón -1', () => {
    render(<CounterApp valor={valor}/>);
    fireEvent.click( screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });
  test('Debe reiniciar el valor inicial', () => {
    render(<CounterApp valor={valor}/>);
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('Reset'));
    expect(screen.getByText(valor)).toBeTruthy();
  });
});
