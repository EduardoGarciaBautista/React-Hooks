import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { HookApp } from '../HookApp';

describe('Hook App test', () => {
    test('should be equals to snapshot', () => {
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();
    });
    
})