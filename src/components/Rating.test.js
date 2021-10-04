import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Rating from './Rating';

afterEach(() => cleanup());

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId } = render(<Rating value='5' type='star' />);

    expect(queryByTestId('rating')).toBeTruthy();
  });
});

describe('when testing different rate amounts', () => {
  describe('with star rate 0', () => {
    it('should display 0 star', () => {
      const { queryByTestId } = render(<Rating value='0' type='star' />);
      expect(queryByTestId('rating-item-1').className).toBe('star-empty');
      expect(queryByTestId('rating-item-2').className).toBe('star-empty');
      expect(queryByTestId('rating-item-3').className).toBe('star-empty');
      expect(queryByTestId('rating-item-4').className).toBe('star-empty');
      expect(queryByTestId('rating-item-5').className).toBe('star-empty');
    });
  });

  describe('with star rate 0.5', () => {
    it('should display half star', () => {
      const { queryByTestId } = render(<Rating value='0.5' type='star' />);
      expect(queryByTestId('rating-item-1').className).toBe('star-half');
      expect(queryByTestId('rating-item-2').className).toBe('star-empty');
      expect(queryByTestId('rating-item-3').className).toBe('star-empty');
      expect(queryByTestId('rating-item-4').className).toBe('star-empty');
      expect(queryByTestId('rating-item-5').className).toBe('star-empty');
    });
  });

  describe('with star rate 4.5', () => {
    it('should display four and a half stars', () => {
      const { queryByTestId } = render(<Rating value='4.5' type='star' />);
      expect(queryByTestId('rating-item-1').className).toBe('star-full');
      expect(queryByTestId('rating-item-2').className).toBe('star-full');
      expect(queryByTestId('rating-item-3').className).toBe('star-full');
      expect(queryByTestId('rating-item-4').className).toBe('star-full');
      expect(queryByTestId('rating-item-5').className).toBe('star-half');
    });
  });

  describe('with star rate 5', () => {
    it('should display five stars', () => {
      const { queryByTestId } = render(<Rating value='5' type='star' />);
      expect(queryByTestId('rating-item-1').className).toBe('star-full');
      expect(queryByTestId('rating-item-2').className).toBe('star-full');
      expect(queryByTestId('rating-item-3').className).toBe('star-full');
      expect(queryByTestId('rating-item-4').className).toBe('star-full');
      expect(queryByTestId('rating-item-5').className).toBe('star-full');
    });
  });
});

describe('when testing different rate types', () => {
  describe('with star type', () => {
    it('should display all type of stars', () => {
      const { queryByTestId } = render(<Rating value='2.5' type='star' />);
      expect(queryByTestId('rating-item-1').className).toBe('star-full');
      expect(queryByTestId('rating-item-2').className).toBe('star-full');
      expect(queryByTestId('rating-item-3').className).toBe('star-half');
      expect(queryByTestId('rating-item-4').className).toBe('star-empty');
      expect(queryByTestId('rating-item-5').className).toBe('star-empty');
    });
  });

  describe('with self type', () => {
    it('should display all type of self', () => {
      const { queryByTestId } = render(<Rating value='2.5' type='self' />);
      expect(queryByTestId('rating-item-1').className).toBe('self-full');
      expect(queryByTestId('rating-item-2').className).toBe('self-full');
      expect(queryByTestId('rating-item-3').className).toBe('self-half');
      expect(queryByTestId('rating-item-4').className).toBe('self-empty');
      expect(queryByTestId('rating-item-5').className).toBe('self-empty');
    });
  });
});
