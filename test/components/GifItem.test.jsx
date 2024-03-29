import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';
describe('Pruebas en componente <GifItem />', () => {
   const title = 'Goku GIF by Dragon Ball Super';
   const url='https://media2.giphy.com/media/irBHYSZxbUifTxTgBL/giphy-downsized-medium.gif?cid=e38884cdh9dao9hezjmv3e31vsmxroboxvywl2qf9b8qwsvf&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g';
   test('Debe hacer match con la configuración de snapshot', () => {
     const { container } = render(<GifItem title={title} url={url}/>);
     expect( container ).toMatchSnapshot();
   });
   test('Debe mostrar la imagen con el URL y el ALT indicado',()=>{
      render(<GifItem title={title} url={url} />);
      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
   });
   test('Debe mostrar el titulo en el componente',()=>{
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText( title )).toBeTruthy();
   });
});