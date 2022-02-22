import { render, fireEvent } from '@testing-library/vue';

import Form from './Form.vue';

const pushMock = jest.fn();

describe('<Form />', () => {
    it('should render slot data', () => {
        const { getByText } = render(Form, {
            slots: {
                default: '<div>Lorem Ipsum</div>'
            }
        })

        getByText('Lorem Ipsum');
    });

    it('should render cancel button and call pushMock when is clicked', async () => {
        const { getByText } = render(Form, {
            slots: {
                default: '<div>Lorem Ipsum</div>'
            },
            mocks: {
                $router: { push: pushMock }
            }
        });

        await fireEvent.click(getByText('Cancelar'));

        expect(pushMock).toBeCalledWith('/');
    });    

    it('should emit save event when is called', async () => {
        const { getByText, emitted } = render(Form, {
            slots: {
                default: '<div>Lorem Ipsum</div>'
            },
            mocks: {
                $router: { push: pushMock }
            }
        });

        await fireEvent.click(getByText('Salvar'));

        expect(emitted()['save-data']).toBeTruthy();
    });
});