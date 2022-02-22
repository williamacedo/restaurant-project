const axiosPutMock = jest.fn();
const axiosGetMock = jest.fn();
jest.mock('axios', () => {
    return {
      get: axiosGetMock,
      put: axiosPutMock
    };
});

import { render, fireEvent } from '@testing-library/vue';
import Edit from './Edit.vue';

const pushMock = jest.fn();

describe('<Edit />', () => {
    it('should call save data and call axios mock', async () => {
        axiosPutMock.mockResolvedValueOnce({ data: {} });
        const { getAllByTestId, getByText } = render(Edit, {
            mocks: { $route: { query: { productId: 1 } }, $router: { push: pushMock } }
        });

        const input = getAllByTestId('input-test') as HTMLInputElement[];

        await fireEvent.update(input[1], 'title');
        await fireEvent.update(input[2], 'description');
        await fireEvent.update(input[3], '5.50');

        const button = getByText('Salvar');

        await fireEvent.click(button);

        expect(axiosPutMock).toHaveBeenCalledWith("http://localhost:8000/products/1", {"description": "description", "price": "5.50", "title": "title"});
    });
});