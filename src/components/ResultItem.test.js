import React from 'react';
import { render } from '@testing-library/react';
import ResultItem from './ResultItem';
import '@testing-library/jest-dom/extend-expect';

const item = {
  id: 'mesq6mggyn',
  property: {
    propertyId: 'P107802',
    title: 'Primus Hotel Sydney',
    address: ['339 Pitt St', 'Sydney'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Primus Hotel Sydney',
      imageType: 'PRIMARY'
    },
    rating: {
      ratingValue: 5,
      ratingType: 'self'
    }
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER'
    },
    name: 'Deluxe King',
    displayPrice: {
      amount: 375.0,
      currency: 'AUD'
    },
    savings: {
      amount: 28.0,
      currency: 'AUD'
    },
    cancellationOption: {
      cancellationType: 'FREE_CANCELLATION'
    }
  }
};

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId } = render(<ResultItem item={item} />);
    expect(queryByTestId('result-item')).toBeTruthy();
  });

  it('should render the preview image correctly', () => {
    const { queryByTestId } = render(<ResultItem item={item} />);
    expect(queryByTestId('preview-image')).toHaveAttribute(
      'src',
      'https://unsplash.it/145/125/?random'
    );
    expect(queryByTestId('preview-image')).toHaveAttribute('alt', 'Image of Primus Hotel Sydney');
  });

  it('should render the property details correctly', () => {
    const { getByText } = render(<ResultItem item={item} />);
    expect(getByText('Primus Hotel Sydney')).toBeTruthy();
    expect(getByText('339 Pitt St, Sydney')).toBeTruthy();
  });

  it('should render the property offer correctly', () => {
    const { queryByTestId, getByText } = render(<ResultItem item={item} />);
    expect(getByText('Deluxe King')).toBeTruthy();
    expect(getByText('Free cancellation')).toBeTruthy();
    expect(queryByTestId('price').textContent).toEqual('375');
    expect(queryByTestId('savings').textContent).toEqual('Save $28~');
  });
});

describe('when testing cancellation policy', () => {
  describe('when cancellation policy is FREE_CANCELLATION', () => {
    it('should display Free Cancellation note', () => {
      const { queryByTestId } = render(<ResultItem item={item} />);
      expect(queryByTestId('cancellation')).toBeTruthy();
    });
  });

  describe('when cancellation policy is NOT_REFUNDABLE', () => {
    it('should not display Free Cancellation note', () => {
      const _item = Object.assign(item);
      _item.offer.cancellationOption.cancellationType = 'NOT_REFUNDABLE';
      const { queryByTestId } = render(<ResultItem item={item} />);
      expect(queryByTestId('cancellation')).toBeFalsy();
    });
  });
});

describe('when testing savings tag', () => {
  describe('with savings', () => {
    it('should display Free Cancellation note', () => {
      const { queryByTestId } = render(<ResultItem item={item} />);
      expect(queryByTestId('savings').textContent).toEqual('Save $28~');
    });
  });

  describe('when cancellation policy is NOT_REFUNDABLE', () => {
    it('should not display Free Cancellation note', () => {
      const _item = Object.assign(item);
      _item.offer.savings = null;
      const { queryByTestId } = render(<ResultItem item={item} />);
      expect(queryByTestId('savings')).toBeFalsy();
    });
  });
});
