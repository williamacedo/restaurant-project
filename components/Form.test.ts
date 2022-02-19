import { render } from '@testing-library/vue';

import Form from './Form.vue';

describe('<Form />', () => {
    it('should render slot data', () => {
        const { getByText } = render(Form, {
            slots: {
                default: '<div>Lorem Ipsum</div>'
            }
        })

        getByText('Lorem Ipsum');
    });

    it('should render buttons', () => {
        const { getByText } = render(Form, {
            slots: {
                default: '<div>Lorem Ipsum</div>'
            }
        })

        getByText('Cancelar');
        getByText('Salvar');
    });    
});