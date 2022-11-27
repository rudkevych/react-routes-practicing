import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>QuoteDetails with id {id}</h1>
      <Route path={`/quotes/${id}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
