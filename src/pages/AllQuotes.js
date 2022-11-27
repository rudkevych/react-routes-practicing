import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
  { id: 1, author: 'Koksana', text: 'Nothing is perfect but me' },
  { id: 2, author: 'Adam', text: 'Nothing is perfect but Koksana' },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default AllQuotes;
