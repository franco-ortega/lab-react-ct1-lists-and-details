import React, { Component } from 'react';
import AllCatBreeds from '../cats/AllCatBreeds';

export default class Home extends Component {
  render() {
    return (
      <>
        <h2>Cat Breeds</h2>
        <p>
        There are many different breeds of cats around the world.
        Click on a breed to see its country of origin, coat, and pattern.
        </p>
        <AllCatBreeds />
      </>
    );
  }
}
