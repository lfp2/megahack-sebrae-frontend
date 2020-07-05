import React from 'react';
import BottomMenu from './components/BottomMenu';
import PizzaToppings from './pages/PizzaToppings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PizzaDetails from './pages/PizzaDetails';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './config/apollo';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Box minHeight="350">
          <Switch>
            <Route exact path="/sabores">
              <PizzaToppings />
            </Route>
            <Route path={`/sabores/:pizzaId`}>
              <PizzaDetails />
            </Route>
          </Switch>
          <BottomMenu />
        </Box>
      </Router>
    </ApolloProvider>
  );
}

export default App;
