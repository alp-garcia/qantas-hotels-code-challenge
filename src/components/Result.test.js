import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Result from './Result';
import SortingOrder from '../constants/sorting-order';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId } = render(<Result />);
    expect(queryByTestId('listing')).toBeTruthy();
    expect(queryByTestId('sorting-selector').value).toEqual(SortingOrder.PRICE_HIGH_LOW);
  });
});

describe('when changing sorting', () => {
  it('should sort as per the new order', () => {
    const { queryByTestId } = render(<Result />);
    const sortingField = queryByTestId('sorting-selector');
    expect(sortingField.value).toEqual(SortingOrder.PRICE_HIGH_LOW);

    fireEvent.change(sortingField, { target: { value: SortingOrder.PRICE_LOW_HIGH } });
    expect(sortingField.value).toBe(SortingOrder.PRICE_LOW_HIGH);
  });
});
