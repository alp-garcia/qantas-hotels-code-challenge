import React from 'react';
import ResultHeader from './ResultHeader';
import ResultList from './ResultList';
import SortingOrder from '../constants/sorting-order';
import orderBy from 'lodash/orderBy';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      sorting: SortingOrder.PRICE_HIGH_LOW
    };

    this.onSorting = this.onSorting.bind(this);
    this.sort = this.sort.bind(this);
  }

  onSorting(event) {
    this.setState({ sorting: event.target.value });
    this.sort(this.state.items, event.target.value);
  }

  sort(list, sort) {
    const order = sort === SortingOrder.PRICE_HIGH_LOW ? 'desc' : 'asc';
    const sortedItems = orderBy(list, ['offer.displayPrice.amount'], order);
    this.setState({ items: sortedItems });
  }

  componentDidMount() {
    fetch('http://localhost:8080/results')
      .then((res) => res.json())
      .then((data) => this.sort(data, this.state.sorting));
  }

  render() {
    return (
      <div data-testid='listing' className='listing'>
        <ResultHeader
          totalItems={this.state.items.length}
          sorting={this.state.sorting}
          onSorting={this.onSorting}
        />
        <ResultList items={this.state.items} />
      </div>
    );
  }
}

export default Result;
