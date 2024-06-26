import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGfs";

describe('Pruebas en el hook userFectchGifs', ()=>{
    test('debe regresar el estado inicial',()=>{
        const { result } = renderHook(() => useFetchGifs('Goku'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('will return an img[] && isLoading === false', async()=>{
        const { result } = renderHook(() => useFetchGifs('Goku'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);    
        expect(isLoading).toBeFalsy();
    });
});