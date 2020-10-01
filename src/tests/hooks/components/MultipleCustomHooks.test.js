import React from 'react';
const { shallow } = require("enzyme");
const { MultipleCustomHooks } = require("../../../components/03-examples/MultipleCustomHooks");
import '@testing-library/jest-dom';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');


describe('tests for MultipleCustomHooks', () => {




    test('should match ', () => {


        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    })


    test('should show info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Eduardo',
                quote: 'Hey hola',

            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);

        expect(wrapper.find('.mb-0').text().trim()).toBe('Hey hola');

        expect(wrapper.find('footer').text().trim()).toBe('Eduardo');


    })

});