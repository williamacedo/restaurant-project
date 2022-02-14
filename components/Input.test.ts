import { render, fireEvent } from '@testing-library/vue';

import Input from './Input.vue';

describe('<Input />', () => {
    it('should render label and change input value', () => {
        const { getByText, getByTestId } = render(Input, {
            props: {
                inputLabel: 'Lorem',
                inputValue: ''
            }
        });

        getByText('Lorem');
        
        const input = getByTestId('input-test') as HTMLInputElement;

        fireEvent.update(input, '123');

        expect(input.value).toBe('123');
    });
});