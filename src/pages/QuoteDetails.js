import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const DUMMY_DATA = [
  { id: 1, author: 'Koksana', text: 'Nothing is perfect but me' },
  { id: 2, author: 'Adam', text: 'Nothing is perfect but Koksana' },
];

const QuoteDetails = () => {
  const { id } = useParams();

  const quote = DUMMY_DATA.find(x => x.id === +id);

  if(!quote) {
    return <p>Quote is not found</p>
  }
  return (
    <>
      <h1>QuoteDetails with id {id}</h1>
      <Route path={`/quotes/${id}`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
