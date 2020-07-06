import React, { useState } from 'react';
import BottomMenu from './components/BottomMenu';
import PizzaToppings from './pages/PizzaToppings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PizzaDetails from './pages/PizzaDetails';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './config/apollo';
import InitialScreen from './pages/InitialScreen';
import Drinks from './pages/Drinks';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <InitialScreen />
          </Route>
          <Route exact path="/bebidas">
            <Drinks setShowNavBar={setShowNavBar} />
          </Route>
          <Route exact path="/sabores">
            <PizzaToppings setShowNavBar={setShowNavBar} />
          </Route>
          <Route path={`/sabores/:pizzaId`}>
            <PizzaDetails setShowNavBar={setShowNavBar} />
          </Route>
        </Switch>
        {showNavBar && <BottomMenu />}
      </Router>
    </ApolloProvider>
  );
}

export default App;
