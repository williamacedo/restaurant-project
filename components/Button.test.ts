import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';

import Button from './Button.vue';

describe('<Button />', () => {
    it('should render button with props', () => {
        const { getByTestId } = render(Button, {
            props: {
                label: 'Lorem',
                bgColor: '#CCC',
                textColor: '#FFF'
            }
        })

        const button = getByTestId('button-test');

        expect(button).toHaveTextContent('Lorem');
        expect(button).toHaveStyle("background-color: #CCC;color: #FFF");
    });

    it('should emit event whem click in button', () => {
        const { getByTestId, emitted } = render(Button, {
            props: {
                label: 'Lorem',
                bgColor: '#CCC',
                textColor: '#FFF'
            }
        })

        fireEvent.click(getByTestId('button-test'));

        expect(emitted()['button-action']).toBeTruthy();
    });
});