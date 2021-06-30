import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Item from '../containers/Item';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/game/:gameId" component={Item} />
    </Switch>
  </main>
);

export default App;
