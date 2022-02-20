const axiosMock = jest.fn();
jest.mock('axios', () => {
    return {
      post: axiosMock
    };
});

import { render, fireEvent } from '@testing-library/vue';
import Register from './Register.vue';

describe('<Register />', () => {
    it('should call save data and call axios mock', async () => {
        axiosMock.mockResolvedValueOnce({ data: {} });
        const { getAllByTestId, getByText } = render(Register);

        const input = getAllByTestId('input-test') as HTMLInputElement[];

        await fireEvent.update(input[0], 'title');
        await fireEvent.update(input[1], 'description');
        await fireEvent.update(input[2], '5.50');

        const button = getByText('Salvar');

        await fireEvent.click(button);

        expect(axiosMock).toHaveBeenCalledWith("http://localhost:8000/products", {"description": "description", "price": "5.50", "title": "title"});
    });
});