import React from 'react';
import Sorting from './Sorting';

const ResultHeader = (props) => {
  return (
    <div className='listing-header'>
      <p data-testid='total' className='listing-total bold'>
        {props.totalItems} <span> hotels in</span> Sydney
      </p>
      <Sorting sorting={props.sorting} onSorting={props.onSorting} />
    </div>
  );
};

export default ResultHeader;
