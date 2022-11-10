import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import QuoteList from './components/quotes/QuoteList';

function App() {
  const quotes = [{ id: 1, text: 'text' }];
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/quotes'>
          <QuoteList quotes={quotes} />
        </Route>
        <Route path='/quotes/:id'>
          
        </Route>
        <Route path='/new-quote'>
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
