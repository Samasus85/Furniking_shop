import { Redirect, Route, Switch } from 'react-router-dom';
import { Header, Home } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Redirect to="/home"><Home /></Redirect>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
