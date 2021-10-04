import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Sorting from './Sorting';
import SortingOrder from '../constants/sorting-order';

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId, getByText } = render(
      <Sorting sorting={SortingOrder.PRICE_HIGH_LOW} onSorting={() => {}} />
    );
    expect(queryByTestId('sorting-label')).toBeTruthy();
    expect(getByText('Sort By')).toBeTruthy();
    expect(queryByTestId('sorting-selector')).toBeTruthy();
  });
});

describe('when sorting by price', () => {
  let onSorting;

  beforeEach(() => {
    onSorting = jest.fn();
  });

  describe('when order by high to low', () => {
    it('should update to Price (high-low)', () => {
      const { queryByTestId } = render(
        <Sorting sorting={SortingOrder.PRICE_HIGH_LOW} onSorting={onSorting} />
      );

      const sortingField = queryByTestId('sorting-selector');
      fireEvent.change(sortingField, { target: { value: SortingOrder.PRICE_HIGH_LOW } });
      expect(sortingField.value).toBe(SortingOrder.PRICE_HIGH_LOW);
      expect(onSorting).toHaveBeenCalled();
    });
  });

  describe('when order by low to high', () => {
    it('should update to Price (high-low)', () => {
      const { queryByTestId } = render(
        <Sorting sorting={SortingOrder.PRICE_LOW_HIGH} onSorting={onSorting} />
      );

      const sortingField = queryByTestId('sorting-selector');
      fireEvent.change(sortingField, { target: { value: SortingOrder.PRICE_LOW_HIGH } });
      expect(sortingField.value).toBe(SortingOrder.PRICE_LOW_HIGH);
      expect(onSorting).toHaveBeenCalled();
    });
  });
});
