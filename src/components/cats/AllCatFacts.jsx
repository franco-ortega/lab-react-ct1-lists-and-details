import React, { Component } from 'react';
import { getCatFacts } from '../../services/catFactsApi';

export default class AllCatFacts extends Component {
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
        <CatFactList catFacts={catFacts} />
      );
    }
}
