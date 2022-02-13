import { render } from '@testing-library/vue';

import Row from './Row.vue';

describe('<Row />', () => {
    it('should render slot data', () => {
        const { getByText } = render(Row, {
            slots: {
                number: '<div>01</div>',
                'left-top': '<div>Batata</div>',
                'left-bottom': '<div>Lorem</div>',
                'right-text': '<div>5.50</div>',
            }
        })

        getByText('01');
        getByText('Batata');
        getByText('Lorem');
        getByText('5.50');
    });
});