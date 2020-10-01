import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import '@testing-library/jest-dom';

describe('tests in useForm', () => {

    const initialForm = {
        name: 'Eduardo',
        email: 'ed@gmail.com'
    };

    test('should return a default form', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [values] = result.current;
        expect(values).toEqual(initialForm);


    });

    test('should change value name form', () => {

        const { result } = renderHook(() => useForm(initialForm));


        const [,handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    value: 'Juan',
                    name: 'name'
                }
            });
        });

        const [values] = result.current;

        expect(values).toEqual({
            name: 'Juan',
            email: 'ed@gmail.com'
        })
    });

    test('should reset form value', () => {
        const { result } = renderHook(() => useForm(initialForm));


        const [,handleInputChange,reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    value: 'Juan',
                    name: 'name'
                }
            })
           reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });


})