import React from 'react';
import ResultItem from './ResultItem';

const ResultList = (props) => {
  const items = props.items.map((item) => {
    return <ResultItem key={item.id} item={item} />;
  });

  return (
    <div data-testid='list' className='result-list'>
      {items}
    </div>
  );
};

export default ResultList;
