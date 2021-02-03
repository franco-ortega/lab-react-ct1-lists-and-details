import React, { Component } from 'react';
import AllCatBreeds from '../cats/AllCatBreeds';

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>These are cat facts:</h1>
        <AllCatBreeds />
      </>
    );
  }
}
