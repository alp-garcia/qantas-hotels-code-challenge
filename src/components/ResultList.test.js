import React from 'react';
import { render } from '@testing-library/react';
import ResultList from './ResultList';

const items = [
  {
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
  },
  {
    id: '5lm8loqk1s',
    property: {
      propertyId: 'P107804',
      title: 'PARKROYAL Darling Harbour Sydney',
      address: ['150 Day Street', 'Sydney'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of PARKROYAL Darling Harbour Sydney',
        imageType: 'PRIMARY'
      },
      rating: {
        ratingValue: 4.5,
        ratingType: 'star'
      }
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER'
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 535.0,
        currency: 'AUD'
      },
      savings: null,
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION'
      }
    }
  }
];

describe('when testing the component layout', () => {
  it('should render the component correctly', () => {
    const { queryByTestId } = render(<ResultList items={items} />);
    expect(queryByTestId('list')).toBeTruthy();
  });
});
