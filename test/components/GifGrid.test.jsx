import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGfs';

jest.mock('../../src/hooks/useFetchGfs')

describe('Pruebas en componente <GifGrid/>',()=>{
    const category = 'One Punch';
    test('debe mostrar el loading inicialmente',()=>{
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));
    });
    test('debe mostrar items cuando se cargan as imágenes desde useFetchGifs', ()=>{
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://goku.jpg'
            },
            {
                id: 'DEF',
                title: 'Vegeta',
                url: 'https://vegeta.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});