import React from 'react';
import Rating from './Rating';

const ResultItem = ({ item }) => {
  const { property, offer } = item;

  return (
    <div data-testid='result-item' className='result-item'>
      <div className='preview'>
        <img
          data-testid='preview-image'
          src={property.previewImage.url}
          className='preview-image'
          alt={property.previewImage.caption}
        />
        <span className='promotion-tag'>{offer.promotion.title}</span>
      </div>
      <div className='content'>
        <div data-testid='details' className='details'>
          <div data-testid='item-title' className='title'>
            <h2>{property.title}</h2>
            <Rating value={property.rating.ratingValue} type={property.rating.ratingType} />
          </div>
          <div className='address'>{property.address.join(', ')}</div>
        </div>
        <div className='offer'>
          <div className='offer-info'>
            <div className='name'>
              <a href='/'>{offer.name}</a>
            </div>
            {offer.cancellationOption.cancellationType === 'FREE_CANCELLATION' && (
              <div data-testid='cancellation' className='cancellation'>
                <span>Free cancellation</span>
              </div>
            )}
          </div>
          <div className='price'>
            <span className='period'>1 night total ({offer.displayPrice.currency})</span>
            <div className='display-price'>
              <span className='currency'>$</span>
              <span data-testid='price' className='amount'>
                {offer.displayPrice.amount}
              </span>
            </div>
            {offer.savings && (
              <div data-testid='savings' className='savings'>
                Save {`$${offer.savings.amount}`}~
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
