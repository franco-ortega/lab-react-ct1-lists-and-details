import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Details from '../details/Details';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <Router>
        <h1>Cat Across the Globe!</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/details/:index"
            exact
            render={(routerProps) => <Details {...routerProps}
            />}
          />
        </Switch>
      </Router>
    </>
  );
}
