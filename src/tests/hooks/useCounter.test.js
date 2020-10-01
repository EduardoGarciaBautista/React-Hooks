import '@testing-library/react-hooks'
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter tests', () => {
    test('should rerturn default values', () => {
        
        const {result} = renderHook(() => useCounter());

        expect(result.current[0]).toBe(10);

        expect(typeof result.current[1]).toBe('function');

        expect(typeof result.current[2]).toBe('function');

        expect(typeof result.current[3]).toBe('function');

    });
    test('should rerturn counter in 100', () => {
        
        const value = 100;
        const {result} = renderHook(() => useCounter(value));

        expect(result.current[0]).toBe(value);

    });
    

    test('should increment in 1', () => {
        
        const {result} = renderHook(() => useCounter(100));

        const increment = result.current[1];

        act(() => {
            increment();
        });

        const counter = result.current[0];

        expect(counter).toBe(101)
    });

    test('should decrement in 1', () => {
        
        const {result} = renderHook(() => useCounter(100));

        const decrement = result.current[2];

        act(() => {
            decrement();
        });
        const counter = result.current[0];

        expect(counter).toBe(99);

    });

    test('should reset default values', () => {
        const {result} = renderHook(() => useCounter(100));

        const reset = result.current[3];
        const increment = result.current[1];

        act(() => {
            increment();
            reset();
        });

        const counter = result.current[0];

        expect(counter).toBe(100);
    })
    
    
})