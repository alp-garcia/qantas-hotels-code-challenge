import React from 'react';
import { render } from '@testing-library/react';
import ResultHeader from './ResultHeader';
import SortingOrder from '../constants/sorting-order';

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId } = render(
      <ResultHeader totalItems='5' sorting={SortingOrder.PRICE_HIGH_LOW} onSorting={() => {}} />
    );

    expect(queryByTestId('total')).toHaveTextContent('5 hotels in Sydney');
  });
});
