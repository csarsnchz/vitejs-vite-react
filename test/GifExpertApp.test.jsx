import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('Pruebas en componente <GifExpertApp />', () => {
   test('Debe hacer match con la configuración de snapshot', () => {
     const { container } = render(<GifExpertApp />);
     expect( container ).toMatchSnapshot();
   });
});
