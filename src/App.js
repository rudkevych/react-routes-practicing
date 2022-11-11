import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:id'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
