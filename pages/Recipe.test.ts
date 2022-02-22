const axiosMock = jest.fn();
const deleteMock = jest.fn();
jest.mock('axios', () => {
    return {
      get: axiosMock,
      delete: deleteMock
    };
});

import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/vue';
import Recipe from './Recipe.vue';

const recipeData = [
    {
        id: 1,
        title: "Hamburger",
        description: "Pão, hamburger, queijo, tomate e alface.",
        price: 10.00
    },
    {
        id: 2,
        title: "Batata Frita",
        description: "300g de batata frita com 50g de queijo cheddar.",
        price: 5.50
    },
]

const pushMock = jest.fn();

describe('<Recipe />', () => {    
    it('should render recipe data', async () => {
        axiosMock.mockResolvedValueOnce({ data: recipeData });

        const { findByText, getByText } = render(Recipe);

        await findByText('Batata Frita');
        getByText('300g de batata frita com 50g de queijo cheddar.');
        getByText('Hamburger');
        getByText(5.50);
    });

    it('should go to register page when click in new item button', async () => {
        axiosMock.mockResolvedValueOnce({ data: recipeData });

        const { findByTestId } = render(Recipe, {
            mocks: {
                $router: { push: pushMock }
            }
        });  

        const button = await findByTestId('new-item-test');

        fireEvent.click(button);

        expect(pushMock).toBeCalledWith({ path: '/register' });
    })

    it('should delete product when click in remove button', async () => {
        axiosMock.mockResolvedValueOnce({ data: recipeData });

        const { findAllByTestId } = render(Recipe, {
            mocks: {
                $router: { push: pushMock }
            }
        });  

        const button = await findAllByTestId('remove-test');

        await fireEvent.click(button[0]);

        expect(deleteMock).toBeCalledWith("http://localhost:8000/products/1");
    })
});
