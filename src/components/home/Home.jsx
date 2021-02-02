import React, { Component } from 'react';
import AllCatFacts from '../cats/AllCatFacts';

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>These are cat facts:</h1>
        <AllCatFacts />
      </>
    );
  }
}
