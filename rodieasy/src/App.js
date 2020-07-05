import React from 'react';
import BottomMenu from './components/BottomMenu';
import PizzaToppings from './pages/PizzaToppings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PizzaDetails from './pages/PizzaDetails';

function App() {
  return (
    <Router>
      <div className="App" style={{ height: '100%' }}>
        <Switch>
          <Route exact path="/sabores">
            <PizzaToppings />
          </Route>
          <Route path={`/sabores/:pizzaId`}>
            <PizzaDetails />
          </Route>
        </Switch>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
