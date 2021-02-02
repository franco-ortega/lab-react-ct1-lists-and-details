import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllCatFacts from '../cats/AllCatFacts';
import Details from '../details/Details';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <Router>
        <h1>Hello Cats!</h1>
        <AllCatFacts />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/details/:catFactDetails"
            exact
            render={(routerProps) => <Details {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
