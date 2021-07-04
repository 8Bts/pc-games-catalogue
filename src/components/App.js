import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <div className="app">
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game/:gameId" component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
