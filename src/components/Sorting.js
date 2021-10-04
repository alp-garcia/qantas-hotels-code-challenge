import React from 'react';
import SortingOrder from '../constants/sorting-order';

class ResultSorting extends React.Component {
  render() {
    return (
      <div className='listing-sorting'>
        <span data-testid='sorting-label' className='bold'>
          Sort By
        </span>

        <select
          data-testid='sorting-selector'
          onChange={this.props.onSorting}
          value={this.props.sorting}
        >
          <option value={SortingOrder.PRICE_HIGH_LOW}>Price (high-low)</option>
          <option value={SortingOrder.PRICE_LOW_HIGH}>Price (low-high)</option>
        </select>
      </div>
    );
  }
}

export default ResultSorting;
