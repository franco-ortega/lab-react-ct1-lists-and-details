import React, { Component } from 'react';
import { getCatFacts } from '../../services/catFactsApi';
import CatBreedList from './CatBreedList';

export default class AllCatBreeds extends Component {
    state = {
      catFacts: []
    }

    componentDidMount() {
      getCatFacts()
        .then(catFacts => this.setState({ catFacts }));
    }

    render() {
      const { catFacts } = this.state;
      
      return (
        <CatBreedList catFacts={catFacts} />
      );
    }
}
